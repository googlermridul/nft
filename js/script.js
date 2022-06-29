// pre loader
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
   setTimeout(() => {
      preloader.style.cssText = `opacity: 0; visibility: hidden;`;
   }, 1000);
});

// add bg to nav
window.addEventListener("scroll", function () {
   let scrollpos = window.scrollY;
   const header = document.querySelector("nav");
   const headerHeight = header.offsetHeight;

   if (scrollpos >= headerHeight) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
});

// active nav item
const navItem = document.getElementsByClassName("nav-link");
for (const element of navItem) {
   element.addEventListener("click", () => {
      for (const ele of navItem) {
         ele.classList.remove("active");
      }
      element.classList.add("active");
   });
}

// tab
const tabs = document.getElementsByClassName("tab");
const contents = document.getElementsByClassName("content");
for (const element of tabs) {
   const tabId = element.getAttribute("tab-id");
   const content = document.getElementById(tabId);
   element.addEventListener("click", () => {
      for (const t of tabs) {
         t.classList.remove("active");
      }
      for (const c of contents) {
         c.classList.remove("active");
      }
      element.classList.add("active");
      content.classList.add("active");
   });
}

$(document).ready(function () {
   $(".testimonials").owlCarousel({
      loop: true,
      margin: 25,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 1,
         },
         992: {
            items: 2,
         },
      },
   });

   // AOS ANIMATION
   AOS.init();

   // COUNTER UP
   $(".counter").counterUp({
      delay: 10,
      time: 3000,
   });

   // SCROLL TOP
   $(".scroll-up").fadeOut();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      }
   });
});
