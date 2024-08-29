<template>
  <ul class="timeline">
    <li class="timeline-item mb-5" v-for="experience in EXPERIENCES" :key="experience">
      <h5 class="fw-bold text-danger">{{ experience.title }}</h5>
      <h6>{{ experience.company }}</h6>
      <p class="text-muted mb-2 fw-bold">{{ experience.date }}</p>
      <p class="paragraph">{{ experience.description }}</p>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const EXPERIENCES = ref([{
    title: "Desarrollador Fullstack",
    date: "09 Septiembre 2023",
    company: "COYTEX SAS",
    description:
      "Desarrolle 5 nuevos módulos, en el sitio web interno de la empresa para la gestión de la información en las bases de datos. También colaboré en la modularización y optimización de código espagueti del proyecto.",
  },]);


</script>

<style></style>
