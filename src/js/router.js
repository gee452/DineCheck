import { createNavbar } from "../components/navbar.js";
import { createHero } from "../components/hero.js";
import { createTopRated } from "../components/topRated.js";
import { createWhyDineCheck } from "../components/whyDineCheck.js";
import { createDina } from "../components/dina.js";
import { createReviews } from "../components/reviews.js";
import { createRestaurantDetail } from "../components/restaurantDetail.js";
import { createBooking } from "../components/booking.js";
import { createAbout } from "../components/about.js";
import { createContact } from "../components/contact.js";

export function renderPage() {

  const path = window.location.pathname;


  // Homepage
  if (path === "/" || path === "/index.html") {

    return `
      ${createNavbar()}

      <main>
        ${createHero()}
        ${createTopRated()}
        ${createWhyDineCheck()}
        ${createDina()}
        ${createReviews()}
      </main>
    `;
  }

//booking page
  if (path === "/booking") {
  return `
    ${createNavbar()}
    ${createBooking()}
  `;
}
  // About page
if (path === "/about") {

  return `
    ${createNavbar()}

    ${createAbout()}
  `;
}
// Contact page
if (path === "/contact") {

  return `
    ${createNavbar()}

    ${createContact()}
  `;
}


  // Restaurant detail
  if (path.startsWith("/restaurant/")) {

    const restaurantId =
      path.split("/restaurant/")[1];

    return `
      ${createNavbar()}

      ${createRestaurantDetail(restaurantId)}
    `;
  }


  // Fallback
  return `
    ${createNavbar()}

    <main class="flex min-h-screen items-center justify-center bg-cream px-6">

      <div class="text-center">

        <h1 class="font-heading text-4xl font-bold text-charcoal">
          Page not found
        </h1>

        <p class="mt-3 font-body text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          class="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-body text-sm font-semibold text-white"
        >
          Return home
        </a>

      </div>

    </main>
  `;
}