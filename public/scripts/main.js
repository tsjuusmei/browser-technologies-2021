console.log('js is loaded')

function validateForm() {
  const name = document.forms["login"]["name"].value;
  const studentNumber = document.forms["login"]["user_studentnr"].value
  if (name == "") {
    alert("Vul je naam in");
    return false;
  } else if (studentNumber == ""){
    alert("Vul je studentnummer in");
    return false;
  }
}