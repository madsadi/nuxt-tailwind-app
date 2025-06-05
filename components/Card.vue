<template>
  <UCard variant="subtle">
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <slot />
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </UCard>
</template>
