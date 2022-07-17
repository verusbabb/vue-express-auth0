<template>
  <v-container fluid>
    <v-row class="mx-5">
      <v-col cols="12" sm="6" lg="3">
        <v-card
          title="Total Revenue"
          color="#013368"
          height="200"
          class="w-100 text-white rounded-lg"
        ></v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card title="Total Doors" height="200" class="rounded-lg"> </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card title="New Doors" class="w-100 rounded-lg" height="200">
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card
          title="Lost Doors"
          class="w-100 rounded-lg rounded-l-0"
          height="200"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "EventCards",
  };
</script>