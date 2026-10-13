export function createBooking() {
  return `
    <main class="min-h-screen bg-cream">


      <section class="bg-primary px-6 py-14 sm:py-16 lg:px-8">

        <div class="mx-auto max-w-7xl">

          <a
            href="/"
            class="inline-flex items-center gap-2 font-body text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to DineCheck
          </a>


          <div class="mt-8 max-w-2xl">

            <span
              class="font-body text-sm font-semibold uppercase tracking-wider text-white/60"
            >
              Reservations
            </span>


            <h1
              class="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Book your table.
            </h1>


            <p
              class="mt-4 max-w-xl font-body text-base leading-7 text-white/70 sm:text-lg"
            >
              Found a restaurant you love?
              Choose your date, time and party size to reserve
              your table with DineCheck.
            </p>

          </div>

        </div>

      </section>


      <!-- Booking -->

      <section class="px-6 py-12 sm:py-16 lg:px-8 lg:py-20">

        <div
          class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]"
        >

          <!--Booking form -->

          <div
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 sm:p-8 lg:p-10"
          >

            <div>

              <span
                class="font-body text-sm font-semibold uppercase tracking-wider text-primary"
              >
                Reservation details
              </span>


              <h2
                class="mt-2 font-heading text-2xl font-bold text-charcoal sm:text-3xl"
              >
                Tell us about your visit
              </h2>


              <p
                class="mt-2 font-body text-sm leading-6 text-gray-500"
              >
                Fill in your details below to request a reservation.
              </p>

            </div>


            <form
              id="booking-form"
              class="mt-8 space-y-7"
            >

              <!-- Restaurant -->

              <div>

                <label
                  for="restaurant"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Restaurant
                </label>


                <select
                  id="restaurant"
                  name="restaurant"
                  required
                  class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >

                  <option value="">
                    Select a restaurant
                  </option>

                  <option value="The Olive Table">
                    The Olive Table — Camps Bay
                  </option>

                  <option value="Harbour House">
                    Harbour House — V&A Waterfront
                  </option>

                  <option value="The Green Fork">
                    The Green Fork — Constantia
                  </option>

                  <option value="Cape Bistro">
                    Cape Bistro — Sea Point
                  </option>

                </select>

              </div>


              <!-- Date + Guests -->

              <div class="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    for="booking-date"
                    class="font-body text-sm font-semibold text-charcoal"
                  >
                    Date
                  </label>


                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                </div>


                <div>

                  <label
                    for="booking-guests"
                    class="font-body text-sm font-semibold text-charcoal"
                  >
                    Number of guests
                  </label>


                  <select
                    id="booking-guests"
                    name="guests"
                    required
                    class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >

                    <option value="">
                      Select guests
                    </option>

                    <option value="1">
                      1 guest
                    </option>

                    <option value="2">
                      2 guests
                    </option>

                    <option value="3">
                      3 guests
                    </option>

                    <option value="4">
                      4 guests
                    </option>

                    <option value="5">
                      5 guests
                    </option>

                    <option value="6">
                      6 guests
                    </option>

                    <option value="7+">
                      7+ guests
                    </option>

                  </select>

                </div>

              </div>


              <!-- Time -->

              <div>

                <label
                  for="booking-time"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Preferred time
                </label>


                <div
                  class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4"
                >

                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="18:00"
                      class="peer sr-only"
                      required
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      18:00
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="18:30"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      18:30
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="19:00"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      19:00
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="19:30"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      19:30
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="20:00"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      20:00
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="20:30"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      20:30
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="21:00"
                      class="peer sr-only"
                    />

                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      21:00
                    </span>

                  </label>


                  <label class="cursor-pointer">

                    <input
                      type="radio"
                      name="time"
                      value="21:30"
                      class="peer sr-only"
                    />
                    
                    <span
                      class="flex items-center justify-center rounded-xl border border-gray-200 bg-cream px-3 py-3 font-body text-sm font-medium text-charcoal transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      21:30
                    </span>

                  </label>

                </div>

              </div>


              <!-- Divider -->

              <div class="border-t border-gray-100"></div>


              <!-- Personal Details -->

              <div>

                <h3
                  class="font-heading text-lg font-semibold text-charcoal"
                >
                  Your details
                </h3>


                <div class="mt-5 grid gap-5 sm:grid-cols-2">

                  <!-- First Name -->

                  <div>

                    <label
                      for="first-name"
                      class="font-body text-sm font-semibold text-charcoal"
                    >
                      First name
                    </label>


                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      required
                      class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                  </div>


                  <!-- Last Name -->

                  <div>

                    <label
                      for="last-name"
                      class="font-body text-sm font-semibold text-charcoal"
                    >
                      Last name
                    </label>


                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      required
                      class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                  </div>


                  <!-- Email -->

                  <div>

                    <label
                      for="email"
                      class="font-body text-sm font-semibold text-charcoal"
                    >
                      Email address
                    </label>


                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                  </div>


                  <!-- Phone -->

                  <div>

                    <label
                      for="phone"
                      class="font-body text-sm font-semibold text-charcoal"
                    >
                      Phone number
                    </label>


                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+27 00 000 0000"
                      required
                      class="mt-2 w-full rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                  </div>

                </div>

              </div>


              <!-- Special Requests -->

              <div>

                <label
                  for="special-request"
                  class="font-body text-sm font-semibold text-charcoal"
                >
                  Special requests
                  <span class="font-normal text-gray-400">
                    (optional)
                  </span>
                </label>


                <textarea
                  id="special-request"
                  name="specialRequest"
                  rows="4"
                  placeholder="Birthday, anniversary, dietary requirements..."
                  class="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-cream px-4 py-3.5 font-body text-sm text-charcoal outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                ></textarea>

              </div>


              <!-- Terms -->

              <label class="flex items-start gap-3">

                <input
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />


                <span class="font-body text-xs leading-5 text-gray-500">
                  I understand that this is a reservation request and
                  agree to DineCheck's booking terms.
                </span>

              </label>


              <!-- Submit -->

              <button
                type="submit"
                class="w-full rounded-xl bg-primary px-5 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Confirm Reservation
              </button>


              <p class="text-center font-body text-xs text-gray-400">
                You will receive confirmation once the restaurant
                accepts your reservation.
              </p>

            </form>


            <!-- Success message -->

            <div
              id="booking-success"
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
                Reservation request received!
              </h2>


              <p
                class="mx-auto mt-3 max-w-md font-body text-sm leading-6 text-gray-500"
              >
                Thank you. Your reservation request has been
                submitted. We'll show the confirmation details
                here once the restaurant responds.
              </p>


              <a
                href="/"
                class="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-body text-sm font-semibold text-white hover:bg-primary-light"
              >
                Back to DineCheck
              </a>

            </div>

          </div>


  

          <aside>

            <div class="sticky top-24 space-y-5">

              <!-- Dina card -->

              <div
                class="rounded-3xl bg-primary p-6"
              >

                <div class="flex items-center gap-3">

                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-accent"
                  >
                    ✦
                  </div>


                  <div>

                    <h3
                      class="font-heading text-base font-semibold text-white"
                    >
                      Need help choosing?
                    </h3>

                    <p
                      class="mt-0.5 font-body text-xs text-white/60"
                    >
                      Ask Dina
                    </p>

                  </div>

                </div>


                <p
                  class="mt-5 font-body text-sm leading-6 text-white/70"
                >
                  Not sure which restaurant is right for you?
                  Dina can help you compare restaurants based on
                  reviews, food and service.
                </p>


                <a
                  href="/#dina"
                  class="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-cream"
                >
                  Talk to Dina
                </a>

              </div>


              <!-- Booking information -->

              <div
                class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
              >

                <h3
                  class="font-heading text-lg font-semibold text-charcoal"
                >
                  Booking with DineCheck
                </h3>


                <div class="mt-5 space-y-4">

                  <div class="flex items-start gap-3">

                    <span
                      class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cream text-primary"
                    >
                      ✓
                    </span>

                    <p class="font-body text-sm leading-5 text-gray-500">
                      Compare reviews before you book.
                    </p>

                  </div>


                  <div class="flex items-start gap-3">

                    <span
                      class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cream text-primary"
                    >
                      ✓
                    </span>

                    <p class="font-body text-sm leading-5 text-gray-500">
                      Choose your preferred date and time.
                    </p>

                  </div>


                  <div class="flex items-start gap-3">

                    <span
                      class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cream text-primary"
                    >
                      ✓
                    </span>

                    <p class="font-body text-sm leading-5 text-gray-500">
                      Receive your reservation confirmation.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  `;
}