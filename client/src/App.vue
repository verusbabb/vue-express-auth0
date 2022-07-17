<template>
  <v-app>
    <v-app-bar app color="#002055">
      <v-app-bar-nav-icon @click="drawer = true" 
                           class="d-flex d-sm-none"
                           ></v-app-bar-nav-icon>
      <template #prepend>
        <v-img src=/beta.png width="40"></v-img>
      </template>
      <v-toolbar-title>
      <div class="d-flex">
        <v-btn to="/" color="grey-lighten-2">Alpha Nu</v-btn>
        <v-btn to="/events" color="grey-lighten-2">150th Anniversary Events</v-btn>
        <v-btn to="/leadership" color="grey-lighten-2">Leadership</v-btn>
        <v-btn to="/memberaccess" color="grey-lighten-2">Member Access</v-btn>
        <v-btn to="/contact" color="grey-lighten-2">Contact</v-btn>
      </div>
        </v-toolbar-title>
        <v-btn to="/signin" color="grey">Sign In</v-btn>
    </v-app-bar><v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" class="my-2" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        show: false,
      };
    },
  };
</script>
