<template>
  <v-card class="rounded-lg" color="grey-lighten-4" width="100%">
    <v-img src="homecoming.png"></v-img>

    <v-card-title>Main Event</v-card-title>

    <v-card-subtitle>May 4 & 5, 2023</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>More Details</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{
          show ? "mdi:mdi-chevron-up" : "mdi:mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-divider></v-divider>
        <v-card-title>Details</v-card-title>
        <v-card-subtitle>Friday</v-card-subtitle>
        <v-card-text>Text with some details</v-card-text>
        <v-card-subtitle>Saturday</v-card-subtitle>
        <v-card-text>Text with some more details</v-card-text>

        <v-btn class="my-4">Register</v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: "MainEvent",
    components: {},
    data() {
      return {
        show: false,
      };
    },
  };
</script>

<style scoped>
  .landscape {
    height: 300px;
    width: 1200px;
  }
</style>

