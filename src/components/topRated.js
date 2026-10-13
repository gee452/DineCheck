import { restaurants } from "../data/restaurants.js";
import { createRestaurantCard } from "./restaurantCard.js";

export function createTopRated() {
  return `
    <section
      id="discover"
      class="bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="top-rated-heading"
    >

      <div class="mx-auto max-w-7xl">

        <!-- Section Header -->
        <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div class="max-w-2xl">

            <div class="mb-3 flex items-center gap-2">

              <span
                class="h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              ></span>

              <span
                class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
              >
                Discover
              </span>

            </div>


            <h2
              id="top-rated-heading"
              class="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Top rated near you
            </h2>


            <p
              class="mt-3 max-w-xl font-body text-base leading-7 text-gray-500"
            >
              Discover restaurants highly rated by DineCheck diners
              for both food and service.
            </p>

          </div>


          <!-- View All -->
          <a
            href="#discover"
            class="inline-flex items-center gap-2 self-start font-body text-sm font-semibold text-primary transition-colors hover:text-primary-light sm:self-auto"
          >
            View all restaurants

            <span aria-hidden="true">→</span>
          </a>

        </div>


        <!-- Restaurant Grid -->
        <div
          id="restaurant-grid"
          class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >

          ${restaurants
            .map((restaurant) => createRestaurantCard(restaurant))
            .join("")}

        </div>

      </div>

    </section>
  `;
}