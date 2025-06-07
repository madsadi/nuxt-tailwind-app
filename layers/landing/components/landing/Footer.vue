<script setup lang="ts">
const appConfig = useAppConfig();
</script>
<template>
  <footer class="mt-32 bg-gray-900 sm:mt-56">
    <div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <img
          class="h-9"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Company name"
        />
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-white">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in appConfig.footerNavigation.solutions"
                  :key="item.name"
                >
                  <NuxtLink
                    :href="item.href"
                    class="text-sm/6 text-gray-400 hover:text-white"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-white">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in appConfig.footerNavigation.support"
                  :key="item.name"
                >
                  <NuxtLink
                    :href="item.href"
                    class="text-sm/6 text-gray-400 hover:text-white"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in appConfig.footerNavigation.company"
                  :key="item.name"
                >
                  <NuxtLink
                    :href="item.href"
                    class="text-sm/6 text-gray-400 hover:text-white"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in appConfig.footerNavigation.legal"
                  :key="item.name"
                >
                  <NuxtLink
                    :href="item.href"
                    class="text-sm/6 text-gray-400 hover:text-white"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between"
      >
        <div>
          <h3 class="text-sm/6 font-semibold text-white">
            Subscribe to our newsletter
          </h3>
          <p class="mt-2 text-sm/6 text-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required
            class="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:w-56 sm:text-sm/6"
            placeholder="Enter your email"
          />
          <div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div
        class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex gap-x-6 md:order-2">
          <a
            v-for="item in appConfig.footerNavigation.social"
            :key="item.name"
            :href="item.href"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="size-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">
          &copy; 2025
          <span
            ><NuxtLink href="https://github.com/madsadi" class="hover:underline"
              >Saeed</NuxtLink
            ></span
          >
          , Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
