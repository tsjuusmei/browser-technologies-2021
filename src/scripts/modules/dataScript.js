const fs = require('fs');
let path = "./public/scripts/data.json";

function getDataFile() {
  let data = JSON.parse(fs.readFileSync(path, "utf8"))

  return data
}

function pushUserData(user) {
  let path = "./public/scripts/data.json";
  let data = getDataFile()

  if (!data[user.user_studentnr]) {

    data[user.user_studentnr] = {
      user_name: user.user_name,
      user_studentnr: user.user_studentnr,
      enq: []
    }

    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err) console.error(err)
    });
  }
}

function pushEnq(enq, user, course) {
  let data = getDataFile()
  let started = true
  let finished = false

  if (enq.save) {
    finished = false
  } else if (enq.submit) {
    finished = true
  }

  let courseEnq = data[user].enq.find(enq => course == enq.course)

  console.log(enq)

  if (courseEnq) {
    courseEnq.lecturer = enq.lecturer,
      courseEnq.material = enq.material,
      courseEnq.grade = enq.grade,
      courseEnq.week = enq.week,
      courseEnq.content = enq.content,
      courseEnq.learning = enq.learning,
      courseEnq.comments = enq.comments,
      courseEnq.finished = finished,
      courseEnq.started = started
  } else {
    data[user].enq.push({
      course,
      lecturer: enq.lecturer,
      material: enq.material,
      week: enq.week,
      grade: enq.grade,
      content: enq.content,
      learning: enq.learning,
      comments: enq.comments,
      finished,
      started
    })
  }

  fs.writeFile(path, JSON.stringify(data), (err) => {
    if (err) console.error(err)
  });
}

function getUserData(user) {
  let data = getDataFile()

  let userData = data[user];

  return userData;
}

function getFormData(course) {
  let userData = getUserData()
  let enquetes = userData.enq
  let enquete = enquetes.filter(enq => enq.course)
}

function getEnq(user) {

  let allCourses = ["Progressive Web App", "Browser Technologies", "Web App From Scratch", "CSS To The Rescue", "Real-Time Web", "Human Centered Design", "Meesterproef"]
  let userData = getUserData(user)
  let enquetes = userData.enq

  let courses = allCourses.filter(course => {
    if (!enquetes.some(enq => course == enq.course)) return course
  })

  return courses;
}

function startedEnq(user) {
  let userData = getUserData(user)
  let enquetes = userData.enq

  let startedEnq = enquetes.filter(enq => {
    if (enq.started && !enq.finished) {
      return enq
    } else {
      console.log('geen finished enquetes')
    }
  })
  let courseNames = startedEnq.map(enq => enq.course)
  return courseNames;
}

function doneEnq(user) {
  let userData = getUserData(user)
  let enquetes = userData.enq

  let doneEnq = enquetes.filter(enq => {
    if (enq.finished) {
      return enq
    } 
  })
  let courseNames = doneEnq.map(enq => enq.course)
  return courseNames;
}

module.exports = {
  getDataFile,
  pushUserData,
  pushEnq,
  getUserData,
  getEnq,
  startedEnq,
  doneEnq
}