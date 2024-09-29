<template>
  <article v-for="proyect in PROYECTS" class="d-flex mt-4" :key="proyect">
    <div class="w-100" :class=" proyect.class">
      <img
        class="img-fluid rounded proyect-img"
        :src="proyect.image"
        alt="Imagen proyecto"
      />
    </div>
    <div class="ps-4 w-100">
      <h3>{{ proyect.title }}</h3>
      <div class="d-flex gap-2">
        <span
          v-for="tag in proyect.tags"
          class="rounded-pill d-flex gap-1 align-items-center px-2"
          :style="tag.style"
          :key="tag"
        >
          <component :is="tag.icon"></component>
          {{ tag.name }}
        </span>
      </div>
      <p class="pt-2 paragraph">{{ proyect.description }}</p>

      <div class="d-flex gap-2">
        <div class="d-flex gap-3">
          <a
            class="border rounded px-2 py-1 d-flex gap-1 nav-link align-items-center"
            target="_blank"
            :href="proyect.github"
          >
            <v-icon name="bi-github"></v-icon>
            Code
          </a>
          <a
            class="border rounded px-2 py-1 d-flex gap-1 nav-link align-items-center"
            target="_blank"
            :href="proyect.link"
            v-if="proyect.link"
          >
            <v-icon name="fa-link"></v-icon>
            Code
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const TAGS = {
  
    vue: {
    name: "Vue.js",
    style:
      "background-color: rgba(65,184,131,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() => import("@/components/icons/VueIcon.vue")),
    },

    laravel: {
    name: "Laravel",
    style:
      "background-color: rgba(255,45,32,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() =>
      import("@/components/icons/LaravelIcon.vue")
    ),
    },

    javascript: {
    name: "Javascript",
    style:
      "background-color: rgba(245,221,27,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() =>
      import("@/components/icons/JavasciptIcon.vue")
    ),
    },
    docker: {
    name: "Docker",
    style:"background-color: rgba(2,155,251,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() =>
      import("@/components/icons/DockerIcon.vue")
    ),
    },
    php: {
    name: "PHP",
    style:"background-color: rgba(117,122,178,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() =>
      import("@/components/icons/PhpIcon.vue")
    ),
    },
    react: {
    name: "React",
    style:"background-color: rgba(0,210,231,0.5);font-size: 12px; padding-top:2px; padding-buttom:2px;",
    icon: defineAsyncComponent(() =>
      import("@/components/icons/ReactIcon.vue")
    ),
    },
    
}

const PROYECTS = ref([
  {
    title: "Small ecommerce",
    description:
      "Un pequeño e-commerce funcional creado desde cero con Laravel y Vue.js",
    link: "",
    github: "https://github.com/MaiLear/small-ecommerce",
    image: require("@/../public/img/proyect1.webp"),
    tags: [TAGS.vue, TAGS.laravel ]
  },
  {
    title: "Library",
    description:
      "Un sistema creado para ayudar en la gestión de préstamos y venta de libros en las bibliotecas de una manera rapida y sencilla",
    link: "",
    github: "https://github.com/MaiLear/libreria",
    image: require("@/../public/img/proyect2.webp"),
    tags: [TAGS.javascript, TAGS.laravel ]
  },
  {
    title: "Trendy",
    description:
      "Un pequeño sistema de venta de ropa, creado desde cero con Laravel y vanilla Javascript.",
    link: "",
    github: "https://github.com/MaiLear/JuniorEcommerce",
    image: require("@/../public/img/proyect4.webp"),
    tags: [TAGS.javascript, TAGS.laravel ]
  },
  {
    title: "Post venta",
    description:
      "Un pequeño sistema de venta de productos para un supermercado, creado desde cero con Javascript y PHP",
    link: "",
    github: "https://github.com/MaiLear/JuniorEcommerce",
    image: require("@/../public/img/proyect5.webp"),
    tags: [TAGS.javascript, TAGS.php ]
  },
  {
    title: "API",
    description:
      "Una  API de venta de productos creada con la arquitectura de microservicios.",
    link: "",
    class: "border border-1 rounded",
    github: "https://github.com/MaiLear/learning-microservice",
    image: require("@/../public/img/proyect3.webp"),
    tags: [TAGS.docker, TAGS.php ]
  },
  {
    title: "Rompecabezas",
    description:
      "Un pequeño juego de rompecabezas para mejorar la lógica con React.",
    link: "https://rompecabezas-woad.vercel.app/",
    class: "border border-1 rounded",
    github: "https://github.com/MaiLear/rompecabezas",
    image: require("@/../public/img/proyect6.webp"),
    tags: [TAGS.react ]
  },
  
]);
</script>

<style>
.proyect-img {
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.proyect-img:hover {
  transform: scaleY(1.03);
  transform: scaleX(1.03);
}
</style>
