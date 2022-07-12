<template>
  <v-app>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  //import HelloWorld from "./components/HelloWorld";

  export default {
    name: "App",
    data() {
      return {
        appTitle: "Alpha Nu",
        sidebar: false,
        menuItems: [
          { title: "Home", path: "/home", icon: "home" },
          { title: "about", path: "/about", icon: "face" },
        ],
      };
    },
  };
</script>
<style></style>
