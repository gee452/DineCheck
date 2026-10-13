import { restaurants } from "../data/restaurants.js";
import { reviews } from "../data/reviews.js";


export function createRestaurantDetail(restaurantId = 1) {

  const restaurant =
    restaurants.find(
      (item) => item.id === Number(restaurantId)
    ) || restaurants[0];


  const restaurantReviews =
    reviews.filter(
      (review) => review.restaurant === restaurant.name
    );


  return `
    <main class="min-h-screen bg-cream">

      <section class="bg-white">

        <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <!-- Back -->
          <a
            href="/"
            class="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary-light"
          >
            <span aria-hidden="true">←</span>
            Back to restaurants
          </a>


          <!-- Image -->
          <div
            class="relative mt-6 h-[300px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[480px]"
          >

            <img
              src="${restaurant.image}"
              alt="${restaurant.name}"
              class="h-full w-full object-cover"
            />


            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>


            <!-- Image information -->
            <div
              class="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
            >

              <span
                class="inline-block rounded-full bg-white/95 px-3 py-1.5 font-body text-xs font-semibold text-primary"
              >
                ${restaurant.cuisine}
              </span>


              <h1
                class="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                ${restaurant.name}
              </h1>


              <p
                class="mt-2 font-body text-sm text-white/80"
              >
                ${restaurant.location}
              </p>

            </div>

          </div>

        </div>

      </section>


      <!--Rating Summary-->

      <section class="bg-white">

        <div class="mx-auto max-w-7xl px-6 pb-10 lg:px-8">

          <div
            class="grid gap-6 lg:grid-cols-[1fr_auto]"
          >

            <!-- Rating -->
            <div
              class="rounded-2xl bg-cream p-6"
            >

              <p
                class="font-body text-sm font-medium text-gray-500"
              >
                DineCheck rating
              </p>


              <div class="mt-3 flex items-center gap-4">

                <span
                  class="font-heading text-5xl font-bold text-charcoal"
                >
                  ${restaurant.rating}
                </span>


                <div>

                  <div class="text-lg text-accent">
                    ★★★★★
                  </div>

                  <p class="mt-1 font-body text-xs text-gray-500">
                    Based on ${restaurant.reviewCount} reviews
                  </p>

                </div>

              </div>

            </div>


            <!-- Breakdown -->
            <div
              class="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6"
            >

              <div class="min-w-[120px]">

                <p class="font-body text-xs text-gray-500">
                  Food
                </p>

                <p class="mt-2 font-heading text-2xl font-bold text-charcoal">
                  ${restaurant.foodRating}
                </p>

                <div class="mt-1 text-sm text-accent">
                  ★★★★★
                </div>

              </div>


              <div class="min-w-[120px]">

                <p class="font-body text-xs text-gray-500">
                  Service
                </p>

                <p class="mt-2 font-heading text-2xl font-bold text-charcoal">
                  ${restaurant.serviceRating}
                </p>

                <div class="mt-1 text-sm text-accent">
                  ★★★★★
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      

      <section class="px-6 py-12 lg:px-8 lg:py-16">

        <div
          class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]"
        >

          <!--Reviews -->

          <div>

            <div class="flex items-end justify-between">

              <div>

                <span
                  class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
                >
                  DineCheck reviews
                </span>

                <h2
                  class="mt-2 font-heading text-2xl font-bold text-charcoal sm:text-3xl"
                >
                  What diners are saying
                </h2>

              </div>

            </div>


            <!-- Review list -->

            <div class="mt-8 space-y-5">

              ${
                restaurantReviews.length > 0
                  ? restaurantReviews
                      .map(
                        (review) => `
                          <article
                            class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
                          >

                            <div class="flex flex-wrap items-start justify-between gap-4">

                              <div class="flex items-center gap-3">

                                <div
                                  class="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white"
                                >
                                  ${review.reviewer.charAt(0)}
                                </div>

                                <div>

                                  <div class="flex items-center gap-2">

                                    <p
                                      class="font-body text-sm font-semibold text-charcoal"
                                    >
                                      ${review.reviewer}
                                    </p>

                                    <span
                                      class="rounded-full bg-primary/10 px-2 py-0.5 font-body text-[10px] font-semibold text-primary"
                                    >
                                      Verified diner
                                    </span>

                                  </div>

                                  <p
                                    class="mt-0.5 font-body text-xs text-gray-400"
                                  >
                                    ${review.date}
                                  </p>

                                </div>

                              </div>


                              <div class="flex items-center gap-1">

                                <span class="text-accent">
                                  ★
                                </span>

                                <span
                                  class="font-body text-sm font-bold text-charcoal"
                                >
                                  ${review.overallRating}
                                </span>

                              </div>

                            </div>


                            <h3
                              class="mt-5 font-heading text-lg font-semibold text-charcoal"
                            >
                              ${review.title}
                            </h3>


                            <p
                              class="mt-2 font-body text-sm leading-6 text-gray-500"
                            >
                              ${review.comment}
                            </p>


                            <div
                              class="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-4"
                            >

                              <span
                                class="rounded-lg bg-cream px-3 py-2 font-body text-xs font-medium text-charcoal"
                              >
                                Food ★ ${review.foodRating}
                              </span>

                              <span
                                class="rounded-lg bg-cream px-3 py-2 font-body text-xs font-medium text-charcoal"
                              >
                                Service ★ ${review.serviceRating}
                              </span>

                            </div>

                          </article>
                        `
                      )
                      .join("")
                  : `
                    <div class="rounded-2xl bg-white p-8 text-center">
                      <p class="font-body text-sm text-gray-500">
                        No reviews yet.
                      </p>
                    </div>
                  `
              }

            </div>

          </div>


          <aside>

            <div
              class="sticky top-24 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
            >

              <span
                class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
              >
                Ready to dine?
              </span>


              <h2
                class="mt-2 font-heading text-2xl font-bold text-charcoal"
              >
                Book a table
              </h2>


              <p
                class="mt-3 font-body text-sm leading-6 text-gray-500"
              >
                Found the restaurant you're looking for?
                Check availability and reserve your table.
              </p>


              <!-- Date -->
              <label
                for="booking-date"
                class="mt-6 block font-body text-sm font-semibold text-charcoal"
              >
                Date
              </label>

              <input
                id="booking-date"
                type="date"
                class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />


              <!-- Guests -->
              <label
                for="booking-guests"
                class="mt-4 block font-body text-sm font-semibold text-charcoal"
              >
                Guests
              </label>

              <select
                id="booking-guests"
                class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >

                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
                <option>7+ guests</option>

              </select>


              <!-- Time -->
              <label
                for="booking-time"
                class="mt-4 block font-body text-sm font-semibold text-charcoal"
              >
                Time
              </label>

              <select
                id="booking-time"
                class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >

                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>

              </select>


              <!-- Book -->
              <button
                type="button"
                class="mt-6 w-full rounded-xl bg-primary px-5 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                id="book-restaurant-button"
              >
                Check Availability
              </button>


              <p
                class="mt-3 text-center font-body text-xs text-gray-400"
              >
                Booking powered by DineCheck
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  `;
}