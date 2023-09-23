<template >
  <v-app style="background-color: #1E232F;height: 100vh;">
    <v-container fluid class="pa-0" style="background-color: #1E232F;height: 100vh;">
      <nav-bar />
      <div class="d-flex" style="height: 100%;background-color: #1E232F">
        <button @click="showSqlParseAst = true; showUnitTest = false">Show SQL Parse AST</button>
        <button @click="showSqlParseAst = false; showUnitTest = true">Show Unit Test</button>
      </div>
      <div style="overflow-y: scroll;width:100%;background-color: black;" >
        <!-- Show SQL Parse AST module -->
        <sqlParseAst v-if="showSqlParseAst" style="width:100%;background-color: black;" />

        <!-- Show Unit Test module -->
        <unitTest v-if="showUnitTest" style="width:100%;background-color: black;"/>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import navBar from "@/components/navigatorBar.vue";
import sqlParseAst from "@/components/sqlParseAst.vue";
import unitTest from "@/components/unitTest.vue";

export default {
  components: {
    "navBar": navBar,
    "sqlParseAst": sqlParseAst,
    "unitTest": unitTest
  },
  data() {
    return {
      showSqlParseAst: true,
      showUnitTest: false
    };
  }
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
  html, body {
  height: 100%;
  }
  </style>