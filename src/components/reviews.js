import { reviews } from "../data/reviews.js";

function createReviewCard(review) {
  return `
    <article
      class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >

      <!-- Reviewer -->
      <div class="flex items-start justify-between gap-4">

        <div class="flex items-center gap-3">

          <div
            class="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white"
          >
            ${review.reviewer.charAt(0)}
          </div>

          <div>

            <div class="flex items-center gap-2">

              <p class="font-body text-sm font-semibold text-charcoal">
                ${review.reviewer}
              </p>

              ${
                review.verified
                  ? `
                    <span
                      class="rounded-full bg-primary/10 px-2 py-0.5 font-body text-[10px] font-semibold text-primary"
                    >
                      Verified diner
                    </span>
                  `
                  : ""
              }

            </div>

            <p class="mt-0.5 font-body text-xs text-gray-400">
              ${review.date}
            </p>

          </div>

        </div>


        <!-- Overall Rating -->
        <div class="flex items-center gap-1">

          <span class="text-accent" aria-hidden="true">
            ★
          </span>

          <span class="font-body text-sm font-bold text-charcoal">
            ${review.overallRating}
          </span>

        </div>

      </div>


      <!-- Restaurant -->
      <div class="mt-5">

        <h3 class="font-heading text-base font-semibold text-charcoal">
          ${review.restaurant}
        </h3>

        <p class="mt-1 font-body text-xs text-gray-500">
          ${review.location}
        </p>

      </div>


      <!-- Review Title -->
      <h4
        class="mt-5 font-heading text-lg font-semibold text-charcoal"
      >
        ${review.title}
      </h4>


      <!-- Review -->
      <p
        class="mt-2 font-body text-sm leading-6 text-gray-500"
      >
        ${review.comment}
      </p>


      <!-- Rating Breakdown -->
      <div
        class="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4"
      >

        <div>

          <p class="font-body text-xs text-gray-400">
            Food
          </p>

          <div class="mt-1 flex items-center gap-1">

            <span class="text-accent">
              ★
            </span>

            <span class="font-body text-sm font-bold text-charcoal">
              ${review.foodRating}
            </span>

          </div>

        </div>


        <div>

          <p class="font-body text-xs text-gray-400">
            Service
          </p>

          <div class="mt-1 flex items-center gap-1">

            <span class="text-accent">
              ★
            </span>

            <span class="font-body text-sm font-bold text-charcoal">
              ${review.serviceRating}
            </span>

          </div>

        </div>

      </div>

    </article>
  `;
}


export function createReviews() {
  return `
    <section
      id="reviews"
      class="bg-cream px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="reviews-heading"
    >

      <div class="mx-auto max-w-7xl">

        <!-- Header -->
        <div
          class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >

          <div class="max-w-2xl">

            <div class="mb-3 flex items-center gap-2">

              <span
                class="h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              ></span>

              <span
                class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
              >
                From the DineCheck community
              </span>

            </div>


            <h2
              id="reviews-heading"
              class="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Real experiences.
              <span class="text-primary">
                Honest opinions.
              </span>
            </h2>


            <p
              class="mt-3 max-w-xl font-body text-base leading-7 text-gray-500"
            >
              See what other diners experienced before you decide
              where to eat.
            </p>

          </div>


          <a
            href="#reviews"
            class="inline-flex items-center gap-2 self-start font-body text-sm font-semibold text-primary hover:text-primary-light sm:self-auto"
          >
            View all reviews
            <span aria-hidden="true">→</span>
          </a>

        </div>


        <!-- Reviews -->
        <div
          class="mt-10 grid gap-6 lg:grid-cols-3"
        >

          ${reviews.map((review) => createReviewCard(review)).join("")}

        </div>


        <!-- CTA -->
        <div
          class="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-primary px-6 py-7 sm:flex-row sm:px-8"
        >

          <div>

            <h3
              class="font-heading text-xl font-semibold text-white"
            >
              Been somewhere recently?
            </h3>

            <p
              class="mt-1 font-body text-sm text-white/70"
            >
              Share your experience and help the next diner decide.
            </p>

          </div>


          <button
            type="button"
            class="rounded-xl bg-white px-5 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-cream"
            id="write-review-button"
          >
            Write a Review
          </button>

        </div>

      </div>

    </section>
  `;
}