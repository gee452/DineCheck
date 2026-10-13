export function createNavbar() {
  return `
    <header class="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      
      <nav
        class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >

        <!-- Logo -->
        <a
          href="/"
          class="group flex items-center gap-3"
          aria-label="DineCheck home"
        >

          <!-- Logo Icon -->
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition duration-200 group-hover:bg-primary-light"
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
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <path d="m9 10 2 2 4-4" />
            </svg>
          </span>

          <!-- Wordmark -->
          <span class="font-heading text-xl font-bold tracking-tight text-charcoal">
            Dine<span class="text-primary">Check</span>
          </span>

        </a>


        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-8 lg:flex">

          <a
            href="#discover"
            class="font-body text-sm font-medium text-charcoal transition-colors duration-200 hover:text-primary"
          >
            Discover
          </a>

          <a
            href="#reviews"
            class="font-body text-sm font-medium text-charcoal transition-colors duration-200 hover:text-primary"
          >
            Reviews
          </a>

          <a
            href="/about"
            class="font-body text-sm font-medium text-charcoal transition-colors duration-200 hover:text-primary"
          >
            About
          </a>

          <a
            href="/contact"
            class="font-body text-sm font-medium text-charcoal transition-colors duration-200 hover:text-primary"
          >
            Contact
          </a>

        </div>


        <!-- Desktop Actions -->
        <div class="hidden items-center gap-3 lg:flex">

          <!-- Dina -->
          <a
            href="#dina"
            class="inline-flex items-center gap-2 rounded-brand px-4 py-2.5 font-body text-sm font-semibold text-primary transition-colors duration-200 hover:bg-cream"
          >
            <span class="text-accent">✦</span>
            Ask Dina
          </a>

          <!-- Booking -->
          <a
            href="/booking"
            class="inline-flex items-center justify-center rounded-brand bg-primary px-5 py-2.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book a Table
          </a>

        </div>


        <!-- Mobile Menu Button -->
        <button
          id="mobile-menu-button"
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-xl text-charcoal transition-colors hover:bg-cream hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Open navigation menu"
        >

          <!-- Hamburger Icon -->
          <svg
            id="menu-open-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>


          <!-- Close Icon -->
          <svg
            id="menu-close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="hidden h-6 w-6"
            aria-hidden="true"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>

        </button>

      </nav>


      <!-- Mobile Navigation -->
      <div
        id="mobile-menu"
        class="hidden border-t border-gray-200 bg-white lg:hidden"
      >

        <div class="mx-auto max-w-7xl space-y-1 px-6 py-5">

          <a
            href="#discover"
            class="mobile-nav-link block rounded-lg px-4 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-primary"
          >
            Discover
          </a>

          <a
            href="#reviews"
            class="mobile-nav-link block rounded-lg px-4 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-primary"
          >
            Reviews
          </a>

          <a
            href="#about"
            class="mobile-nav-link block rounded-lg px-4 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-primary"
          >
            About
          </a>

          <a
            href="#contact"
            class="mobile-nav-link block rounded-lg px-4 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-primary"
          >
            Contact
          </a>


          <!-- Mobile Dina -->
          <a
            href="#dina"
            class="mobile-nav-link mt-3 flex items-center gap-2 rounded-lg px-4 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-cream"
          >
            <span class="text-accent">✦</span>
            Ask Dina
          </a>


          <!-- Mobile Booking -->
          <a
            href="#booking"
            class="mobile-nav-link mt-2 block rounded-brand bg-primary px-4 py-3 text-center font-body text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Book a Table
          </a>

        </div>

      </div>

    </header>
  `;
}