// Styles

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#013368",
          secondary: "#ff8e31",
          accent: "#4593ff",
          indigo: "#013368",
        },
        background: "#e8eef2",
      },
    },
  },
});
