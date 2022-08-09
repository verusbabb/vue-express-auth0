<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-list-item
        class="ma-2"
        style="background-color: #f5f5f5; border-radius: 10px"
        :prepend-avatar="user.picture"
        :title="user.name"
        :subtitle="user.email"
        v-bind="props"
      >
        <v-btn
          v-if="!isAuthenticated"
          style="background-color: #f5f5f5; border-radius: 10px"
          @click="login"
          >Log in</v-btn
        >
      </v-list-item>
    </template>
    <v-list-item
      class="ma-2"
      style="background-color: #f5f5f5; border-radius: 10px"
    >
      <v-btn
        class="ma-2"
        style="background-color: #f5f5f5; border-radius: 10px"
        @click="logout"
        >Log out</v-btn
      >
    </v-list-item>
  </v-menu>
</template>

<script>
  import { useAuth0 } from "@auth0/auth0-vue";
  import { ref } from "vue";
  export default {
    name: "UserBadge",
    setup() {
      const auth0 = useAuth0();
      const show = true;

      return {
        login: (show) => auth0.loginWithRedirect(),
        logout: () => auth0.logout({ returnTo: `${window.location.origin}` }),
        user: auth0.user,
        isAuthenticated: auth0.isAuthenticated,
        isLoading: auth0.isLoading,
      };
    },
  };
</script>
