<template>
  <LandingHero />
  <LandingLogoCloud />
  <LandingPrimaryFeature />
  <LandingDeployFeature />
  <LandingNewsletter />
  <LandingTestimonials />
</template>

<script setup>
import {
  LandingDeployFeature,
  LandingLogoCloud,
  LandingNewsletter,
  LandingTestimonials,
} from "#components";

definePageMeta({
  layout: "landing",
});
</script>
