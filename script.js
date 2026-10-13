const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});

const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.className = "form-feedback";

  if (!form.checkValidity()) {
    feedback.textContent = "Please enter your name, a valid email address, and a message.";
    feedback.classList.add("error");
    form.reportValidity();
    return;
  }

  feedback.textContent = "Validation passed. This demo does not send your message.";
  feedback.classList.add("success");
});
