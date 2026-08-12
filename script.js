const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const successMessage = document.querySelector("#success-message");
const formFields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  message: document.querySelector("#message"),
};

const validationMessages = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  message: "Please tell us how we can help.",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clearErrors = () => {
  document.querySelectorAll(".error-text").forEach((node) => node.remove());
  Object.values(formFields).forEach((input) => {
    input.removeAttribute("aria-describedby");
    input.setAttribute("aria-invalid", "false");
  });
};

const showError = (field, message) => {
  const error = document.createElement("p");
  error.className = "error-text";
  error.id = `${field.id}-error`;
  error.textContent = message;
  error.setAttribute("role", "alert");
  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", error.id);
  field.parentElement.appendChild(error);
};

const validateForm = () => {
  clearErrors();
  let valid = true;

  if (!formFields.name.value.trim()) {
    showError(formFields.name, validationMessages.name);
    valid = false;
  }

  if (!emailRegex.test(formFields.email.value.trim())) {
    showError(formFields.email, validationMessages.email);
    valid = false;
  }

  if (!formFields.message.value.trim()) {
    showError(formFields.message, validationMessages.message);
    valid = false;
  }

  return valid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    successMessage.classList.add("hidden");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  successMessage.classList.add("hidden");

  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Request";
    successMessage.classList.remove("hidden");
    form.reset();
  }, 1200);
});
