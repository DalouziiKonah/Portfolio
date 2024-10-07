document.addEventListener("DOMContentLoaded", () => {
    // Navigation toggling
    const navToggle = document.querySelector(".nav-toggle");
    const closeBtn = document.querySelector(".close-btn");
    const navUl = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    if (navToggle && closeBtn && navUl) {
      // Toggle navigation when navToggle is clicked
      navToggle.addEventListener("click", function () {
        navUl.classList.toggle("show");
      });
    
      // Close navigation when closeBtn is clicked
      closeBtn.addEventListener("click", function () {
        navUl.classList.remove("show");
      });
    
      // Close navigation when any nav link is clicked
      navLinks.forEach(link => {
        link.addEventListener("click", function () {
          navUl.classList.remove("show");
        });
      });
    } else {
      console.log("Navigation elements missing");
    }
    
    // Slideshow
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;
    let slideInterval;
    if (slides && slide.length && indicators.length) {
      function showNextSlide() {
        currentIndex = (currentIndex + 1) % slide.length;
        updateSlidePosition();
      }
  
      function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
      }
      function updateIndicators() {
        indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
            indicator.classList.add("active");
          } else {
            indicator.classList.remove("active");
          }
        });
      }
  
      function startSlideShow() {
        slideInterval = setInterval(showNextSlide, 3000);
      }
      startSlideShow();
    } else {
      console.log("Slideshow elements missing");
    }
  
    // Read More button
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    const moreTexts = document.querySelectorAll(".more");
  
    if (readMoreBtns.length !== moreTexts.length) {
      console.error(
        "Mismatch between number of read more buttons and more text elements"
      );
      return;
    }
  
    readMoreBtns.forEach((readMoreBtn, index) => {
      const moreText = moreTexts[index];
      moreText.style.display = "none";
  
      readMoreBtn.addEventListener("click", function () {
        if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline";
          readMoreBtn.innerHTML = "<b><i>Show Less</i></b>";
        } else {
          moreText.style.display = "none";
          readMoreBtn.textContent = "Read More";
        }
      });
    });
    // login
// Define variables outside the function to ensure they're accessible
const loginToggle = document.getElementById("login-toggle");
const registerToggle = document.getElementById("register-toggle");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Check if elements exist and add event listeners
if (loginToggle && registerToggle && loginForm && registerForm) {
  loginToggle.addEventListener("click", () => toggleForm("login"));
  registerToggle.addEventListener("click", () => toggleForm("register"));

  // Define the toggleForm function
  function toggleForm(formType) {
    if (formType === "login") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    } else if (formType === "register") {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  }
}
// contact us
var contactTrigger = document.getElementById('contact-trigger');
var contactPopup = document.getElementById('contact-us');
var closePopup = document.getElementById('close-popup');

if (contactTrigger && contactPopup && closePopup) {
  contactTrigger.addEventListener('click', function(e) {
    e.preventDefault(); 
    contactPopup.style.display = 'flex';
  });

  closePopup.addEventListener('click', function() {
    contactPopup.style.display = 'none';
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function(e) {
    if (e.target === contactPopup) {
      contactPopup.style.display = 'none';
    }
  });
} else {
  console.log("Popup elements missing");
}
  // register alert
  let alertShown = false;

  function showTemporaryMessage(event) {
      if (!alertShown) {
          alert('This is a temporary log in platform and is used for test purpose only.');
          alertShown = true;
          const registerFields = document.querySelectorAll('#register-form input');
          registerFields.forEach(field => {
              field.removeEventListener('focus', showTemporaryMessage);
          });
      }
  }
  
  const registerFields = document.querySelectorAll('#register-form input');
  registerFields.forEach(field => {
      field.addEventListener('focus', showTemporaryMessage);
  });
  
    // Function to check login status and show/hide the logout button
    function checkLoginStatus() {
      fetch("/login-status")
        .then((response) => response.json())
        .then((data) => {
          if (data.loggedIn) {
            document.getElementById("logout-button").classList.remove("hidden");
          } else {
            document.getElementById("logout-button").classList.add("hidden");
          }
        })
        .catch((error) => console.error("Error checking login status:", error));
    }
   
    // About Us Gallery
    document.querySelectorAll(".gallery-alumni").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.querySelector(".filmstrip").style.animationPlayState = "paused";
      });
  
      item.addEventListener("mouseleave", () => {
        document.querySelector(".filmstrip").style.animationPlayState = "running";
      });
    });
  
    // Prospectus
    function createTooltip() {
      let tooltip = document.querySelector(".tooltip");
      if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = "Tap to expand";
        document.body.appendChild(tooltip);
      }
      return tooltip;
    }
  
    function showTooltip(e, tooltip) {
      tooltip.style.display = "block";
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
    }
  
    function hideTooltip(tooltip) {
      tooltip.style.display = "none";
    }
  
    function toggleGallery(gallery) {
      gallery.style.display = gallery.style.display === "none" ? "flex" : "none";
    }
  
    function addLargeScreenEvents(section, tooltip) {
      const gallery = section.querySelector(".prospectus-gallery");
      const header = section.querySelector("p");
  
      if (gallery) {
        gallery.style.display = "none";
      }
  
      if (header) {
        header.addEventListener("mouseover", function (e) {
          if (gallery) {
            showTooltip(e, tooltip);
          }
        });
  
        header.addEventListener("mousemove", function (e) {
          if (gallery) {
            showTooltip(e, tooltip);
          }
        });
  
        header.addEventListener("mouseout", function () {
          hideTooltip(tooltip);
        });
  
        header.addEventListener("click", function () {
          hideTooltip(tooltip);
        });
  
        section.addEventListener("click", function (e) {
          if (e.target.closest(".prospectus-gallery")) return;
  
          document
            .querySelectorAll(".prospectus-gallery")
            .forEach((secGallery) => {
              if (secGallery !== gallery) {
                secGallery.style.display = "none"; // Hide other galleries
              }
            });
  
          if (gallery) {
            toggleGallery(gallery);
          }
        });
      }
    }
  
    function removeLargeScreenEvents(section) {
      const gallery = section.querySelector(".prospectus-gallery");
      const header = section.querySelector("p");
  
      if (gallery) {
        gallery.style.display = "flex"; // Show gallery
      }
  
      if (header) {
        const newHeader = header.cloneNode(true);
        header.replaceWith(newHeader); // Remove event listeners by replacing element
      }
    }
  
    function handleScreenResize() {
      const sections = document.querySelectorAll(".section");
      const tooltip = createTooltip();
  
      if (window.innerWidth > 769) {
        sections.forEach((section) => {
          addLargeScreenEvents(section, tooltip);
        });
      } else {
        sections.forEach((section) => {
          removeLargeScreenEvents(section);
  
          // Remove any tooltips
          const tooltip = document.querySelector(".tooltip");
          if (tooltip) {
            tooltip.remove();
          }
        });
      }
    }
  
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize(); // Initial call
  
    // News and Announcements
    window.toggleAnnouncementSection = function (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.toggle("announcement-collapsed");
      } else {
        console.error(`Section with ID ${sectionId} not found`);
      }
    };
    
//log out
      const logoutButton = document.getElementById('logout-button');
      if (logoutButton) {
        logoutButton.addEventListener('click', function () {
          try {
            sessionStorage.clear(); // Clear session data
            localStorage.clear();
            console.log('Session and local storage cleared.');
          } catch (error) {
            console.error('Error clearing storage:', error);
          }
          document.addEventListener('DOMContentLoaded', function () {
            if (!sessionStorage.getItem('userLoggedIn')) { 
              window.location.href = '/index.html'; 
            }
          });
          window.location.href = '/index.html'; 
        });
      }
      document.getElementById('apply-now-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const form = document.getElementById('admission-form');
        if (form.style.display === 'block') {
            form.style.display = 'none'; // 
        } else {
            form.style.display = 'block'; // Show the form if it's hidden
        }
    });
    
      // admission form prompt
      let AlertShown = false;
    
      // Function to show alert and disable form fields
      function showAlertAndDisableForm() {
          if (!AlertShown) {
            
              alert("The owner is currently learning backend integration for this website. The form will be disabled for now.");
              alertShown = true;
              
              // Disable all input fields, textareas, and the submit button
              const formElements = document.querySelectorAll("#admission-form input, #admission-form textarea, #admission-form button");
              formElements.forEach(element => element.disabled = true);
          }
      }
  
      const inputElements = document.querySelectorAll("#admission-form input, #admission-form textarea, #admission-form button");
      inputElements.forEach(element => element.addEventListener("click", showAlertAndDisableForm));
  });
  
  