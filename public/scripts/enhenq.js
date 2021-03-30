document.getElementById("q1").style.display = "none";
document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "none";
document.getElementById("q4").style.display = "none";
document.getElementById("q5").style.display = "none";
document.getElementById("q6").style.display = "none";

document.getElementById("submitEnquete").disabled = true;

const lecturersq = document.querySelectorAll('input[name="lecturer"]');

if (lecturersq[0].checked || lecturersq[1].checked) {
  document.getElementById("q1").style.display = "block";
} else {
  lecturersq.forEach((lecturer) => {
    lecturer.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("q1").style.display = "block";
  }
}

const periodq = document.querySelectorAll('input[name="period"]');

if (periodq[0].checked || periodq[1].checked || periodq[2].checked || periodq[3].checked) {
  document.getElementById("q2").style.display = "block";
} else {
  periodq.forEach((period) => {
    period.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("q2").style.display = "block";
  }
}

const gradeq = document.querySelectorAll('input[name="grade"]');

if (grade.value && gradeq[0].value == 0) {
  gradeq.forEach((grade) => {
    grade.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("q3").style.display = "block";
  }
} else {
  document.getElementById("q3").style.display = "block";
}

const materialq = document.querySelectorAll('input[name="material"]');

if (materialq[0].checked || materialq[1].checked || materialq[2].checked) {
  document.getElementById("q4").style.display = "block";
} else {
  materialq.forEach((material) => {
    material.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("q4").style.display = "block";
  }
}

const contentq = document.querySelectorAll('input[name="content"]');

if (contentq[0].checked || contentq[1].checked || contentq[2].checked) {
  document.getElementById("q5").style.display = "block";
} else {
  contentq.forEach((content) => {
    content.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("q5").style.display = "block";
  }
}

const learningq = document.querySelectorAll('input[name="learning"]');

if (learningq[0].checked || learningq[1].checked) {
  document.getElementById("q6").style.display = "block";
  document.getElementById("submitEnquete").disabled = false;
} else {
  learningq.forEach((learning) => {
    learning.addEventListener("change", toggleCheckbox6)
  })

  function toggleCheckbox6() {
    document.getElementById("q6").style.display = "block";
    document.getElementById("submitEnquete").disabled = false;
  }
}