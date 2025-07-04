<script setup>
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const appConfig = useAppConfig();
const mobileMenuOpen = ref(false);
</script>

<template>
  <!-- Mobile menu -->
  <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
          >
            <div class="flex px-4 pt-5 pb-2">
              <button
                type="button"
                class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex space-x-8 px-4">
                  <Tab
                    as="template"
                    v-for="category in appConfig.storeNavigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-900',
                        'flex-1 border-b-2 px-1 py-4 text-base font-medium whitespace-nowrap',
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="(category, categoryIdx) in appConfig.storeNavigation
                    .categories"
                  :key="category.name"
                  class="space-y-12 px-4 pt-10 pb-6"
                >
                  <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                      <div>
                        <p
                          :id="`mobile-featured-heading-${categoryIdx}`"
                          class="font-medium text-gray-900"
                        >
                          Featured
                        </p>
                        <ul
                          role="list"
                          :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.featured"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="mobile-categories-heading"
                          class="font-medium text-gray-900"
                        >
                          Categories
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-categories-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.categories"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                      <div>
                        <p
                          id="mobile-collection-heading"
                          class="font-medium text-gray-900"
                        >
                          Collection
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-collection-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.collection"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p
                          id="mobile-brand-heading"
                          class="font-medium text-gray-900"
                        >
                          Brands
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-brand-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.brands"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div
                v-for="page in appConfig.storeNavigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <a
                  :href="page.href"
                  class="-m-2 block p-2 font-medium text-gray-900"
                  >{{ page.name }}</a
                >
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                  >Create an account</a
                >
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                  >Sign in</a
                >
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <!-- Currency selector -->
              <form>
                <div class="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6"
                  >
                    <option
                      v-for="currency in appConfig.currencies"
                      :key="currency"
                    >
                      {{ currency }}
                    </option>
                  </select>
                  <ChevronDownIcon
                    class="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <header class="relative z-10">
    <nav aria-label="Top">
      <!-- Top storeNavigation -->
      <div class="bg-gray-900">
        <div
          class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <!-- Currency selector -->
          <form class="hidden lg:block lg:flex-1">
            <div class="-ml-2 inline-grid grid-cols-1">
              <select
                id="desktop-currency"
                name="currency"
                aria-label="Currency"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
              >
                <option
                  v-for="currency in appConfig.currencies"
                  :key="currency"
                >
                  {{ currency }}
                </option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                aria-hidden="true"
              />
            </div>
          </form>

          <p
            class="flex-1 text-center text-sm font-medium text-white lg:flex-none"
          >
            Get free delivery on orders over $100
          </p>

          <div
            class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
          >
            <a
              href="#"
              class="text-sm font-medium text-white hover:text-gray-100"
              >Create an account</a
            >
            <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
            <a
              href="#"
              class="text-sm font-medium text-white hover:text-gray-100"
              >Sign in</a
            >
          </div>
        </div>
      </div>

      <!-- Secondary storeNavigation -->
      <div class="bg-white">
        <div class="border-b border-gray-200">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <!-- Logo (lg+) -->
              <div class="hidden lg:flex lg:items-center">
                <NuxtLink href="/">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </NuxtLink>
              </div>

              <div class="hidden h-full lg:flex">
                <!-- Mega menus -->
                <PopoverGroup class="ml-8">
                  <div class="flex h-full justify-center space-x-8">
                    <Popover
                      v-for="(category, categoryIdx) in appConfig
                        .storeNavigation.categories"
                      :key="category.name"
                      class="flex"
                      v-slot="{ open }"
                    >
                      <div class="relative flex">
                        <PopoverButton
                          :class="[
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800',
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                          ]"
                          >{{ category.name }}</PopoverButton
                        >
                      </div>

                      <transition
                        enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <PopoverPanel
                          class="absolute inset-x-0 top-full text-gray-500 sm:text-sm"
                        >
                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                          <div
                            class="absolute inset-0 top-1/2 bg-white shadow-sm"
                            aria-hidden="true"
                          />

                          <div class="relative bg-white">
                            <div class="mx-auto max-w-7xl px-8">
                              <div
                                class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pt-10 pb-12"
                              >
                                <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      :id="`desktop-featured-heading-${categoryIdx}`"
                                      class="font-medium text-gray-900"
                                    >
                                      Featured
                                    </p>
                                    <ul
                                      role="list"
                                      :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                      class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li
                                        v-for="item in category.featured"
                                        :key="item.name"
                                        class="flex"
                                      >
                                        <a
                                          :href="item.href"
                                          class="hover:text-gray-800"
                                          >{{ item.name }}</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="desktop-categories-heading"
                                      class="font-medium text-gray-900"
                                    >
                                      Categories
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-categories-heading"
                                      class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li
                                        v-for="item in category.categories"
                                        :key="item.name"
                                        class="flex"
                                      >
                                        <a
                                          :href="item.href"
                                          class="hover:text-gray-800"
                                          >{{ item.name }}</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id="desktop-collection-heading"
                                      class="font-medium text-gray-900"
                                    >
                                      Collection
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-collection-heading"
                                      class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li
                                        v-for="item in category.collection"
                                        :key="item.name"
                                        class="flex"
                                      >
                                        <a
                                          :href="item.href"
                                          class="hover:text-gray-800"
                                          >{{ item.name }}</a
                                        >
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <p
                                      id="desktop-brand-heading"
                                      class="font-medium text-gray-900"
                                    >
                                      Brands
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-brand-heading"
                                      class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li
                                        v-for="item in category.brands"
                                        :key="item.name"
                                        class="flex"
                                      >
                                        <a
                                          :href="item.href"
                                          class="hover:text-gray-800"
                                          >{{ item.name }}</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </transition>
                    </Popover>

                    <a
                      v-for="page in appConfig.storeNavigation.pages"
                      :key="page.name"
                      :href="page.href"
                      class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >{{ page.name }}</a
                    >
                  </div>
                </PopoverGroup>
              </div>

              <!-- Mobile menu and search (lg-) -->
              <div class="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  @click="mobileMenuOpen = true"
                >
                  <span class="sr-only">Open menu</span>
                  <Bars3Icon class="size-6" aria-hidden="true" />
                </button>

                <!-- Search -->
                <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Logo (lg-) -->
              <NuxtLink href="/" class="lg:hidden">
                <span class="sr-only">Your Company</span>
                <img
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                  class="h-8 w-auto"
                />
              </NuxtLink>

              <div class="flex flex-1 items-center justify-end">
                <div class="flex items-center lg:ml-8">
                  <div class="flex space-x-8">
                    <div class="hidden lg:flex">
                      <a
                        href="#"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          class="size-6"
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    <div class="flex">
                      <a
                        href="#"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Account</span>
                        <UserIcon class="size-6" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <span
                    class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                    aria-hidden="true"
                  />

                  <div class="flow-root">
                    <a href="#" class="group -m-2 flex items-center p-2">
                      <ShoppingCartIcon
                        class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span
                        class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                        >0</span
                      >
                      <span class="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
