let navBar = document.querySelector("#icon"),
    closeBar = document.querySelector("#closebar"),
    sideBar = document.querySelector("#side"),
    side = document.querySelector("#side-bar");

navBar.onclick = function() {
  sideBar.classList.toggle("nav-show");
  if (sideBar.classList.contains("nav-show") === true) {
    setTimeout(() => {
      document.querySelector("main").style.display = "none";
      document.querySelector("footer").style.display = "none";
      document.querySelector(".iconh").style.display = "none";
    }, 500);
  } else {
    document.querySelector("main").style.removeProperty("display");
    document.querySelector("footer").style.removeProperty("display");
    document.querySelector(".iconh").style.removeProperty("display");
  }
};

// closeBar.onclick = function() {
  // sideBar.classList.toggle("nav-show");
// };

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
// start office design window
// 1
document.querySelector("#more-dubai-office").onclick = function() {
  open("#window-dubai-office");
};
document.querySelector("#close-dubai-office").onclick = function() {
  close("#window-dubai-office");
};
document.querySelector("#cwindow-dubai-office").onclick = function() {
  close("#window-dubai-office");
};
// 2
document.querySelector("#more-stw-office-design").onclick = function() {
  open("#window-stw-office-design");
};
document.querySelector("#close-stw-office-design").onclick = function() {
  close("#window-stw-office-design");
};
document.querySelector("#cwindow-stw-office-design").onclick = function() {
  close("#window-stw-office-design");
};
// 3
document.querySelector("#more-primsketch-office-dubai").onclick = function() {
  open("#window-primsketch-office-dubai");
};
document.querySelector("#close-primsketch-office-dubai").onclick = function() {
  close("#window-primsketch-office-dubai");
};
document.querySelector("#cwindow-primsketch-office-dubai").onclick = function() {
  close("#window-primsketch-office-dubai");
};
// 4
document.querySelector("#more-office-design-germany").onclick = function() {
  open("#window-office-design-germany");
};
document.querySelector("#close-office-design-germany").onclick = function() {
  close("#window-office-design-germany");
};
document.querySelector("#cwindow-office-design-germany").onclick = function() {
  close("#window-office-design-germany");
};
// 5
document.querySelector("#more-abu-dhabi-office").onclick = function() {
  open("#window-abu-dhabi-office");
};
document.querySelector("#close-abu-dhabi-office").onclick = function() {
  close("#window-abu-dhabi-office");
};
document.querySelector("#cwindow-abu-dhabi-office").onclick = function() {
  close("#window-abu-dhabi-office");
};
// 6
document.querySelector("#more-dubai-police-office").onclick = function() {
  open("#window-dubai-police-office");
};
document.querySelector("#close-dubai-police-office").onclick = function() {
  close("#window-dubai-police-office");
};
document.querySelector("#cwindow-dubai-police-office").onclick = function() {
  close("#window-dubai-police-office");
};
// end
// start retail window
// 1
document.querySelector("#more-saudi-ghd").onclick = function() {
  open("#window-saudi-ghd");
};
document.querySelector("#close-saudi-ghdsaudi-ghd").onclick = function() {
  close("#window-saudi-ghd");
};
document.querySelector("#cwindow-saudi-ghd").onclick = function() {
  close("#window-saudi-ghd");
};
// 2
document.querySelector("#more-beautique-sdd").onclick = function() {
  open("#window-beautique-sdd");
};
document.querySelector("#close-beautique-sdd").onclick = function() {
  close("#window-beautique-sdd");
};
document.querySelector("#cwindow-beautique-sdd").onclick = function() {
  close("#window-beautique-sdd");
};
// 3
document.querySelector("#more-luxury-bkt").onclick = function() {
  open("#window-luxury-bkt");
};
document.querySelector("#close-luxury-bkt").onclick = function() {
  close("#window-luxury-bkt");
};
document.querySelector("#cwindow-luxury-bkt").onclick = function() {
  close("#window-luxury-bkt");
};
// 4
document.querySelector("#more-the-aos").onclick = function() {
  open("#window-the-aos");
};
document.querySelector("#close-the-aos").onclick = function() {
  close("#window-the-aos");
};
document.querySelector("#cwindow-the-aos").onclick = function() {
  close("#window-the-aos");
};
// 5
document.querySelector("#more-glomar-dubai").onclick = function() {
  open("#window-glomar-dubai");
};
document.querySelector("#close-glomar-dubai").onclick = function() {
  close("#window-glomar-dubai");
};
document.querySelector("#cwindow-glomar-dubai").onclick = function() {
  close("#window-glomar-dubai");
};
// 6
document.querySelector("#more-bridal-sd").onclick = function() {
  open("#window-bridal-sd");
};
document.querySelector("#close-bridal-sd").onclick = function() {
  close("#window-bridal-sd");
};
document.querySelector("#cwindow-bridal-sd").onclick = function() {
  close("#window-bridal-sd");
};
// end
// start residential window
// 1
document.querySelector("#open-al-ain-privet-villa").onclick = function() {
  open("#window-al-ain-privet-villa");
};
document.querySelector("#close-al-ain-privet-villa").onclick = function() {
  close("#window-al-ain-privet-villa");
};
document.querySelector("#c-al-ain-privet-villa").onclick = function() {
  close("#window-al-ain-privet-villa");
};
// 2
document.querySelector("#open-lntercity-hotel-dubai").onclick = function() {
  open("#window-lntercity-hotel-dubai");
};
document.querySelector("#close-lntercity-hotel-dubai").onclick = function() {
  close("#window-lntercity-hotel-dubai");
};
document.querySelector("#c-lntercity-hotel-dubai").onclick = function() {
  close("#window-lntercity-hotel-dubai");
};
// 3
document.querySelector("#open-turkish-path").onclick = function() {
  open("#window-turkish-path");
};
document.querySelector("#close-turkish-path").onclick = function() {
  close("#window-turkish-path");
};
document.querySelector("#c-turkish-path").onclick = function() {
  close("#window-turkish-path");
};
// end