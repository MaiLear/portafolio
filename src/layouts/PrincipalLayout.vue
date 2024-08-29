<template>
  <MenuComponent />

  <main class="ms-2" style="max-width: 36rem">

    <SectionLayout
      style="padding-top: 6rem; padding-bottom: 6rem"
      data-scroll-spy
      id="home"
    >
      <div>
        <div class="d-flex gap-3 mb-3">
          <div style="max-width: 64px; max-height: 64px">
            <img
              class="rounded-circle img-fluid"
              src="../../public/img/profile-img.webp"
              alt="profile-img"
            />
          </div>
          <div
            class="align-self-center border border-primary rounded-pill px-2 py-1 opacity-75"
          >
            <a
              class="nav-link"
              style="font-size: 14px"
              target="_blank"
              href="https://www.linkedin.com/in/michael-andres-ardila-rotavista-85b1bb305/"
              >Disponible para trabajar</a
            >
          </div>
        </div>
        <h1 class="fw-bolder">Hola,Soy Maicol</h1>
        <p class="my-4 lh-1 fs-5 paragraph">
          <span class="text-danger">Desarrollador de software</span> de Pereira,
          Colombia, apasionado en la adquisición de nuevos conocimientos y el
          continuo mejoramiento personal
        </p>
        <div class="d-flex" style="flex-wrap: nowrap">
          <div class="d-flex gap-2 border border-1 rounded-pill px-3 py-1">
            <v-icon name="bi-linkedin" />
            <a
              class="nav-link"
              style="font-size: 14px"
              target="_blank"
              href="https://www.linkedin.com/in/michael-andres-ardila-rotavista-85b1bb305/"
              >Linkedin</a
            >
          </div>
        </div>
      </div>
    </SectionLayout>

    <SectionLayout style="padding-bottom: 6rem" id="experience" data-scroll-spy>
      <div class="d-flex gap-2 align-items-center mb-5">
        <v-icon name="hi-briefcase" scale="1.5"></v-icon>
        <h2 class="fw-bold m-0">Experiencia laboral</h2>
      </div>

      <ExperienceSectionComponent />
    </SectionLayout>

    <SectionLayout style="padding-bottom: 6rem" data-scroll-spy id="proyects">
      <div class="d-flex gap-2 align-items-center mb-5">
        <v-icon name="bi-code-slash" scale="1.5"></v-icon>
        <h2 class="fw-bold m-0">Proyectos</h2>
      </div>

      <ProyectsSectionComponent />
    </SectionLayout>

    <SectionLayout data-scroll-spy id="aboutme">
      <div class="d-flex gap-2 align-items-center mb-5">
        <v-icon name="fa-user-check" scale="1.5"></v-icon>
        <h2 class="fw-bold m-0">Sobre mí</h2>
      </div>

      <AboutmeSectionComponent />
    </SectionLayout>
  </main>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import SectionLayout from "./SectionLayout.vue";
import ExperienceSectionComponent from "@/components/ExperienceSectionComponent.vue";
import ProyectsSectionComponent from "@/components/ProyectsSectionComponent.vue";
import AboutmeSectionComponent from "@/components/AboutmeSectionComponent.vue";
import { scrollSpy } from "@/composables/scrollSpy";





document.addEventListener("scroll", () => {
  scrollSpy("active");
});
</script>

<style>
.timeline {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  /* left: 50%; */
  list-style: none;
}

.timeline .timeline-item {
  position: relative;
}

.timeline .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .timeline-item:after {
  background-color: hsl(0, 0%, 90%);
  left: -38px;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
}
</style>
