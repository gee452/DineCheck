export function createRestaurantCard(restaurant) {
  return `
    <article
      class="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >

      <!-- Restaurant Image -->
      <div class="relative h-56 overflow-hidden">

        <img
          src="${restaurant.image}"
          alt="${restaurant.name} restaurant"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <!-- Cuisine Badge -->
        <div class="absolute left-4 top-4">
          <span
            class="rounded-full bg-white/95 px-3 py-1.5 font-body text-xs font-semibold text-primary shadow-sm backdrop-blur-sm"
          >
            ${restaurant.cuisine}
          </span>
        </div>

        <!-- Rating Badge -->
        <div class="absolute right-4 top-4">
          <div
            class="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm"
          >
            <span class="text-accent" aria-hidden="true">★</span>

            <span class="font-body text-sm font-bold text-charcoal">
              ${restaurant.rating}
            </span>
          </div>
        </div>

      </div>


      <!-- Restaurant Information -->
      <div class="p-5">

        <!-- Name -->
        <h3
          class="font-heading text-xl font-semibold text-charcoal transition-colors group-hover:text-primary"
        >
          ${restaurant.name}
        </h3>


        <!-- Location -->
        <div class="mt-2 flex items-center gap-2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 flex-shrink-0 text-primary-light"
            aria-hidden="true"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <p class="font-body text-sm text-gray-500">
            ${restaurant.location}
          </p>

        </div>


        <!-- Rating Breakdown -->
        <div class="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">

          <!-- Food -->
          <div>

            <p class="font-body text-xs text-gray-500">
              Food
            </p>

            <div class="mt-1 flex items-center gap-1.5">

              <span class="text-sm text-accent" aria-hidden="true">
                ★
              </span>

              <span class="font-body text-sm font-bold text-charcoal">
                ${restaurant.foodRating}
              </span>

            </div>

          </div>


          <!-- Service -->
          <div>

            <p class="font-body text-xs text-gray-500">
              Service
            </p>

            <div class="mt-1 flex items-center gap-1.5">

              <span class="text-sm text-accent" aria-hidden="true">
                ★
              </span>

              <span class="font-body text-sm font-bold text-charcoal">
                ${restaurant.serviceRating}
              </span>

            </div>

          </div>

        </div>


        <!-- Review Count -->
        <p class="font-body text-xs text-gray-500">
          ${restaurant.reviewCount} DineCheck reviews
        </p>


        <!-- Actions -->
        <div class="mt-5 flex gap-3">

          <button
            type="button"
            class="flex-1 rounded-xl border border-primary px-3 py-2.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            data-restaurant-reviews="${restaurant.id}"
          >
            View Reviews
          </button>

          <button
            type="button"
            class="flex-1 rounded-xl bg-primary px-3 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            data-restaurant-book="${restaurant.id}"
          >
            Book
          </button>

        </div>

      </div>

    </article>
  `;
}