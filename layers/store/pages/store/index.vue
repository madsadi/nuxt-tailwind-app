<script setup>
const appConfig = useAppConfig().storePage;
definePageMeta({
  layout: "store",
});
</script>

<template>
  <div class="bg-white">
    <main>
      <!-- Hero -->
      <div class="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" class="order-last lg:order-first">
          <div class="mx-auto max-w-7xl lg:px-8">
            <ul
              role="list"
              class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
            >
              <li
                v-for="offer in appConfig.offers"
                :key="offer.name"
                class="flex flex-col"
              >
                <a
                  :href="offer.href"
                  class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                >
                  <p class="text-sm text-gray-500">{{ offer.name }}</p>
                  <p class="font-semibold text-gray-900">
                    {{ offer.description }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="relative">
          <div
            aria-hidden="true"
            class="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
          />
          <div class="relative bg-gray-100 lg:bg-transparent">
            <div
              class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8"
            >
              <div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div class="lg:pr-16">
                  <h1
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl"
                  >
                    Focus on what matters
                  </h1>
                  <p class="mt-4 text-xl text-gray-600">
                    All the charts, datepickers, and notifications in the world
                    can't beat checking off some items on a paper card.
                  </p>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                      >Shop Productivity</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2"
          >
            <img
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-hero-half-width.jpg"
              alt=""
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Trending products -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
          <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2
              id="trending-heading"
              class="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending products
            </h2>
            <a
              href="#"
              class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="relative mt-8">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                <li
                  v-for="product in appConfig.trendingProducts"
                  :key="product.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <img
                      :src="product.imageSrc"
                      :alt="product.imageAlt"
                      class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                    <div class="mt-6">
                      <p class="text-sm text-gray-500">{{ product.color }}</p>
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">{{ product.price }}</p>
                    </div>
                  </div>

                  <h4 class="sr-only">Available colors</h4>
                  <ul
                    role="list"
                    class="mt-auto flex items-center justify-center space-x-3 pt-6"
                  >
                    <li
                      v-for="color in product.availableColors"
                      :key="color.name"
                      class="size-4 rounded-full border border-black/10"
                      :style="{ backgroundColor: color.colorBg }"
                    >
                      <span class="sr-only">{{ color.name }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-12 px-4 sm:hidden">
            <a
              href="#"
              class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Collections -->
      <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2
              id="collections-heading"
              class="text-2xl font-bold text-gray-900"
            >
              Collections
            </h2>

            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="collection in appConfig.collections"
                :key="collection.name"
                class="group relative"
              >
                <img
                  :src="collection.imageSrc"
                  :alt="collection.imageAlt"
                  class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="collection.href">
                    <span class="absolute inset-0" />
                    {{ collection.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  {{ collection.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sale and testimonials -->
      <div class="relative overflow-hidden">
        <!-- Decorative background image and gradient -->
        <div aria-hidden="true" class="absolute inset-0">
          <div
            class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8"
          >
            <img
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-sale-full-width.jpg"
              alt=""
              class="size-full object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-white/75" />
          <div class="absolute inset-0 bg-linear-to-t from-white via-white" />
        </div>

        <!-- Sale -->
        <section
          aria-labelledby="sale-heading"
          class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="sale-heading"
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>
            <a
              href="#"
              class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >Get access to our one-time sale</a
            >
          </div>
        </section>

        <!-- Testimonials -->
        <section
          aria-labelledby="testimonial-heading"
          class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="testimonial-heading"
              class="text-2xl font-bold tracking-tight text-gray-900"
            >
              What are people saying?
            </h2>

            <div
              class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
            >
              <blockquote
                v-for="testimonial in appConfig.testimonials"
                :key="testimonial.id"
                class="sm:flex lg:block"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  class="shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p class="text-lg text-gray-600">{{ testimonial.quote }}</p>
                  <cite
                    class="mt-4 block font-semibold text-gray-900 not-italic"
                    >{{ testimonial.attribution }}</cite
                  >
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
