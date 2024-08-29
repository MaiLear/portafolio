<template>
  <header>
    <nav
      class="position-fixed rounded-pill mt-3"
      style="transform: translateX(-50%)"
      id="menu"
    >
      <ul
        class="py-1 px-2 d-flex gap-3 list-unstyled m-0"
        style="font-size: 14px"
      >
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
          <component
            :is="ICONCOMPONENT"
            id="icon-component"
            style="cursor: hand"
          ></component>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { theme, themeBtn, firstLoadThemeBtn, firstLoadThemeMenu } from "@/composables/theme";
import { ref, onMounted } from "vue";

const ICONCOMPONENT = ref("");



const bodyOptions = {
  classBodyDark: "dark",
  classBodyLight: "light",
};

const paragraphOptions = {
  classParagraph: "paragraph",
};

const menuOptions = {
  idMenu: 'menu',
  classMenuDark: 'menu-dark',
  classMenuLight: 'menu-light',
}

const themeOptions = {
  bodyOptions,
  paragraphOptions,
  menuOptions,
  idIconComponent: "icon-component",
  classDarkIcon: "dark-icon",
};

const handleTheme = () => {
  theme(themeOptions);
  ICONCOMPONENT.value = themeBtn({
    idIconComponent: themeOptions.idIconComponent,
    classDarkIcon: themeOptions.classDarkIcon,
  });
};

onMounted(() => {
  ICONCOMPONENT.value = firstLoadThemeBtn();
  firstLoadThemeMenu(menuOptions);
});
</script>

<style>
.active {
  transition: all 0.3s ease;
  color: yellow;
}

.menu-dark {
  background-color: rgba(12, 12, 12);
  z-index: 1;
}

.menu-light {
  background-color: rgba(249, 249, 249);
  z-index: 1;
}
</style>
