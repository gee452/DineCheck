export function createWhyDineCheck() {
  return `
    <section
      id="about"
      class="bg-cream px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="why-dinecheck-heading"
    >

      <div class="mx-auto max-w-7xl">

        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center">

          <div class="mb-4 flex items-center justify-center gap-2">

            <span
              class="h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            ></span>

            <span
              class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Why DineCheck?
            </span>

          </div>


          <h2
            id="why-dinecheck-heading"
            class="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            Know before you go.
          </h2>


          <p
            class="mt-4 font-body text-base leading-7 text-gray-600 sm:text-lg"
          >
            Choosing a restaurant shouldn't be a guessing game.
            DineCheck gives you the information you need to make
            a confident decision.
          </p>

        </div>


        <!-- Features -->
        <div
          class="mt-12 grid gap-6 md:grid-cols-3"
        >

          <!-- 1st feature -->

          <article
            class="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white transition-colors duration-300 group-hover:bg-primary-light"
            >

              <!-- Review Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />

                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
              </svg>

            </div>


            <h3
              class="mt-6 font-heading text-xl font-semibold text-charcoal"
            >
              Real Reviews
            </h3>


            <p
              class="mt-3 font-body text-sm leading-6 text-gray-500"
            >
              Hear from people who actually dined there.
              Read genuine experiences before deciding where
              to spend your time and money.
            </p>


            <div
              class="mt-6 flex items-center gap-2 font-body text-sm font-semibold text-primary"
            >
              <span>Read diner experiences</span>
              <span aria-hidden="true">→</span>
            </div>

          </article>


          <!-- 2nd Feature -->

          <article
            class="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white transition-colors duration-300 group-hover:bg-primary"
            >

              <!-- Rating Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  d="m12 2.5 2.94 5.95 6.56.95-4.75 4.63 1.12 6.53L12 17.48l-5.87 3.08 1.12-6.53L2.5 9.4l6.56-.95L12 2.5Z"
                />
              </svg>

            </div>


            <h3
              class="mt-6 font-heading text-xl font-semibold text-charcoal"
            >
              Food + Service Ratings
            </h3>


            <p
              class="mt-3 font-body text-sm leading-6 text-gray-500"
            >
              A restaurant can have amazing food and poor service,
              or excellent service and disappointing food.
              DineCheck lets diners rate both separately.
            </p>


            <div
              class="mt-6 grid grid-cols-2 gap-3"
            >

              <div class="rounded-xl bg-cream p-3">

                <p class="font-body text-xs text-gray-500">
                  Food
                </p>

                <p class="mt-1 font-body text-sm font-bold text-charcoal">
                  ★ 4.9
                </p>

              </div>


              <div class="rounded-xl bg-cream p-3">

                <p class="font-body text-xs text-gray-500">
                  Service
                </p>

                <p class="mt-1 font-body text-sm font-bold text-charcoal">
                  ★ 4.7
                </p>

              </div>

            </div>

          </article>


          <!-- 3rd Feature -->

          <article
            class="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white transition-colors duration-300 group-hover:bg-primary-light"
            >

              <!-- Booking Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-7 w-7"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="17"
                  rx="2"
                />

                <path d="M16 2v4" />
                <path d="M8 2v4" />

                <path d="M3 10h18" />

                <path d="m8 15 2 2 4-4" />
              </svg>

            </div>


            <h3
              class="mt-6 font-heading text-xl font-semibold text-charcoal"
            >
              Book With Confidence
            </h3>


            <p
              class="mt-3 font-body text-sm leading-6 text-gray-500"
            >
              Found the right restaurant? Check availability
              and reserve your table without leaving the
              DineCheck experience.
            </p>


            <div
              class="mt-6 flex items-center gap-2 font-body text-sm font-semibold text-primary"
            >
              <span>Find a table</span>
              <span aria-hidden="true">→</span>
            </div>

          </article>

        </div>


        <!-- Bottom Statement -->
        <div
          class="mt-12 rounded-2xl bg-primary p-6 sm:p-8"
        >

          <div
            class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
          >

            <div class="max-w-2xl">

              <p
                class="font-heading text-xl font-semibold text-white sm:text-2xl"
              >
                One place to discover, review and book.
              </p>

              <p
                class="mt-2 font-body text-sm leading-6 text-white/70"
              >
                From your first search to your final reservation,
                DineCheck helps you make better dining decisions.
              </p>

            </div>


            <a
              href="#discover"
              class="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-cream"
            >
              Explore restaurants
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  `;
}