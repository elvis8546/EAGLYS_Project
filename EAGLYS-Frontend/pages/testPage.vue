<template>
    <v-app>
      <v-container fluid class="pa-0" style="background-color: #1E232F">
        <nav-bar />
        <div class="d-flex" style="height: 100%">
          <button @click="showSqlParseAst = true">Show SQL Parse AST</button>
          <button @click="showUnitTest = true">Show Unit Test</button>
  
          <!-- Show SQL Parse AST module -->
          <sqlParseAst v-if="showSqlParseAst" style="overflow-y: scroll" />
  
          <!-- show Unit Test module -->
          <unitTest v-if="showUnitTest" style="overflow-y: scroll" />
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
        showSqlParseAst: false,
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
    </style>