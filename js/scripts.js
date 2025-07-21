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

  const masthead = document.querySelector('.masthead');
  const dotsContainer = document.querySelector('.slider-dots');
  const pauseBtn = document.querySelector('.pause-btn');
  const playBtn = document.querySelector('.play-btn');
  
  // Image URLs
  const images = [
    "/assets/img/img4.jpg",
    "/assets/img/img3.jpg",
    "/assets/img/img1.jpg",
    "/assets/img/img2.jpg"
  ];
  
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let slideInterval;

  // Create dots
  images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Auto-slide function
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateBackground();
    }, 5000); // 5-second interval
  }

  // Update background and dots
  function updateBackground() {
    masthead.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Manual navigation
  function goToSlide(index) {
    currentIndex = index;
    updateBackground();
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Touch swipe detection
  masthead.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideInterval); // Pause auto-slide during swipe
  }, { passive: true });

  masthead.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide(); // Resume auto-slide
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    if (touchEndX < touchStartX - threshold) {
      // Swipe left (next)
      currentIndex = (currentIndex + 1) % images.length;
    } else if (touchEndX > touchStartX + threshold) {
      // Swipe right (previous)
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    updateBackground();
  }

  // Pause/Play controls
  pauseBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    pauseBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
  });

  playBtn.addEventListener('click', () => {
    startAutoSlide();
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  });

  // Initialize
  updateBackground();
  startAutoSlide();




 const slides = document.querySelectorAll('.team-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    let currentIndex1 = 0;
    
    // Initialize carousel
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    // Navigation
    function goToPrev() {
        currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : slides.length - 1;
        showSlide(currentIndex1);
    }
    
    function goToNext() {
        currentIndex1 = (currentIndex1 < slides.length - 1) ? currentIndex1 + 1 : 0;
        showSlide(currentIndex1);
    }
    
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex1 = index;
            showSlide(currentIndex1);
        });
    });
    
    // Read more functionality
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const moreContent = this.previousElementSibling.querySelector('.more-content');
            const isExpanded = moreContent.style.display === 'block';
            
            moreContent.style.display = isExpanded ? 'none' : 'block';
            this.textContent = isExpanded ? 'Read More' : 'Read Less';
            
            // Scroll to show more content if needed
            if (!isExpanded) {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrev();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });
    
    // Initialize first slide
    showSlide(currentIndex1);






document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    if (!content) return;

    // Toggle only the targeted content
    content.classList.toggle('expanded');
    
    // Update button text accordingly
    const isExpanded = content.classList.contains('expanded');
    button.textContent = isExpanded ? 'Read Less' : 'Read More';
    button.setAttribute('aria-expanded', isExpanded);
  });
});

});


