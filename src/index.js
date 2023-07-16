
import VueHangman from "./VueHangman.vue";

import { store } from "./state-logic";
import { createApp } from "vue";
import AsyncWorking from "./AsyncWorking";
//import "./highlight-on-change";
import MessageToggle from "./message-toggle.js";

const app = createApp(VueHangman);
app.directive("AsyncWorking", AsyncWorking);
app.directive("MessageToggle", MessageToggle);
app.use(store);
app.mount("#vue-hangman-2");