<template>
  <header>
    <nav class="position-fixed" style="transform: translateX(-50%)">
      <ul class="pt-2 d-flex gap-3 list-unstyled" style="font-size: 14px">
        <li class="nav-item">
          <a class="nav-link" data-scroll-spy href="#home"> Inicio </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-scroll-spy href="#experience">
            Experiencia
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-scroll-spy href="#proyects"> Proyectos </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-scroll-spy href="#aboutme"> Sobre mí </a>
        </li>
        <li @click="handleTheme">
          <component :is="ICONCOMPONENT" id="icon-component" style="cursor: hand;"></component>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { theme, themeBtn, firstLoadThemeBtn } from "@/composables/theme";
import {ref, onMounted} from 'vue'

const ICONCOMPONENT = ref("");

const themeOptions = {
  classBodyLight: "light",
  classBodyDark: "dark",
  idIconComponent: "icon-component",
  classDarkIcon: "dark-icon",
  classParagraph: "paragraph",
};

const handleTheme = () => {
  theme(themeOptions);
  ICONCOMPONENT.value =  themeBtn({
    idIconComponent: themeOptions.idIconComponent,
    classDarkIcon: themeOptions.classDarkIcon,
  });
};

onMounted(()=>{
  ICONCOMPONENT.value = firstLoadThemeBtn();
})


</script>

<style>
.active {
  transition: all 0.3s ease;
  color: yellow;
}
</style>
