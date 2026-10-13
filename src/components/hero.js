export function createHero() {
  return `
    <section 
      class="relative overflow-hidden bg-cream"
      aria-labelledby="hero-heading"
    >

   
      <div
        class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl"
        aria-hidden="true"
      >
      </div>

      <div
        class="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      >
      </div>


      <div
        class="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24"
      >

        <div class="max-w-2xl">

          
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-white px-4 py-2 shadow-sm"
          >
            <span
              class="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent"
              aria-hidden="true"
            >
              ★
            </span>

            <span class="font-body text-sm font-semibold text-primary">
              Real diners. Real experiences.
            </span>
          </div>


          <!-- Main heading -->
          <h1
            id="hero-heading"
            class="font-heading text-5xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
          >
            Check before
            <span class="text-primary">
              you dine.
            </span>
          </h1>


          <!-- Description -->
          <p
            class="mt-6 max-w-xl font-body text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
          >
            Discover restaurants through honest diner reviews.
            Compare food and service, find the right place,
            and book your table with confidence.
          </p>


          <!-- Search -->
          <div class="mt-8">

            <label
              for="restaurant-location"
              class="mb-2 block font-body text-sm font-semibold text-charcoal"
            >
              Where do you want to eat?
            </label>


            <div
              class="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg shadow-primary/5 ring-1 ring-gray-200 sm:flex-row"
            >

              <!-- Location input -->
              <div class="relative flex flex-1 items-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="absolute left-4 h-5 w-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>


                <input
                  id="restaurant-location"
                  type="text"
                  placeholder="e.g. Camps Bay, Cape Town"
                  class="w-full rounded-xl border-0 bg-transparent py-3 pl-12 pr-4 font-body text-sm text-charcoal outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20"
                />

              </div>


              <!-- Search button -->
              <button
                id="find-restaurants-button"
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-body text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >

                Find Restaurants

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

              </button>

            </div>

          </div>


          <!-- Dina CTA -->
          <div class="mt-5 flex flex-wrap items-center gap-3">

            <span class="font-body text-sm text-gray-500">
              Not sure where to start?
            </span>

            <button
              id="ask-dina-button"
              type="button"
              class="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              <span class="text-lg text-accent" aria-hidden="true">✦</span>
              Ask Dina
              <span aria-hidden="true">→</span>
            </button>

          </div>

        </div>


        <!-- Hero image -->

        <div class="relative mx-auto w-full max-w-xl lg:ml-auto">

          <!-- Decorative circle -->
          <div
            class="absolute -right-6 top-8 h-24 w-24 rounded-full bg-accent/20"
            aria-hidden="true"
          ></div>


          <!-- Restaurant image card -->
          <div
            class="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-primary/10"
          >

            <div class="relative overflow-hidden rounded-[1.5rem]">

              <img
                src="/images/medium-shot-friends-sitting-coffee-shop.jpg"
                alt="Two friends sitting in a coffee shop"
                class="h-[420px] w-full object-cover sm:h-[500px]"
              />


              <!-- Image overlay -->
              <div
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-24"
              >

                <p class="font-body text-sm font-medium text-white/80">
                  Featured dining experience
                </p>

                <h2 class="mt-1 font-heading text-2xl font-bold text-white">
                  Discover your next favourite
                </h2>

              </div>

            </div>


            <!-- Rating summary -->
            <div
              class="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm"
            >

              <div class="flex items-center justify-between gap-4">

                <div>

                  <p class="font-heading text-base font-semibold text-charcoal">
                    DineCheck Rating
                  </p>

                  <div class="mt-1 flex items-center gap-2">

                    <span class="text-accent">
                      ★★★★★
                    </span>

                    <span class="font-body text-sm font-bold text-charcoal">
                      4.8
                    </span>

                  </div>

                </div>


                <div class="hidden text-right sm:block">

                  <p class="font-body text-xs text-gray-500">
                    Based on
                  </p>

                  <p class="font-body text-sm font-semibold text-primary">
                    324 reviews
                  </p>

                </div>

              </div>


              <div
                class="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3"
              >

                <div>

                  <p class="font-body text-xs text-gray-500">
                    Food
                  </p>

                  <p class="font-body text-sm font-bold text-charcoal">
                    4.9
                  </p>

                </div>

                <div>

                  <p class="font-body text-xs text-gray-500">
                    Service
                  </p>

                  <p class="font-body text-sm font-bold text-charcoal">
                    4.7
                  </p>

                </div>

              </div>

            </div>

          </div>


          <!-- Floating review badge -->
          <div
            class="absolute -left-4 top-20 hidden rounded-2xl bg-primary px-5 py-4 shadow-xl sm:block"
          >

            <div class="flex items-center gap-3">

              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg text-accent"
              >
                ✓
              </div>

              <div>

                <p class="font-body text-xs text-white/70">
                  DineCheck
                </p>

                <p class="font-body text-sm font-semibold text-white">
                  Honest reviews
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}
