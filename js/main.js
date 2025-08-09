// ===============================
// Utility: Load HTML into Element
// ===============================
function loadHTML(id, url, callback) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (typeof callback === "function") callback(); // Run callback after injection
    })
    .catch(error => console.error("Error loading HTML:", error));
}

// ====================================
// Setup: Resume Download Button Logic
// ====================================
function setupResumeDownload() {
  const button = document.getElementById("download-resume");
  if (button) {
    button.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "assets/pdfs/caleb_nielsen_resume.pdf";
      link.download = "Caleb_Nielsen_Resume.pdf";
      document.body.appendChild(link); // required to trigger download
      link.click();
      document.body.removeChild(link); // cleanup
    });
  }
}

// ============================================
// Nav Highlighting: Set Active Link by URL
// ============================================
function highlightCurrentNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('ul.nav a.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('text-secondary'); // Clear existing highlight
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-secondary'); // Add highlight to current page
    }
  });
}

// ============================
// Sticky Header on Scroll
// ============================
function setupStickyHeader() {
  const header = document.querySelector("header");

  function toggleHeaderBackground() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      header.classList.remove("transparent");
    } else {
      header.classList.add("transparent");
      header.classList.remove("scrolled");
    }
  }

  toggleHeaderBackground(); // Initial state
  window.addEventListener("scroll", toggleHeaderBackground);
}

// =============================================
// Read More Button for Collapsing Text (Mobile)
// =============================================
function setupReadMoreToggle() {
  const textSide = document.getElementById("project-text");
  if (!textSide) return; // Exit if no target element

  const paragraphs = textSide.querySelectorAll("p");
  if (paragraphs.length <= 1) return; // No need if 1 or fewer paragraphs

  let button = textSide.querySelector(".read-more-btn"); // Reuse if already added

  function updateVisibility() {
    if (window.innerWidth < 1300) {
      // Small screen: Hide paragraphs 2+
      for (let i = 1; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
      }

      if (!button) {
        button = document.createElement("button");
        button.textContent = "Read More";
        button.className = "btn btn-warning mt-3 read-more-btn";
        textSide.appendChild(button);

        let expanded = false;

        button.addEventListener("click", () => {
          expanded = !expanded;
          for (let i = 1; i < paragraphs.length; i++) {
            paragraphs[i].style.display = expanded ? "block" : "none";
          }
          button.textContent = expanded ? "Show Less" : "Read More";
        });
      }

      button.style.display = "inline-block";

    } else {
      // Large screen: show all, hide button
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
      }
      if (button) {
        button.style.display = "none";
      }
    }
  }

  updateVisibility(); // Run once on load
  window.addEventListener("resize", updateVisibility); // Update on resize
}

// ===================================================
// DOM Ready: Initialize Features After Page Load
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
  // Load Header & Footer with partials, then initialize components
  loadHTML("header", "partials/header.html", () => {
    setupResumeDownload();
    highlightCurrentNavLink();
    setupStickyHeader();
  });

  loadHTML("footer", "partials/footer.html", () => {
    const yearSpan = document.getElementById("footer-year");
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
      yearSpan.textContent = `© ${currentYear} Caleb Nielsen`;
    }
  });

  setupReadMoreToggle();
});
