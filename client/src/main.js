import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(
  createAuth0({
    domain: "dev-3428khbg.us.auth0.com",
    client_id: "tELxkaRQulU71PKOJodw7ejASu4gdDnR",
    redirect_uri: window.location.origin,
  })
);
app.mount("#app");
