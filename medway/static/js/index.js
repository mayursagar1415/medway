      document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Section Fade-in Animation
  const sections = document.querySelectorAll(".hidden-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
          observer.unobserve(entry.target); // Stop observing once shown
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );
  sections.forEach((section) => observer.observe(section));

  // Mobile Menu Toggle
  const menuToggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggleButton && mobileMenu) {
    menuToggleButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

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

  // Appointment Form Submission Validation
  const appointmentForm = document.getElementById("appointment-form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (!name || !email || !date || !time) {
        alert("Please fill out all fields before submitting.");
        return;
      }

      alert("Your appointment has been booked successfully!");
    });
  }

  // Newsletter Subscription
  const subscribeButton = document.getElementById("subscribe-button");
  if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      if (!email) {
        alert("Please enter a valid email address to subscribe.");
        return;
      }
      alert(`Thank you for subscribing! Updates will be sent to ${email}.`);
    });
  }

  // Fade-in Animation for Service Cards
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          serviceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01 }
  );
  serviceCards.forEach((card) => serviceObserver.observe(card));

  // Statistics Section Animation
  const statItems = document.querySelectorAll(".stat-item");
  const statValues = document.querySelectorAll(".stat-value");
  const statisticsSection = document.getElementById("statistics");
  let statsAnimated = false; // Prevent multiple triggers

  function animateStats() {
    if (statsAnimated) return;
    const sectionPosition = statisticsSection.getBoundingClientRect();

    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      statsAnimated = true;

      statItems.forEach((item, index) => {
        item.classList.add("visible");

        const statValue = statValues[index];
        const target = +statValue.getAttribute("data-target");
        const duration = 2000;
        const increment = target / (duration / 30);

        let currentValue = 0;
        const counter = setInterval(() => {
          if (currentValue < target) {
            currentValue += increment;
            statValue.textContent = Math.ceil(currentValue);
          } else {
            statValue.textContent = target;
            clearInterval(counter);
          }
        }, 30);
      });
    }
  }

  window.addEventListener("scroll", animateStats);

  // Why Choose Us Section Animation
  const whyChooseUsSection = document.getElementById("why-choose-us");
  const fadeElements = document.querySelectorAll(".animate-fade");
  const slideElements = document.querySelectorAll(".animate-slide");
  // let animationTriggered = false;

  function triggerWhyChooseUsAnimations() {
    if (animationTriggered) return;

    const sectionPosition = whyChooseUsSection.getBoundingClientRect();

    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      animationTriggered = true;

      fadeElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 400);
      });

      slideElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 50);
      });
    }
  }

  window.addEventListener("scroll", triggerWhyChooseUsAnimations);
});

// Slide-in Animation for Appointment, Why Choose Us, and Subscribe Sections
document.addEventListener("DOMContentLoaded", () => {
  const slideInElements = document.querySelectorAll(".slide-in");

  const slideInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          slideInObserver.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );

  slideInElements.forEach((element) => slideInObserver.observe(element));
});
 
