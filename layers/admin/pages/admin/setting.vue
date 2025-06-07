<template>
  <div>
    <main>
      <h1 class="sr-only">Account Settings</h1>
      <div class="divide-y divide-gray-200">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 pb-16 md:grid-cols-3">
          <div>
            <h2 class="text-base font-semibold text-gray-900">
              Personal Information
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <form class="md:col-span-2">
            <div
              class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
            >
              <div class="col-span-full flex items-center gap-x-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-24 flex-none rounded-lg bg-gray-200 object-cover"
                />
                <div>
                  <button
                    type="button"
                    class="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-200"
                  >
                    Change avatar
                  </button>
                  <p class="mt-2 text-xs text-gray-500">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-900"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-900"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-900"
                  >Username</label
                >
                <div class="mt-2">
                  <div
                    class="flex items-center rounded-md bg-white ring-1 ring-inset ring-gray-300 pl-3 focus-within:ring-2 focus-within:ring-indigo-500"
                  >
                    <div
                      class="shrink-0 text-base text-gray-500 select-none sm:text-sm"
                    >
                      example.com/
                    </div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="timezone"
                  class="block text-sm font-medium text-gray-900"
                  >Timezone</label
                >
                <div class="mt-2 grid grid-cols-1 relative">
                  <select
                    id="timezone"
                    name="timezone"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Pacific Standard Time</option>
                    <option>Eastern Standard Time</option>
                    <option>Greenwich Mean Time</option>
                  </select>
                  <ChevronDownIcon
                    class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-400 sm:size-4"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 flex">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <!-- Change password section -->
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 py-16 md:grid-cols-3">
          <div>
            <h2 class="text-base font-semibold text-gray-900">
              Change password
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              Update your password associated with your account.
            </p>
          </div>

          <form class="md:col-span-2">
            <div
              class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
            >
              <div class="col-span-full">
                <label
                  for="current-password"
                  class="block text-sm font-medium text-gray-900"
                  >Current password</label
                >
                <div class="mt-2">
                  <input
                    id="current-password"
                    name="current_password"
                    type="password"
                    autocomplete="current-password"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="new-password"
                  class="block text-sm font-medium text-gray-900"
                  >New password</label
                >
                <div class="mt-2">
                  <input
                    id="new-password"
                    name="new_password"
                    type="password"
                    autocomplete="new-password"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="confirm-password"
                  class="block text-sm font-medium text-gray-900"
                  >Confirm password</label
                >
                <div class="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm_password"
                    type="password"
                    autocomplete="new-password"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 flex">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <!-- Logout section -->
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 py-16 md:grid-cols-3">
          <div>
            <h2 class="text-base font-semibold text-gray-900">
              Log out other sessions
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              Please enter your password to confirm you would like to log out of
              your other sessions across all of your devices.
            </p>
          </div>

          <form class="md:col-span-2">
            <div
              class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
            >
              <div class="col-span-full">
                <label
                  for="logout-password"
                  class="block text-sm font-medium text-gray-900"
                  >Your password</label
                >
                <div class="mt-2">
                  <input
                    id="logout-password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 flex">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log out other sessions
              </button>
            </div>
          </form>
        </div>

        <!-- Delete account section -->
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 py-16 md:grid-cols-3">
          <div>
            <h2 class="text-base font-semibold text-gray-900">
              Delete account
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </p>
          </div>

          <form class="flex items-start md:col-span-2">
            <button
              type="submit"
              class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Yes, delete my account
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/16/solid";

definePageMeta({
  layout: "admin",
});
</script>
