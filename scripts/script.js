// JavaScript Document

var hamburgerMenu = document.querySelector("nav div .hamburger");
var sidebar = document.querySelector("article .sidebarmenu");
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


// bron: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

function toggleMenu() {
 if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}