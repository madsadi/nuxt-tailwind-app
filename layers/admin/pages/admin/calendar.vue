<template>
  <div>
    <h2 class="text-base font-semibold text-gray-900">Upcoming meetings</h2>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
      <div
        class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"
      >
        <div class="flex items-center text-gray-900">
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Previous month</span>
            <ChevronLeftIcon class="size-5" aria-hidden="true" />
          </button>
          <div class="flex-auto text-sm font-semibold">January</div>
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Next month</span>
            <ChevronRightIcon class="size-5" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div
          class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200"
        >
          <button
            v-for="(day, dayIdx) in days"
            :key="day.date"
            type="button"
            :class="[
              'py-1.5 hover:bg-gray-100 focus:z-10',
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-900',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-400',
              day.isToday && !day.isSelected && 'text-indigo-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg',
            ]"
          >
            <time
              :datetime="day.date"
              :class="[
                'mx-auto flex size-7 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
              ]"
              >{{ day.date.split("-").pop().replace(/^0/, "") }}</time
            >
          </button>
        </div>
        <button
          type="button"
          class="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add event
        </button>
      </div>
      <ol
        class="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8"
      >
        <li
          v-for="meeting in meetings"
          :key="meeting.id"
          class="relative flex gap-x-6 py-6 xl:static"
        >
          <img
            :src="meeting.imageUrl"
            alt=""
            class="size-14 flex-none rounded-full"
          />
          <div class="flex-auto">
            <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">
              {{ meeting.name }}
            </h3>
            <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
              <div class="flex items-start gap-x-3">
                <dt class="mt-0.5">
                  <span class="sr-only">Date</span>
                  <CalendarIcon
                    class="size-5 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <time :datetime="meeting.datetime"
                    >{{ meeting.date }} at {{ meeting.time }}</time
                  >
                </dd>
              </div>
              <div
                class="mt-2 flex items-start gap-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400/50 xl:pl-3.5"
              >
                <dt class="mt-0.5">
                  <span class="sr-only">Location</span>
                  <MapPinIcon class="size-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>{{ meeting.location }}</dd>
              </div>
            </dl>
          </div>
          <Menu
            as="div"
            class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
          >
            <div>
              <MenuButton
                class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"
              >
                <span class="sr-only">Open options</span>
                <EllipsisHorizontalIcon class="size-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 outline-hidden'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Edit</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 outline-hidden'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Cancel</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

definePageMeta({
  layout: "admin",
});

const meetings = [
  {
    id: 1,
    date: "Sat Jun 07 2025 17:00:47 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 15:08:39 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Mon Dec 15 2025 18:22:14 GMT+0100 (Central European Standard Time)",
    name: "Dianna Abernathy",
    imageUrl: "http://loremflickr.com/640/480/business",
    location: "759 Nola Inlet",
  },
  {
    id: 1,
    date: "Fri Jun 06 2025 23:15:13 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Wed Aug 20 2025 07:15:17 GMT+0200 (Central European Summer Time)",
    name: "Daniella Bergnaum",
    imageUrl: "http://loremflickr.com/640/480/transport",
    location: "866 Antone Tunnel",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 16:50:09 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Sun Oct 26 2025 17:21:38 GMT+0100 (Central European Standard Time)",
    name: "Clifford Kuvalis",
    imageUrl: "http://loremflickr.com/640/480/nightlife",
    location: "571 Tremblay Greens",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 01:11:35 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Thu Jan 08 2026 09:09:53 GMT+0100 (Central European Standard Time)",
    name: "Cade Ebert",
    imageUrl: "http://loremflickr.com/640/480/technics",
    location: "7817 Clint Ridge",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 04:36:10 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Thu Apr 30 2026 02:22:16 GMT+0200 (Central European Summer Time)",
    name: "Francisca Morissette",
    imageUrl: "http://loremflickr.com/640/480/people",
    location: "9537 VonRueden Common",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 01:46:31 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Tue Apr 21 2026 10:50:10 GMT+0200 (Central European Summer Time)",
    name: "Pablo Hagenes",
    imageUrl: "http://loremflickr.com/640/480/technics",
    location: "44323 Chester Village",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 08:40:12 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Sat Aug 23 2025 21:56:00 GMT+0200 (Central European Summer Time)",
    name: "Barbara Schulist",
    imageUrl: "http://loremflickr.com/640/480/fashion",
    location: "1087 Reggie Hill",
  },
  {
    id: 1,
    date: "Sat Jun 07 2025 02:14:24 GMT+0200 (Central European Summer Time)",
    time: "5:00 PM",
    datetime:
      "Tue Mar 03 2026 07:19:46 GMT+0100 (Central European Standard Time)",
    name: "Alphonso Conn",
    imageUrl: "http://loremflickr.com/640/480/nature",
    location: "4032 Jana Flat",
  },
];
const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true },
  { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];
</script>
