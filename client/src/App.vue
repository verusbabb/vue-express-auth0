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
        <v-btn to="/" color="grey-lighten-2">Tom Babb</v-btn>
        <v-btn to="/events" color="grey-lighten-2">Blog Posts</v-btn>
        <v-btn to="/leadership" color="grey-lighten-2">Bio</v-btn>
        <v-btn to="/memberaccess" color="grey-lighten-2">Art Work</v-btn>
        <v-btn to="/contact" color="grey-lighten-2">Contact</v-btn>
      </div>
        </v-toolbar-title>
        <UserBadge />
        
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
import { useAuth0 } from '@auth0/auth0-vue';
import UserBadge from "./components/UserBadge.vue"

  export default {
  components: { UserBadge },
    name: "App",
    setup() {
      const auth0 = useAuth0();

      return {
        login: () => auth0.loginWithRedirect(),
        logout: () => auth0.logout({ returnTo: window.location.origin }),
        user: auth0.user,
        isAuthenticated: auth0.isAuthenticated,
        isLoading: auth0.isLoading,
        UserBadge,
        }
      }
    }
</script>
