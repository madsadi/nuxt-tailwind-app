<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the team member including their name, title, email and
          role.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
                <th scope="col" class="relative py-3.5 pr-4 pl-3 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="person in people" :key="person.email">
                <td class="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                  <div class="flex items-center">
                    <div class="size-11 shrink-0">
                      <img
                        class="size-11 rounded-full"
                        :src="person.image"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">
                        {{ person.name }}
                      </div>
                      <div class="mt-1 text-gray-500">{{ person.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  <div class="text-gray-900">{{ person.title }}</div>
                  <div class="mt-1 text-gray-500">{{ person.department }}</div>
                </td>
                <td class="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  <span
                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
                    >Active</span
                  >
                </td>
                <td class="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  {{ person.role }}
                </td>
                <td
                  class="relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ person.name }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Christelle Walton",
    title: "Senior Quality Technician",
    department: "Marketing",
    email: "Alycia_Marquardt50@gmail.com",
    role: "Global",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Tracy Walton",
    title: "Senior Program Facilitator",
    department: "Data",
    email: "Chauncey.Grimes@hotmail.com",
    role: "Forward",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Consuelo Walton",
    title: "Investor Optimization Administrator",
    department: "Operations",
    email: "Marcelo.Krajcik68@hotmail.com",
    role: "Regional",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Raoul Walton",
    title: "Customer Metrics Liaison",
    department: "Optimization",
    email: "Chadrick.Schmidt@gmail.com",
    role: "International",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Miller Walton",
    title: "Central Assurance Associate",
    department: "Response",
    email: "Sigmund78@gmail.com",
    role: "District",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Sincere Walton",
    title: "Investor Group Developer",
    department: "Program",
    email: "Alycia.Hilpert83@gmail.com",
    role: "Customer",
    image: "http://loremflickr.com/640/480/cats",
  },
  {
    name: "Ivory Walton",
    title: "Investor Operations Specialist",
    department: "Functionality",
    email: "Howard56@yahoo.com",
    role: "Chief",
    image: "http://loremflickr.com/640/480/cats",
  },
];

definePageMeta({
  layout: "admin",
});
</script>
