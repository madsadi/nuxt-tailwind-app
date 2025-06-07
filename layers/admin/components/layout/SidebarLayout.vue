<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { useAuth } from "~/layers/admin/composables/useAuth";
const route = useRoute();

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon,
    current: route.path === "/admin/dashboard",
  },
  {
    name: "Team",
    href: "/admin/team",
    icon: UsersIcon,
    current: route.path === "/admin/team",
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderIcon,
    current: route.path === "/admin/projects",
  },
  {
    name: "Calendar",
    href: "/admin/calendar",
    icon: CalendarIcon,
    current: route.path === "/admin/calendar",
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", action: () => navigateTo("/admin/setting") },
  { name: "Sign out", action: () => handleLogout() },
];
const { logout } = useAuth();
function handleLogout() {
  logout().then(() => {
    navigateTo("/");
  });
}
const sidebarOpen = ref(false);
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute top-0 left-full flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <NuxtLink href="/">
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
                      alt="Your Company"
                    />
                  </NuxtLink>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-white'
                                  : 'text-indigo-200 group-hover:text-white',
                                'size-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs/6 font-semibold text-indigo-200">
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                            ]"
                          >
                            <span
                              class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <NuxtLink
                        href="/admin/setting"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          class="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        Settings
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center" as="a">
          <NuxtLink href="/">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </NuxtLink>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-white'
                          : 'text-indigo-200 group-hover:text-white',
                        'size-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs/6 font-semibold text-indigo-200">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <NuxtLink
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    ]"
                  >
                    <span
                      class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <NuxtLink
                href="/admin/setting"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon
                  class="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="grid flex-1 grid-cols-1" action="#" method="GET">
            <input
              type="search"
              name="search"
              aria-label="Search"
              class="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
              placeholder="Search"
            />
            <MagnifyingGlassIcon
              class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
              aria-hidden="true"
            />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
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
        </div>
      </div>

      <main>
        <div class="mx-auto py-10 px-8 sm:px-12 lg:px-16">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
