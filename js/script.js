let navBar = document.querySelector("#icon"),
    closeBar = document.querySelector("#closebar"),
    sideBar = document.querySelector("#side"),
    side = document.querySelector("#side-bar");

navBar.onclick = function() {
  sideBar.classList.toggle("nav-show");
  if (sideBar.classList.contains("nav-show") === true) {
    document.querySelector(".nav-show").style.cssText = "position: fixed; right: 0; top: 0;";
  } else {
    sideBar.style.cssText = "position: fixed; right: 20px; top: 100px;";
  }
};

side.onclick = function() {
  sideBar.classList.toggle("nav-show");
};
// open function
function open(window) {
  document.querySelector(window).classList.toggle("shows");
}
// end function
// close function
function close(window) {
  document.querySelector(window).classList.toggle("shows");
}

// end function

let button = document.querySelectorAll(".open"),
  closes = document.querySelectorAll(".close");
button.forEach((section) => {
  section.addEventListener("click", (el) => {
    open(`#${el.target.dataset.name}`);
  });
});

closes.forEach((section) => {
  section.addEventListener("click", (el) => {
    close(`#${el.target.dataset.name}`);
  });
});

document.querySelector(".cy").textContent = new Date().getFullYear();

// slider
let sliderImage = document.querySelectorAll(".intro .slider img"),
  sliderUl = document.querySelectorAll(".intro ul li"),
  nextButton = document.querySelector(".intro .next"),
  prevButton = document.querySelector(".intro .prev");

let startSlider = 0;


// next image
function nextSlider() {
  if (startSlider === 4) {
    startSlider = 0
    active(sliderImage, sliderUl);
  } else {
    startSlider++;
    active(sliderImage, sliderUl);
  }
}

//  prev image
function prevSlider() {
  if (startSlider === 0) {
    startSlider = 4
    active(sliderImage, sliderUl);
  } else {
    startSlider--;
    active(sliderImage, sliderUl);
  }
}

// click buton
nextButton.onclick = () => {
  nextSlider()
}

prevButton.onclick = () => {
  prevSlider()
}

sliderUl.forEach((e) => {
  e.addEventListener("click", (el) => {
    startSlider = el.target.dataset.number
    active(sliderImage, sliderUl)
  })
})


// add active
sliderImage[startSlider].classList = "active"
sliderUl[startSlider].classList = "active"

// remove and add active
function active(array , ul) {
  array.forEach(e => {
    e.classList.remove("active");
  })
  ul.forEach(e => {
    e.classList.remove("active");
  })
  array[startSlider].classList = "active";
  ul[startSlider].classList = "active";
}

let animation = setInterval(() => {
  nextSlider()
}, 7000);

// haeder 

let haeder = document.querySelector("header");
let afterHaeder = document.querySelector(".intro + section");
let haederContenar = document.querySelector("header .contenar");
let haederContact = document.querySelector("header .contenar .contact");


window.onscroll = () => {
  haeder.style.cssText = `top: ${window.scrollY}px;`
  haederContact.style.cssText = `display: flex;`
  haederContenar.style.cssText = `border-bottom: 1px solid white;`

  if (scrollY >= afterHaeder.offsetTop ) {
    haeder.style.cssText = `top: ${window.scrollY}px; background: #000000bf;`
    haederContenar.style.cssText = `border: none;`
    haederContact.style.cssText = `display: none;`
    sideBar.style.cssText = "top: 45px;"
  }
}