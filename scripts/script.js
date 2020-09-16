// JavaScript Document

var hamburgerMenu = document.querySelector("nav .hamburger");
var sidebar = document.querySelector("div .sidebarmenu");

hamburgerMenu.addEventListener("click", toggleMenu);


function toggleMenu() {
	sidebar.classList.toggle("sidebarmenu");
	side.remove();
}

// function toggleMenu() {
// 	var sidebar = document.querySelector("div .sidebarmenu");
// 	sidebar.remove();
// }
