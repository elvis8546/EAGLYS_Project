<template>
    <v-app>
      <v-container fluid class="pa-0" style="background-color: #1E232F">
        <nav-bar />
      <div class="d-flex" style="height:100%">
        <side-bar />
        <Nuxt style="overflow-y: scroll" />
      </div>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import sqlInput from "@/components/sqlInput.vue";
  export default {
    components: {
      "sqlInput": sqlInput,
    },
  };
  </script>
  <style>
  /* total width */
  ::-webkit-scrollbar {
    background-color: #181a21;
    width: 1px;
  }
  
  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #1e232f;
    border-radius: 2px;
    /* border: 2px solid #fff; */
  }
  
  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
  </style>