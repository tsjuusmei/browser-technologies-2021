const fs = require('fs')

const loginPost = (req, res) => {

  // Get data file
  const dataFile = fs.readFileSync("./src/data/data.json");

  // Convert it to an array
  const data = Array.from(JSON.parse(dataFile));

  // Get the surveys from the data file
  const enquetes = data[0].enquetes

  res.render('dashboard', {
    name: req.body.name,
    studentNumber: req.body.studentNumber,
    title: 'Dashboard | Enquêtes',
    enquetes: enquetes
  })
}

module.exports = { loginPost }