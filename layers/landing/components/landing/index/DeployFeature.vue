<script setup lang="ts">
const appConfig = useAppConfig().landingPage;
</script>
<template>
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
      <p
        class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
      >
        Everything you need to deploy your app
      </p>
      <p class="mt-6 text-lg/8 text-gray-600">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
        Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In
        mi viverra elit nunc.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="feature in appConfig.secondaryFeatures"
          :key="feature.name"
          class="flex flex-col"
        >
          <dt
            class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900"
          >
            <component
              :is="feature.icon"
              class="size-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
            <p class="flex-auto">{{ feature.description }}</p>
            <p class="mt-6">
              <a
                :href="feature.href"
                class="text-sm/6 font-semibold text-indigo-600"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
