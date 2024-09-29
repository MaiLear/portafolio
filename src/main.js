import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/global.css'
// Supports weights 100-900
import '@fontsource-variable/onest';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiLinkedin,HiBriefcase,BiCodeSlash,ViFileTypeVue,FaLaravel,BiGithub,HiLink,FaUserCheck,BiSun,BiMoon,CoJavascript,ViFileTypeDocker2,ViFileTypePhp,FaReact,FaLink } from "oh-vue-icons/icons";

addIcons(BiLinkedin,HiBriefcase,BiCodeSlash,ViFileTypeVue,FaLaravel,BiGithub,HiLink,FaUserCheck,BiSun,BiMoon,CoJavascript,ViFileTypeDocker2,ViFileTypePhp,FaReact,FaLink);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);

app.mount('#app')
