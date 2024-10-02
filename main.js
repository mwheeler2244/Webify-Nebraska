

const navLinks = document.querySelector(".nav__links");
const mobileOpen = document.querySelector(".mobile__open")
const mobileClose = document.querySelector(".mobile__close")
const links = document.querySelectorAll("li")




mobileOpen.addEventListener('click', ()=>{
    navLinks.classList.toggle("active")
})









 window.addEventListener("scroll", function () {
     let nav = document.querySelector("nav");
     let heroHeight = document.querySelector(".hero").offsetHeight;

     if (window.scrollY > heroHeight) {
       nav.classList.add("sticky-nav");
     } else {
       nav.classList.remove("sticky-nav");
     }
   });


