export function createDina() {
  return `
    <section
      id="dina"
      class="overflow-hidden bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="dina-heading"
    >

      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <!--left -->

        <div class="max-w-xl">

          <!-- Label -->
          <div class="mb-4 flex items-center gap-2">

            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Meet Dina
            </span>

          </div>


          <!-- Heading -->
          <h2
            id="dina-heading"
            class="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Your personal
            <span class="text-primary">
              dining guide.
            </span>
          </h2>


          <!-- Description -->
          <p
            class="mt-5 font-body text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
          >
            Not sure where to eat? Tell Dina what you're looking
            for and she'll help you discover restaurants based on
            DineCheck reviews, food ratings and service ratings.
          </p>


          <!-- Dina Benefits -->
          <div class="mt-8 space-y-4">

            <!-- Benefit 1 -->
            <div class="flex items-start gap-4">

              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary"
              >
                ✓
              </div>

              <div>
                <h3 class="font-heading text-sm font-semibold text-charcoal">
                  Understand what matters to you
                </h3>

                <p class="mt-1 font-body text-sm leading-6 text-gray-500">
                  Tell Dina whether food, service, price or atmosphere
                  matters most.
                </p>
              </div>

            </div>


            <!-- Benefit 2 -->
            <div class="flex items-start gap-4">

              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary"
              >
                ✓
              </div>

              <div>
                <h3 class="font-heading text-sm font-semibold text-charcoal">
                  Discover based on real experiences
                </h3>

                <p class="mt-1 font-body text-sm leading-6 text-gray-500">
                  Dina uses DineCheck's restaurant information and
                  diner experiences to help narrow your choices.
                </p>
              </div>

            </div>


            <!-- Benefit 3 -->
            <div class="flex items-start gap-4">

              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary"
              >
                ✓
              </div>

              <div>
                <h3 class="font-heading text-sm font-semibold text-charcoal">
                  Find and book in one place
                </h3>

                <p class="mt-1 font-body text-sm leading-6 text-gray-500">
                  Once you've found a restaurant you like,
                  you can move straight to booking.
                </p>
              </div>

            </div>

          </div>

        </div>


        <!-- chat -->

        <div class="relative mx-auto w-full max-w-lg">

          <!-- Decorative background -->
          <div
            class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-light/20 blur-2xl"
            aria-hidden="true"
          ></div>


          <!-- Chat container -->
          <div
            class="relative overflow-hidden rounded-3xl bg-cream shadow-2xl shadow-primary/10 ring-1 ring-primary/10"
          >

            <!-- Chat Header -->
            <div class="flex items-center justify-between bg-primary px-6 py-5">

              <div class="flex items-center gap-3">

                <!-- Dina Avatar -->
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-accent shadow-sm"
                  aria-hidden="true"
                >
                  ✦
                </div>


                <div>

                  <h3 class="font-heading text-base font-semibold text-white">
                    Dina
                  </h3>

                  <div class="mt-0.5 flex items-center gap-2">

                    <span
                      class="h-2 w-2 rounded-full bg-sage-400"
                      aria-hidden="true"
                    ></span>

                    <span class="font-body text-xs text-white/70">
                      Your DineCheck guide
                    </span>

                  </div>

                </div>

              </div>


              <span
                class="rounded-full bg-white/10 px-3 py-1 font-body text-xs font-medium text-white/80"
              >
                AI
              </span>

            </div>


            <!-- Chat Messages -->
            <div
              id="dina-messages"
              class="min-h-[390px] space-y-4 overflow-y-auto p-5"
            >

              <!-- Dina message -->
              <div class="flex items-start gap-3">

                <div
                  class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm text-accent"
                >
                  ✦
                </div>

                <div
                  class="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
                >

                  <p class="font-body text-sm leading-6 text-charcoal">
                    Hi! I'm Dina. Where are you looking to eat?
                  </p>

                </div>

              </div>


              <!-- User message -->
              <div class="flex justify-end">

                <div
                  class="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3"
                >

                  <p class="font-body text-sm leading-6 text-white">
                    I'm looking for somewhere romantic in Camps Bay
                    with great food.
                  </p>

                </div>

              </div>


              <!-- Dina response -->
              <div class="flex items-start gap-3">

                <div
                  class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm text-accent"
                >
                  ✦
                </div>

                <div
                  class="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
                >

                  <p class="font-body text-sm leading-6 text-charcoal">
                    I found several highly-rated options in Camps Bay.
                    I'd prioritise restaurants with strong food ratings
                    and positive diner experiences.
                  </p>


                  <!-- Recommendation -->
                  <div
                    class="mt-3 rounded-xl bg-cream p-3"
                  >

                    <div class="flex items-center justify-between">

                      <div>

                        <p class="font-heading text-sm font-semibold text-charcoal">
                          The Olive Table
                        </p>

                        <p class="mt-0.5 font-body text-xs text-gray-500">
                          Camps Bay
                        </p>

                      </div>

                      <div class="flex items-center gap-1">
                        <span class="text-accent">★</span>
                        <span class="font-body text-sm font-bold text-charcoal">
                          4.8
                        </span>
                      </div>

                    </div>


                    <div class="mt-3 grid grid-cols-2 gap-2">

                      <div>
                        <p class="font-body text-[11px] text-gray-500">
                          Food
                        </p>
                        <p class="font-body text-xs font-bold text-charcoal">
                          ★ 4.9
                        </p>
                      </div>

                      <div>
                        <p class="font-body text-[11px] text-gray-500">
                          Service
                        </p>
                        <p class="font-body text-xs font-bold text-charcoal">
                          ★ 4.7
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <!-- Suggested prompts -->
            <div class="border-t border-gray-200 bg-white px-5 py-4">

              <p class="mb-3 font-body text-xs font-medium text-gray-500">
                Try asking Dina:
              </p>

              <div class="flex gap-2 overflow-x-auto pb-1">

                <button
                  type="button"
                  class="dina-prompt flex-shrink-0 rounded-full border border-primary/20 bg-cream px-3 py-2 font-body text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  data-prompt="Find me a restaurant in Camps Bay with great food."
                >
                  Great food in Camps Bay
                </button>

                <button
                  type="button"
                  class="dina-prompt flex-shrink-0 rounded-full border border-primary/20 bg-cream px-3 py-2 font-body text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  data-prompt="Where can I get the best service near the V&A Waterfront?"
                >
                  Best service
                </button>

                <button
                  type="button"
                  class="dina-prompt flex-shrink-0 rounded-full border border-primary/20 bg-cream px-3 py-2 font-body text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  data-prompt="Show me highly-rated restaurants near me."
                >
                  Highly rated
                </button>

              </div>


              <!-- Message Input -->
              <div class="mt-4 flex gap-2">

                <input
                  id="dina-input"
                  type="text"
                  placeholder="Ask Dina..."
                  class="min-w-0 flex-1 rounded-xl border border-gray-200 bg-cream px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  aria-label="Ask Dina a question"
                />


                <button
                  id="dina-send"
                  type="button"
                  class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Send message"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}