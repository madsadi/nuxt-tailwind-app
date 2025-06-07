<template>
  <main class="lg:pr-96">
    <header
      class="flex items-center justify-between border-b border-gray-200 bg-white"
    >
      <h1 class="text-base font-semibold text-gray-900">Deployments</h1>

      <!-- Sort dropdown -->
      <Menu as="div" class="relative">
        <MenuButton
          class="flex items-center gap-x-1 text-sm font-medium text-gray-700"
        >
          Sort by
          <ChevronUpDownIcon class="size-5 text-gray-500" aria-hidden="true" />
        </MenuButton>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 ring-1 ring-gray-200 shadow-lg focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-3 py-1 text-sm text-gray-900',
                ]"
                >Name</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-3 py-1 text-sm text-gray-900',
                ]"
                >Date updated</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-3 py-1 text-sm text-gray-900',
                ]"
                >Environment</a
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </header>

    <!-- Deployment list -->
    <ul role="list" class="divide-y divide-gray-100 bg-white">
      <li
        v-for="deployment in deployments"
        :key="deployment.id"
        class="relative flex items-center space-x-4 py-4"
      >
        <div class="min-w-0 flex-auto">
          <div class="flex items-center gap-x-3">
            <div
              :class="[
                statuses[deployment.status],
                'flex-none rounded-full p-1',
              ]"
            >
              <div class="size-2 rounded-full bg-current" />
            </div>
            <h2 class="min-w-0 text-sm font-semibold text-gray-900">
              <a :href="deployment.href" class="flex gap-x-2">
                <span class="truncate">{{ deployment.teamName }}</span>
                <span class="text-gray-400">/</span>
                <span class="whitespace-nowrap">{{
                  deployment.projectName
                }}</span>
                <span class="absolute inset-0" />
              </a>
            </h2>
          </div>
          <div class="mt-3 flex items-center gap-x-2.5 text-xs text-gray-500">
            <p class="truncate">{{ deployment.description }}</p>
            <svg viewBox="0 0 2 2" class="size-0.5 flex-none fill-gray-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <p class="whitespace-nowrap">{{ deployment.statusText }}</p>
          </div>
        </div>
        <div
          :class="[
            environments[deployment.environment],
            'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset',
          ]"
        >
          {{ deployment.environment }}
        </div>
        <ChevronRightIcon
          class="size-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </li>
    </ul>
  </main>

  <!-- Activity feed -->
  <aside
    class="bg-white lg:fixed lg:top-16 lg:right-0 lg:bottom-0 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-gray-200"
  >
    <header
      class="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
    >
      <h2 class="text-base font-semibold text-gray-900">Activity feed</h2>
      <a href="#" class="text-sm font-semibold text-indigo-600">View all</a>
    </header>
    <ul role="list" class="divide-y divide-gray-100">
      <li
        v-for="item in activityItems"
        :key="item.commit"
        class="px-4 py-4 sm:px-6 lg:px-8"
      >
        <div class="flex items-center gap-x-3">
          <img
            :src="item.user.imageUrl"
            alt=""
            class="size-6 flex-none rounded-full bg-gray-200"
          />
          <h3 class="flex-auto truncate text-sm font-semibold text-gray-900">
            {{ item.user.name }}
          </h3>
          <time
            :datetime="item.dateTime"
            class="flex-none text-xs text-gray-500"
            >{{ item.date }}</time
          >
        </div>
        <p class="mt-3 truncate text-sm text-gray-600">
          Pushed to
          <span class="text-gray-700">{{ item.projectName }}</span> (<span
            class="font-mono text-gray-500"
            >{{ item.commit }}</span
          >
          on <span class="text-gray-700">{{ item.branch }}</span
          >)
        </p>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronRightIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

definePageMeta({
  layout: "admin",
});
const statuses = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};
const environments = {
  Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};
const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 52895,
    href: "#",
    projectName: "methodologies",
    teamName: "Toys",
    status: "online",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 36783,
    href: "#",
    projectName: "bandwidth",
    teamName: "Outdoors",
    status: "online",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 18953,
    href: "#",
    projectName: "paradigms",
    teamName: "Toys",
    status: "error",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 26656,
    href: "#",
    projectName: "networks",
    teamName: "Grocery",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 25129,
    href: "#",
    projectName: "portals",
    teamName: "Grocery",
    status: "error",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 62084,
    href: "#",
    projectName: "methodologies",
    teamName: "Baby",
    status: "online",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 19822,
    href: "#",
    projectName: "e-commerce",
    teamName: "Shoes",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  // More deployments...
];
const activityItems = [
  {
    user: {
      name: "Delmer Kohler",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "0488ba6",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Juliet Upton",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "7dd8b4b",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Sharon Nikolaus",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "d76dbdd",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Shyann Bahringer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "dd43d71",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Deshaun Senger",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "1ef88b4",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },

  {
    user: {
      name: "Leann Von",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "8c2b9db",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Yessenia Wiza",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "ios-app",
    commit: "aeb4368",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
];
</script>
