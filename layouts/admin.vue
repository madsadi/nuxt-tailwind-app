<script setup lang="ts">
import Header from "~/components/layout/admin/Header.vue";
import Sidebar from "~/components/layout/admin/Sidebar.vue";
</script>

<template>
  <Header />
  <slot />
  <Sidebar />
</template>
