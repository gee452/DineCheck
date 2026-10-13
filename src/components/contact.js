export function createContact() {
  return `
    <main class="min-h-screen bg-cream">

      <!-- =========================
           HEADER
      ========================== -->

      <section class="bg-primary px-6 py-16 sm:py-20 lg:px-8 lg:py-24">

        <div class="mx-auto max-w-7xl">

          <a
            href="/"
            class="inline-flex items-center gap-2 font-body text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to DineCheck
          </a>


          <div class="mt-10 max-w-2xl">

            <span
              class="font-body text-sm font-semibold uppercase tracking-wider text-white/60"
            >
              Get in touch
            </span>


            <h1
              class="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              How can we help?
            </h1>


            <p
              class="mt-5 font-body text-base leading-7 text-white/70 sm:text-lg"
            >
              Have a question, feedback or something you think
              we should know about? We'd love to hear from you.
            </p>

          </div>

        </div>

      </section>


      <!-- =========================
           CONTACT CONTENT
      ========================== -->

      <section class="px-6 py-12 sm:py-16 lg:px-8 lg:py-20">

        <div
          class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]"
        >

          <!-- =========================
               CONTACT FORM
          ========================== -->

          <div
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 sm:p-8 lg:p-10"
          >

            <div>

              <span
                class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
              >
                Send us a message
              </span>


              <h2
                class="mt-2 font-heading text-2xl font-bold text-charcoal sm:text-3xl"
              >
                Tell us what's on your mind.
              </h2>

            </div>


            <form
              id="contact-form"
              class="mt-8 space-y-6"
            >

              <!-- Name -->

              <div>

                <label
                  for="contact-name"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Full name
                </label>


                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

              </div>


              <!-- Email -->

              <div>

                <label
                  for="contact-email"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Email address
                </label>


                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

              </div>


              <!-- Reason -->

              <div>

                <label
                  for="contact-reason"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  What can we help with?
                </label>


                <select
                  id="contact-reason"
                  name="reason"
                  required
                  class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="question">
                    General question
                  </option>

                  <option value="review">
                    Report a review
                  </option>

                  <option value="restaurant">
                    Report restaurant information
                  </option>

                  <option value="feedback">
                    Website feedback
                  </option>

                  <option value="business">
                    Business enquiry
                  </option>

                </select>

              </div>


              <!-- Message -->

              <div>

                <label
                  for="contact-message"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Message
                </label>


                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                  class="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                ></textarea>

              </div>


              <!-- Submit -->

              <button
                type="submit"
                class="w-full rounded-xl bg-primary px-5 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-8"
              >
                Send Message
              </button>

            </form>


            <!-- Success -->

            <div
              id="contact-success"
              class="hidden rounded-2xl bg-primary/5 p-8 text-center"
            >

              <div
                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-white"
              >
                ✓
              </div>


              <h2
                class="mt-5 font-heading text-2xl font-bold text-charcoal"
              >
                Message sent!
              </h2>


              <p
                class="mx-auto mt-3 max-w-md font-body text-sm leading-6 text-gray-500"
              >
                Thanks for getting in touch with DineCheck.
                We'll get back to you as soon as possible.
              </p>

            </div>

          </div>


          <!-- =========================
               CONTACT INFORMATION
          ========================== -->

          <aside>

            <div class="sticky top-24 space-y-5">

              <!-- Contact info -->

              <div
                class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
              >

                <h2
                  class="font-heading text-xl font-semibold text-charcoal"
                >
                  Contact DineCheck
                </h2>


                <p
                  class="mt-3 font-body text-sm leading-6 text-gray-500"
                >
                  We're here to help with questions, feedback
                  and restaurant information.
                </p>


                <div class="mt-7 space-y-5">

                  <!-- Email -->

                  <div class="flex items-start gap-4">

                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary"
                    >
                      @
                    </div>


                    <div>

                      <p
                        class="font-body text-xs font-medium uppercase tracking-wide text-gray-400"
                      >
                        Email
                      </p>

                      <a
                        href="mailto:hello@dinecheck.co.za"
                        class="mt-1 block font-body text-sm font-semibold text-charcoal hover:text-primary"
                      >
                        hello@dinecheck.co.za
                      </a>

                    </div>

                  </div>


                  <!-- Location -->

                  <div class="flex items-start gap-4">

                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary"
                    >
                      ◉
                    </div>


                    <div>

                      <p
                        class="font-body text-xs font-medium uppercase tracking-wide text-gray-400"
                      >
                        Based in
                      </p>

                      <p
                        class="mt-1 font-body text-sm font-semibold text-charcoal"
                      >
                        Cape Town, South Africa
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              <!-- Review help -->

              <div
                class="rounded-3xl bg-primary p-6"
              >

                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-accent"
                >
                  ★
                </div>


                <h2
                  class="mt-5 font-heading text-xl font-semibold text-white"
                >
                  Something wrong with a review?
                </h2>


                <p
                  class="mt-3 font-body text-sm leading-6 text-white/65"
                >
                  If you believe a review violates our community
                  guidelines or contains incorrect information,
                  let us know so we can investigate it.
                </p>

              </div>


              <!-- Dina -->

              <div
                class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
              >

                <div class="flex items-center gap-3">

                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent"
                  >
                    ✦
                  </div>


                  <div>

                    <h2
                      class="font-heading text-base font-semibold text-charcoal"
                    >
                      Need restaurant help?
                    </h2>

                    <p
                      class="font-body text-xs text-gray-400"
                    >
                      Ask Dina
                    </p>

                  </div>

                </div>


                <p
                  class="mt-4 font-body text-sm leading-6 text-gray-500"
                >
                  Let Dina help you discover restaurants based
                  on your location and dining preferences.
                </p>


                <a
                  href="/#dina"
                  class="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-4 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-cream"
                >
                  Ask Dina
                </a>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  `;
}