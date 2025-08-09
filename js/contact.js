// ==========================
// Contact Form Submission
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_cffdssa", "template_u24c589", form)
        .then(() => {
          status.textContent = "Message sent successfully!";
          status.className = "text-success";
          form.reset();
        })
        .catch(error => {
          console.error("EmailJS error:", error);
          status.textContent = "Something went wrong. Please try again.";
          status.className = "text-danger";
        });
    });
  }
});

