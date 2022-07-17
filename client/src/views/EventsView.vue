<template>
  <main>
    <v-container fluid align="center">
      <v-row>
        <div class="mx-auto text-h5 font-weight-bold text-indigo my-8">
          Some intro text
        </div>
      </v-row>

      <v-row>
        <v-col>
          <HomeComing />
        </v-col>
        <v-col>
          <TurkeyPull />
        </v-col>
        <v-col>
          <MainEvent />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
  import HomeComing from "../components/HomeComing.vue";
  import TurkeyPull from "../components/TurkeyPull.vue";
  import MainEvent from "../components/MainEvent.vue";
  export default {
    name: "EventCards",
    components: {
      HomeComing,
      TurkeyPull,
      MainEvent,
    },
    data() {
      return {
        show: false,
      };
    },
  };
</script>
