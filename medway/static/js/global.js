// JavaScript to create and animate the custom cursor
document.addEventListener("DOMContentLoaded", function () {
    // Create the custom cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
  
    // Follow mouse movement
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  
    // Add 'hovered' class when mouse is over specific interactive elements
    const hoverableElements = document.querySelectorAll("a, button, .hover-trigger");
  
    hoverableElements.forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hovered");
      });
  
      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
      });
    });
  
    // Add 'active' class for the animation effect when the cursor is moving
    document.addEventListener("mousemove", () => {
      cursor.classList.add("active");
      clearTimeout(cursor.timer);
      cursor.timer = setTimeout(() => {
        cursor.classList.remove("active");
      }, 100);
    });
  });
  