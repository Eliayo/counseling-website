const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// const button = document.getElementById("animatedButton");
// const gradientOverlay = button.querySelector("span:first-child");

// button.addEventListener("mouseenter", () => {
//   gradientOverlay.classList.add("opacity-100");
// });

// button.addEventListener("mouseleave", () => {
//   gradientOverlay.classList.remove("opacity-100");
// });

// const scrollToTop = document.querySelector("#scroll-to-top");
// const scrollUp = function () {
//   if (this.scrollY >= 200) {
//     scrollToTop.classList.remove("hidden");
//   } else {
//     scrollToTop.classList.add("hidden");
//   }
// };
// window.addEventListener("scroll", scrollUp);

// scrollToTop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
// document.getElementById('appointment-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Example validation
//     let valid = true;
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (!name || !email || !phone || !date || !time) {
//         valid = false;
//         alert('Please fill in all required fields.');
//     }

//     // Basic email pattern check
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         valid = false;
//         alert('Please enter a valid email address.');
//     }

//     if (valid) {
//         // Proceed with form submission
//         alert('Form submitted successfully!');
//         // Here you can add the code to actually submit the form, e.g., using fetch API.
//     }
// });
// document.getElementById('see-more-btn').addEventListener('click', function() {
//     var moreContent = document.getElementById('more-content');
//     if (moreContent.classList.contains('hidden')) {
//         moreContent.classList.remove('hidden');
//         moreContent.classList.add('fall');
//     } else {
//         moreContent.classList.add('hidden');
//         moreContent.classList.remove('fall');
//     }
// });

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.classList.remove("rotate-45");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("rotate-45");
  }
}

document.querySelectorAll(".border-b").forEach((item) => {
  const button = item.querySelector("button");
  const content = item.querySelector("div");

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      content.style.maxHeight = "0";
      button.querySelector("svg").classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.querySelector("svg").classList.add("rotate-180");
    }

    button.setAttribute("aria-expanded", !isExpanded);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".quiz-step");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const resultSection = document.getElementById("quiz-result");
  const resultOutput = document.getElementById("quiz-output");

  let currentStep = 0;

  nextBtn.addEventListener("click", () => {
    const selectedOption = steps[currentStep].querySelector(
      'input[type="radio"]:checked'
    );

    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

    steps[currentStep].classList.add("hidden");
    currentStep++;

    if (currentStep < steps.length) {
      steps[currentStep].classList.remove("hidden");
    } else {
      showResults();
    }

    updateButtons();
  });

  prevBtn.addEventListener("click", () => {
    steps[currentStep].classList.add("hidden");
    currentStep--;
    steps[currentStep].classList.remove("hidden");
    updateButtons();
  });

  function updateButtons() {
    prevBtn.classList.toggle("hidden", currentStep === 0);
    nextBtn.textContent = currentStep === steps.length ? "See Results" : "Next";
  }

  function showResults() {
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;

    let recommendation;

    if (q1 === "anxiety" || q2 === "stressed") {
      recommendation =
        "Cognitive Behavioral Therapy (CBT) might be a good fit for you. This approach focuses on identifying and changing negative thought patterns and behaviors.";
    } else if (q1 === "relationship" || q3 === "improve") {
      recommendation =
        "Couples or Relationship Therapy could be beneficial. This type of therapy focuses on improving communication and resolving conflicts within relationships.";
    } else if (q1 === "growth" || q4 === "creative") {
      recommendation =
        "Consider trying Art Therapy or other forms of Creative Therapy, which allow for expression through art, music, or writing.";
    } else if (q1 === "trauma" || q3 === "heal") {
      recommendation =
        "Trauma-Focused Therapy, such as EMDR (Eye Movement Desensitization and Reprocessing), could be helpful in processing and overcoming traumatic experiences.";
    } else {
      recommendation =
        "A holistic approach combining various therapies, such as Mindfulness-Based Therapy, might be best suited to your needs.";
    }

    resultOutput.textContent = recommendation;
    resultSection.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  }
});
