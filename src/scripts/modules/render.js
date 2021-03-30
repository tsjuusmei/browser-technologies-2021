const courseData = require('./courseData.js');
const dataScript = require('./dataScript.js');

async function course(req, res) {
    let course = await courseData(req.params.course)
    let user = req.params.id;

    let {enq} = dataScript.getUserData(user)

    let [courseList] = enq.filter(e => req.params.course == e.course)

    let grade = 0
    
    if(courseList) {
        grade = courseList.grade
    } else if (!courseList) {
        grade = 0
    }

    res.render('list', {
        title: 'Enquête' + req.params.course,
        courseList,
        course: req.params.course,
        grade,
        data: course,
        id: req.params.id,
    })
}

function loginPost(req, res) {
    dataScript.pushUserData(req.body);

    res.redirect('/' + req.body.user_studentnr + '/home');
}

function enqPost(req, res) {
    dataScript.pushEnq(req.body, req.params.id, req.params.course);

    res.redirect('/' + req.params.id + '/home');
}

function login(req, res) {
    res.render('login', {
        title: 'Login | Enquêtes'
    })
}

async function home(req, res) {
    let user = req.params.id;
    const userData = await dataScript.getUserData(user)
    const make = await dataScript.getEnq(user)
    const done = await dataScript.doneEnq(user)
    const started = await dataScript.startedEnq(user)

    res.render('home', {
        title: 'Mijn Enquêtes',
        name: userData.user_name,
        make,
        done,
        started
    })
}

module.exports = {
    course,
    loginPost,
    enqPost,
    login,
    home
}