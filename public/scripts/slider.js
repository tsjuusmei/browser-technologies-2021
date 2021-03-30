function changeSliders(input) {
  if (input) {
      input.type = 'range';
      input.value = grade;
      input.classList.add('slider');

      let sliderText = document.createElement('p');
      let text = document.createTextNode(input.value);

      sliderText.appendChild(text);
      input.parentNode.insertBefore(sliderText, input.nextSibling);
  }
}

let changeValue = function () {
  let slider = document.querySelector(".slider");
  let sliderValue = document.querySelector(".slider + p");
  sliderValue.innerHTML = slider.value;
}

if (document.querySelector) {
  let input = document.querySelector(".number input[type=number]");
  changeSliders(input);

  let slider = document.querySelector(".slider");
  if (slider) {
      slider.addEventListener('input', changeValue);
  }
} else {
  console.log("slider functionality is not supported")
}