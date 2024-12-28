document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Section Fade-in Animation
  const section = document.getElementById("about-section");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("show-section");
        observer.unobserve(section); // Stop observing once it's shown
      }
    },
    {
      threshold: 0.3, // Trigger when 30% of the section is visible
    }
  );
  observer.observe(section);

  // Mobile Menu Toggle
  const menuToggleButton = document.querySelector("button.md\\:hidden");
  const menu = document.querySelector(".md\\:flex");

  menuToggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    menu.classList.toggle("flex-col");
    menu.classList.toggle("absolute");
    menu.classList.toggle("top-16");
    menu.classList.toggle("right-0");
    menu.classList.toggle("bg-white");
    menu.classList.toggle("w-full");
    menu.classList.toggle("p-4");
    menu.classList.toggle("shadow-lg");
  });

  // Dropdown Menu Toggle
  const userMenuButton = document.getElementById("user-menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (userMenuButton && dropdownMenu) {
    userMenuButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("show");
    });

    window.addEventListener("click", (e) => {
      if (!userMenuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }

  // Appointment Form Submission
  const appointmentForm = document.getElementById("appointment-form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullName = document.getElementById("full-name").value;
      const mobileNumber = document.getElementById("mobile-number").value;
      const location = document.getElementById("location").value;
      const message = document.getElementById("message").value;

      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      alert(`Appointment details:\nName: ${fullName}\nMobile Number: ${mobileNumber}\nLocation: ${location}\nMessage: ${message}`);
      alert("Your appointment has been booked successfully!");
    });
  }

  // Newsletter Subscription
  const subscribeButton = document.getElementById("subscribe-button");
  if (subscribeButton) {
    subscribeButton.addEventListener("click", function () {
      const email = document.getElementById("email").value;
      if (!email) {
        alert("Please enter a valid email address to subscribe.");
        return;
      }
      alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    });
  }

  // Fetch User's Location
  const fetchLocationButton = document.getElementById("fetch-location");
  if (fetchLocationButton) {
    fetchLocationButton.addEventListener("click", function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationField = document.getElementById("location");
            locationField.value = `Lat: ${lat}, Lon: ${lon}`;
          },
          function (error) {
            alert("Location fetching failed. Please try again.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    });
  }

  // Toggling Mobile Menu Visibility
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // Adding Active Class to Current Menu Item
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Intersection Observer for Fade-in and Slide-up Animation
  const fadeInElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );
  fadeInElements.forEach(element => fadeObserver.observe(element));

  // Intersection Observer for Service Cards Fade-in and Slide-up Animation
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  serviceCards.forEach(card => serviceObserver.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
  const statisticsSection = document.getElementById("statistics");
  const statItems = document.querySelectorAll(".stat-item");
  const statValues = document.querySelectorAll(".stat-value");

  let animationTriggered = false; // Flag to ensure animation runs only once

  function animateStats() {
    if (animationTriggered) return; // Prevent re-triggering
    const sectionPosition = statisticsSection.getBoundingClientRect();

    // Check if the section is in the viewport
    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      animationTriggered = true; // Mark as triggered

      statItems.forEach((item, index) => {
        // Add visible class for transition effect
        item.classList.add("visible");

        const statValue = statValues[index];
        const target = +statValue.getAttribute("data-target");
        const duration = 2000; // Animation duration in ms
        const increment = target / (duration / 30); // Adjust speed

        let currentValue = 0;

        const animateCounter = setInterval(() => {
          if (currentValue < target) {
            currentValue += increment;
            statValue.textContent = Math.ceil(currentValue);
          } else {
            statValue.textContent = target; // Ensure final value
            clearInterval(animateCounter);
          }
        }, 30); // 30ms intervals for smooth animation
      });

      // Remove scroll event listener after animation completes
      window.removeEventListener("scroll", animateStats);
    }
  }

  // Attach the scroll listener
  window.addEventListener("scroll", animateStats);
});


document.addEventListener("DOMContentLoaded", () => {
  const whyChooseUsSection = document.getElementById("why-choose-us");
  const fadeElements = document.querySelectorAll(".animate-fade");
  const slideElements = document.querySelectorAll(".animate-slide");

  let animationTriggered = false;

  function triggerAnimations() {
    if (animationTriggered) return; // Prevent multiple triggers

    const sectionPosition = whyChooseUsSection.getBoundingClientRect();

    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      animationTriggered = true;

      // Add 'visible' class to fade-in elements
      fadeElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 200); // Stagger animations
      });

      // Add 'visible' class to slide-in elements
      slideElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 300); // Stagger animations
      });

      // Remove event listener for optimization
      window.removeEventListener("scroll", triggerAnimations);
    }
  }

  // Attach the scroll listener
  window.addEventListener("scroll", triggerAnimations);
});

