const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

const form = document.querySelector("form");
const inputField = document.querySelectorAll('.input-field');

const typed = new Typed('#role', {
  strings: ["Frontend Developer", "Web Developer", "Jr. Software Engineer"],
  typeSpeed: 100,
  backspeed: 100,
  backDelay: 1000,
  loop: true,
});

hamburger.addEventListener("click", function () {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");

  if (hamIcon.style.display === "none") {
    crossIcon.style.display = "none";
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
  } else {
    hamIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
    menu.style.display = "block";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputField.forEach((input)=> input.value = '')
  alert("Under Maintenance");
});
