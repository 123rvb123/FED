// JavaScript Document

var hamburgerMenu = document.querySelector("nav .hamburger");
var sidebar = document.querySelector("div .sidebarmenu");
var hamburgerMenuSideBar = document.querySelector("nav .hamburgerinside");

hamburgerMenu.addEventListener("click", toggleMenu);
hamburgerMenuSideBar.addEventListener("click", toggleMenu);


// function toggleMenu() {
// 	sidebar.classList.toggle("sidebarmenu");
// }

// function toggleMenu() {
// 	var sidebar = document.querySelector("div .sidebarmenu");
// 	sidebar.remove();
// }

function toggleMenu() {
 if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}