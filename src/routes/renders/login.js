const login = (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { login }