
document.getElementById("menu-toggle").addEventListener("click", function() {
    var navbar = document.getElementById("navbar-dropdown");
    navbar.classList.toggle("hidden");
});

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
    var dropdownMenu = document.getElementById("dropdownNavbar");
    if (!event.target.closest("#dropdownNavbarLink")) {
        dropdownMenu.classList.add("hidden");
    }
});


// for Carousel 
var swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".multiple-slide-carousel .swiper-button-next",
      prevEl: ".multiple-slide-carousel .swiper-button-prev",
    },
    breakpoints: {
     1920: {
         slidesPerView: 3,
         spaceBetween: 30
     },
     1028: {
         slidesPerView: 2,
         spaceBetween: 30
     },
     990: {
         slidesPerView: 1,
         spaceBetween: 0
     }
   }
  });

