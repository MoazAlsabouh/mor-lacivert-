let navBar = document.querySelector("#icon"),
    closeBar = document.querySelector("#closebar"),
    sideBar = document.querySelector("#side"),
    side = document.querySelector("#side-bar");

navBar.onclick = function() {
  sideBar.classList.toggle("nav-show");
  if (sideBar.classList.contains("nav-show") === true) {
    setTimeout(() => {
      document.querySelector("body").style.height = "150vh";
      document.querySelector("body").style.overflow = "hidden";
    }, 500);
  } else {
    document.querySelector("body").style.removeProperty("height");
    document.querySelector("body").style.removeProperty("overflow");
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
button.forEach(() => {
  addEventListener("click", (el) => {
    open(`#${el.target.dataset.name}`);
  });
});

closes.forEach(() => {
  addEventListener("click", (el) => {
    close(`#${el.target.dataset.name}`);
  });
});

document.querySelector(".cy").textContent = new Date().getFullYear();