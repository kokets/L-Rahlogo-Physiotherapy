/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
 // Define working hours
 const workingHours = {
    0: { day: "Sunday", hours: "Closed" },
    1: { day: "Monday", hours: "08:00 - 16:00" },
    2: { day: "Tuesday", hours: "08:00 - 16:00" },
    3: { day: "Wednesday", hours: "08:00 - 16:00" },
    4: { day: "Thursday", hours: "08:00 - 16:00" },
    5: { day: "Friday", hours: "08:00 - 16:00" },
    6: { day: "Saturday", hours: "09:00 - 15:00" }
};

const now = new Date();
const dayIndex = now.getDay();
const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes for comparison
const today = workingHours[dayIndex];

// Determine if the business is open or closed
let statusText = "Closed Now";
let statusColor = "red";

if (today.hours !== "Closed") {
    const [openTime, closeTime] = today.hours.split(" - ").map(time => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes; // Convert to minutes
    });

    if (currentTime >= openTime && currentTime <= closeTime) {
        statusText = "Open Now";
        statusColor = " #88E788";
    }
}

// Update status display
document.getElementById("current-status").innerText = statusText;
document.getElementById("current-status").style.color = statusColor;

// Display working hours list
const workingHoursList = document.getElementById("working-hours");
for (let i = 0; i < 7; i++) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${workingHours[i].day}:</strong> ${workingHours[i].hours}`;
    if (i === dayIndex) {
        item.style.color = "#0dcaf0"; // Highlight current day
        item.style.fontWeight = "bold";
    }
    // workingHoursList.appendChild(item);
}
  // const masthead = document.querySelector('.masthead');
  // const slides = document.querySelectorAll('.background-slides .slide');
  // const dotsContainer = document.querySelector('.slider-dots');
  // const pauseBtn = document.querySelector('.pause-btn');
  // const playBtn = document.querySelector('.play-btn');
  
  // let currentIndex = 0;
  // let touchStartX = 0;
  // let touchEndX = 0;
  // let slideInterval;

  // // Create navigation dots
  // slides.forEach((_, index) => {
  //   const dot = document.createElement('div');
  //   dot.classList.add('dot');
  //   if (index === 0) dot.classList.add('active');
  //   dot.addEventListener('click', () => goToSlide(index));
  //   dotsContainer.appendChild(dot);
  // });

  // // Auto-slide function
  // function startAutoSlide() {
  //   slideInterval = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % slides.length;
  //     updateSlides();
  //   }, 5000); // Change slide every 5 seconds
  // }

  // // Update visible slide and active dot
  // function updateSlides() {
  //   slides.forEach((slide, index) => {
  //     slide.classList.toggle('active', index === currentIndex);
  //   });
    
  //   document.querySelectorAll('.dot').forEach((dot, index) => {
  //     dot.classList.toggle('active', index === currentIndex);
  //   });
  // }

  // // Manual navigation to specific slide
  // function goToSlide(index) {
  //   currentIndex = index;
  //   updateSlides();
  //   resetAutoSlide();
  // }

  // // Reset the auto-slide timer
  // function resetAutoSlide() {
  //   clearInterval(slideInterval);
  //   startAutoSlide();
  // }

  // // Touch swipe detection
  // masthead.addEventListener('touchstart', (e) => {
  //   touchStartX = e.changedTouches[0].screenX;
  //   clearInterval(slideInterval); // Pause auto-slide during swipe
  // }, { passive: true });

  // masthead.addEventListener('touchend', (e) => {
  //   touchEndX = e.changedTouches[0].screenX;
  //   handleSwipe();
  //   startAutoSlide(); // Resume auto-slide after swipe
  // }, { passive: true });

  // function handleSwipe() {
  //   const threshold = 50; // Minimum swipe distance in pixels
    
  //   if (touchEndX < touchStartX - threshold) {
  //     // Swipe left - next slide
  //     currentIndex = (currentIndex + 1) % slides.length;
  //   } else if (touchEndX > touchStartX + threshold) {
  //     // Swipe right - previous slide
  //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //   }
  //   updateSlides();
  // }

  // // Pause/Play controls
  // pauseBtn.addEventListener('click', () => {
  //   clearInterval(slideInterval);
  //   pauseBtn.classList.add('hidden');
  //   playBtn.classList.remove('hidden');
  // });

  // playBtn.addEventListener('click', () => {
  //   startAutoSlide();
  //   playBtn.classList.add('hidden');
  //   pauseBtn.classList.remove('hidden');
  // });

  // // Keyboard navigation
  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 'ArrowLeft') {
  //     // Left arrow - previous slide
  //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //     updateSlides();
  //     resetAutoSlide();
  //   } else if (e.key === 'ArrowRight') {
  //     // Right arrow - next slide
  //     currentIndex = (currentIndex + 1) % slides.length;
  //     updateSlides();
  //     resetAutoSlide();
  //   }
  // });

  // // Initialize the slider
  // updateSlides();
  // startAutoSlide();

const slides = document.querySelectorAll('.masthead-slide');
  let currentIndex = 0;
  let slideInterval;

  function startSlider() {
    slideInterval = setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 5000); // Change every 5 seconds
  }

  function stopSlider() {
    clearInterval(slideInterval);
  }

  // Start the slider
  startSlider();

  // Pause on hover (optional)
  const masthead = document.querySelector('.masthead');
  masthead.addEventListener('mouseenter', stopSlider);
  masthead.addEventListener('mouseleave', startSlider);

});


