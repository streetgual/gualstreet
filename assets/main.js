const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

const form = document.getElementById("contactForm");
if (form) {
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirm_email");
  const errorMsg = document.getElementById("error-msg");

  form.addEventListener("submit", (e) => {
    if (emailInput.value !== confirmEmailInput.value) {
      e.preventDefault();
      errorMsg.style.display = "block";
      confirmEmailInput.style.borderColor = "#e74c3c";
    } else {
      errorMsg.style.display = "none";
    }
  });

  confirmEmailInput.addEventListener("input", () => {
    confirmEmailInput.style.borderColor = "";
    errorMsg.style.display = "none";
  });
}
