<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    label?: string;
    icon?: string;
    trailingIcon?: string;
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary" | "tertiary";
  }>(),
  {
    size: "md",
    label: "Button",
    icon: "",
    trailingIcon: "",
    disabled: false,
    loading: false,
    variant: "primary",
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <UButton
    :trailing-icon
    :variant
    :disabled
    :loading
    :icon
    :size
    @click="emit('click')"
  >
    {{ label }}
  </UButton>
</template>
