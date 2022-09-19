import { createApp } from "vue";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faFacebook, faWhatsapp, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



import App from "./App.vue";
import router from "./router";

library.add(fas, fab, faFacebook, faTwitter, faWhatsapp);

import './assets/main.css'

// Elment plus
import ElementPlus from 'element-plus'
import ElMessage from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/es'



createApp(App)
  .use(router)
  .use(ElementPlus, {locale})
  .use(ElMessage)
  .component('fa', FontAwesomeIcon)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
