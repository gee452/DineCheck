import "../css/style.css";

import { renderPage } from "./router.js";


const app = document.querySelector("#app");

app.innerHTML = renderPage();


// Mobile Navigation

const mobileMenuButton = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

const menuOpenIcon = document.querySelector("#menu-open-icon");
const menuCloseIcon = document.querySelector("#menu-close-icon");

mobileMenuButton.addEventListener("click", () => {

  const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";

  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));

  mobileMenuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );

  mobileMenu.classList.toggle("hidden");

  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");

});


// Close mobile menu after clicking a navigation link

const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

mobileNavLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");

    menuOpenIcon.classList.remove("hidden");
    menuCloseIcon.classList.add("hidden");

    mobileMenuButton.setAttribute("aria-expanded", "false");

    mobileMenuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

  });

});

// Dina AI Prototype

const dinaInput = document.querySelector("#dina-input");
const dinaSend = document.querySelector("#dina-send");
const dinaMessages = document.querySelector("#dina-messages");

const dinaPrompts = document.querySelectorAll(".dina-prompt");


if (dinaInput && dinaSend && dinaMessages) {

  function addUserMessage(message) {

    const messageElement = document.createElement("div");

    messageElement.className = "flex justify-end";

    messageElement.innerHTML = `
      <div class="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3">
        <p class="font-body text-sm leading-6 text-white">
          ${message}
        </p>
      </div>
    `;

    dinaMessages.appendChild(messageElement);
  }


  function addDinaMessage(message) {

    const messageElement = document.createElement("div");

    messageElement.className = "flex items-start gap-3";

    messageElement.innerHTML = `
      <div
        class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm text-accent"
      >
        ✦
      </div>

      <div
        class="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
      >
        <p class="font-body text-sm leading-6 text-charcoal">
          ${message}
        </p>
      </div>
    `;

    dinaMessages.appendChild(messageElement);
  }


  function getDinaResponse(message) {

    const lowerMessage = message.toLowerCase();


    if (
      lowerMessage.includes("camps bay") ||
      lowerMessage.includes("romantic")
    ) {
      return `
        I found highly-rated options in Camps Bay.
        Based on your preference for great food,
        I'd start with restaurants that have strong
        DineCheck food ratings.
      `;
    }


    if (lowerMessage.includes("service")) {
      return `
        If service is your priority, I'd recommend
        comparing the service ratings and reading the
        latest DineCheck reviews before booking.
      `;
    }


    if (lowerMessage.includes("food")) {
      return `
        Great food is one of the easiest things to
        compare on DineCheck. I'll prioritise restaurants
        with high food ratings and positive recent reviews.
      `;
    }


    if (
      lowerMessage.includes("near me") ||
      lowerMessage.includes("nearby")
    ) {
      return `
        Once location access is enabled, I can use your
        location to help find highly-rated restaurants nearby.
      `;
    }


    return `
      I can help you find restaurants based on location,
      food, service, reviews and your dining preferences.
      Try telling me where you want to eat.
    `;
  }


  function sendDinaMessage() {

    const message = dinaInput.value.trim();

    if (!message) {
      return;
    }


    addUserMessage(message);

    dinaInput.value = "";


    setTimeout(() => {

      const response = getDinaResponse(message);

      addDinaMessage(response);

      dinaMessages.scrollTop =
        dinaMessages.scrollHeight;

    }, 500);
  }


  dinaSend.addEventListener(
    "click",
    sendDinaMessage
  );


  dinaInput.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Enter") {
        sendDinaMessage();
      }

    }
  );


  dinaPrompts.forEach((prompt) => {

    prompt.addEventListener(
      "click",
      () => {

        dinaInput.value =
          prompt.dataset.prompt;

        sendDinaMessage();

      }
    );

  });

}

//Reviews page

const reviewButtons =
  document.querySelectorAll(
    "[data-restaurant-reviews]"
  );


reviewButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const restaurantId =
      button.dataset.restaurantReviews;

    window.location.href =
      `/restaurant/${restaurantId}`;

  });

});

//Bookings page

const bookingButtons =
  document.querySelectorAll(
    "[data-restaurant-book]"
  );


bookingButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const restaurantId =
      button.dataset.restaurantBook;

    window.location.href =
      `/booking?restaurant=${restaurantId}`;

  });

});

const bookingForm =
  document.querySelector("#booking-form");

const bookingSuccess =
  document.querySelector("#booking-success");


if (bookingForm && bookingSuccess) {

  bookingForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      bookingForm.classList.add("hidden");

      bookingSuccess.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}

const bookingRestaurant =
  document.querySelector("#restaurant");


if (bookingRestaurant) {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const restaurantId =
    params.get("restaurant");


  const restaurantNames = {
    1: "The Olive Table",
    2: "Harbour House",
    3: "The Green Fork",
    4: "Cape Bistro"
  };


  if (
    restaurantId &&
    restaurantNames[restaurantId]
  ) {

    bookingRestaurant.value =
      restaurantNames[restaurantId];

  }

}


//contact page
const contactForm =
  document.querySelector("#contact-form");

const contactSuccess =
  document.querySelector("#contact-success");


if (contactForm && contactSuccess) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      contactForm.classList.add("hidden");

      contactSuccess.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}