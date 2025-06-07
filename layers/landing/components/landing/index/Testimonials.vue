<script setup lang="ts">
const appConfig = useAppConfig().landingPage;
</script>

<template>
  <div class="relative isolate mt-32 sm:mt-56 sm:pt-32">
    <CommonRadialGradientBackground />
    <div class="relative">
      <CommonSubtleShadowBackground />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2 class="text-base/7 font-semibold text-indigo-600">
            Testimonials
          </h2>
          <p
            class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance"
          >
            We have worked with thousands of amazing people
          </p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
        >
          <figure
            class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:ring-1 sm:shadow-lg sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
          >
            <blockquote
              class="p-12 text-xl/8 font-semibold tracking-tight text-gray-900"
            >
              <p>{{ `“${appConfig.featuredTestimonial.body}”` }}</p>
            </blockquote>
            <figcaption
              class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4"
            >
              <img
                class="size-10 flex-none rounded-full bg-gray-50"
                :src="appConfig.featuredTestimonial.author.imageUrl"
                alt=""
              />
              <div class="flex-auto">
                <div class="font-semibold">
                  {{ appConfig.featuredTestimonial.author.name }}
                </div>
                <div class="text-gray-600">
                  {{ `@${appConfig.featuredTestimonial.author.handle}` }}
                </div>
              </div>
              <img
                class="h-10 w-auto flex-none"
                :src="appConfig.featuredTestimonial.author.logoUrl"
                alt=""
              />
            </figcaption>
          </figure>
          <div
            v-for="(
              columnGroup, columnGroupIdx
            ) in appConfig.landingTestimonials"
            :key="columnGroupIdx"
            class="space-y-8 xl:contents xl:space-y-0"
          >
            <div
              v-for="(column, columnIdx) in columnGroup"
              :key="columnIdx"
              :class="[
                (columnGroupIdx === 0 && columnIdx === 0) ||
                (columnGroupIdx === appConfig.landingTestimonials.length - 1 &&
                  columnIdx === columnGroup.length - 1)
                  ? 'xl:row-span-2'
                  : 'xl:row-start-1',
                'space-y-8',
              ]"
            >
              <figure
                v-for="testimonial in column"
                :key="testimonial.author.handle"
                class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
              >
                <blockquote class="text-gray-900">
                  <p>{{ `“${testimonial.body}”` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img
                    class="size-10 rounded-full bg-gray-50"
                    :src="testimonial.author.imageUrl"
                    alt=""
                  />
                  <div>
                    <div class="font-semibold">
                      {{ testimonial.author.name }}
                    </div>
                    <div class="text-gray-600">
                      {{ `@${testimonial.author.handle}` }}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
