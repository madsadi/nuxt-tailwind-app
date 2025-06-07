<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useAuth } from "~/layers/admin/composables/useAuth";
const mobileMenuOpen = ref(false);

const appConfig = useAppConfig();
const { isAuthenticated, logout } = useAuth();

const userNavigation = [
  { name: "Your profile", action: () => navigateTo("/admin/setting") },
  { name: "Sign out", action: () => handleLogout() },
];
const route = useRouter();
function handleLogout() {
  logout().then(() => {
    console.log(isAuthenticated, "status");
    route.push("/");
  });
}
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in appConfig.landingNavigation"
          :key="item.name"
          :href="item.href"
          class="text-sm/6 font-semibold text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          v-if="!isAuthenticated"
          href="/auth"
          class="text-sm/6 font-semibold text-gray-900"
          >Log in <span aria-hidden="true">&rarr;</span></NuxtLink
        >
        <Menu as="div" v-if="isAuthenticated" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5 cursor-pointer">
            <span class="sr-only">Open user menu</span>
            <img
              class="size-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="hidden lg:flex lg:items-center">
              <span
                class="ml-4 text-sm/6 font-semibold text-gray-900"
                aria-hidden="true"
                >Tom Cook</span
              >
              <ChevronDownIcon
                class="ml-2 size-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </MenuButton>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 focus:outline-hidden"
            >
              <MenuItem
                v-for="item in userNavigation"
                :key="item.name"
                v-slot="{ active }"
                class="hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              >
                <button
                  @click="item.action"
                  :class="[
                    active ? 'bg-gray-50 outline-hidden' : '',
                    'block px-3 py-1 text-sm/6 text-gray-900 cursor-pointer ',
                  ]"
                >
                  {{ item.name }}
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in appConfig.landingNavigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6">
              <NuxtLink
                v-if="!isAuthenticated"
                href="/auth"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Log in</NuxtLink
              >
              <Menu as="div" v-if="isAuthenticated" class="relative">
                <MenuButton
                  class="-m-1.5 flex items-center p-1.5 cursor-pointer"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="size-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span class="hidden lg:flex lg:items-center">
                    <span
                      class="ml-4 text-sm/6 font-semibold text-gray-900"
                      aria-hidden="true"
                      >Tom Cook</span
                    >
                    <ChevronDownIcon
                      class="ml-2 size-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </MenuButton>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 focus:outline-hidden"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                      class="hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    >
                      <button
                        @click="item.action"
                        :class="[
                          active ? 'bg-gray-50 outline-hidden' : '',
                          'block px-3 py-1 text-sm/6 text-gray-900 cursor-pointer ',
                        ]"
                      >
                        {{ item.name }}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
