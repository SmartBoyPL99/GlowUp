// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction(),scrollFunction()};
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 480px from the top of the document, show the button


function scrollFunction() {
  if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
     
  } else {
    navbar.classList.remove("sticky");
     
  }
}

{/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}}

