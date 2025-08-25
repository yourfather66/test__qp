document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navWrap = document.querySelector(".nav__wrap");
  const navLinks = navWrap.querySelectorAll("a");

  burger.addEventListener("click", () => {
    navWrap.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navWrap.classList.remove("active");
    });
  });
});

const form = document.getElementById("contact__form");
const emailInput = form.querySelector(".input__email");
const emailError = form.querySelector(".email-error");
const submitBtn = form.querySelector(".contact__btn__subm");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

emailInput.addEventListener("input", () => {
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    emailError.style.display = "none";
    submitBtn.disabled = false;
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.remove("invalid");
    emailError.style.display = "none";

    if (submitBtn.dataset.tried === "true") {
      submitBtn.disabled = true;
    }
  }
});

form.addEventListener("submit", (e) => {
  if (!validateEmail(emailInput.value)) {
    e.preventDefault();
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    emailError.style.display = "block";
    submitBtn.disabled = true;
    submitBtn.dataset.tried = "true";
  } else {
    submitBtn.dataset.tried = "false";
  }
});

document.querySelectorAll(".faq__card").forEach((card) => {
  const question = card.querySelector(".faq__card__quest");
  const answer = card.querySelector(".faq__card__answ");

  question.addEventListener("click", () => {
    document.querySelectorAll(".faq__card").forEach((c) => {
      if (c !== card) {
        c.classList.remove("active");
        c.querySelector(".faq__card__answ").style.maxHeight = null;
      }
    });

    if (card.classList.contains("active")) {
      card.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      card.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
