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
    workingHoursList.appendChild(item);
}
});
