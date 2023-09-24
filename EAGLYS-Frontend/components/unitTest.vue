<template>
    <v-app>
      <v-container fluid class="pa-0" style="background-color: #1E232F">
      <div class="" style="height:100%">
        <Nuxt style="overflow-y: scroll" />
        <div class="title">
          Unit Test
        </div>
        <form @submit.prevent="handleSubmit">
         <div class="title">4th : Unit Test</div>
        <input v-model="sqlQuery4" class="sqlInput" type="text" id="4th" name="ut" size="10" />
        <br>
        <input style="margin-top:10px;margin-left: 10px;" type="submit" />  
         </form>
      </div>
      <div id="outputArea">
        <div class="title">
          Output : 
        </div>
        <div id="output">
        </div>
      </div>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    data() {
      return {
        sqlQuery4: '',
      };
    },
    methods: {
      handleSubmit() {
        const data = {
          sqlQuery4: this.sqlQuery4,
        };
  
        // use Axios send POST
        axios.post('http://192.168.254.130:4000/query', data, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000', 
          },
        })
      },
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

  .title{
    Color:white;
    font: 30px;
    margin-top: 10px;
    margin-left: 10px;
    width:100%;
  }

  .sqlInput{
    margin-top: 10px;
    margin-left: 10px;
    width:50%;
  }
  #outputArea{
    width:100%;
    height: 500px;
    background-color: black;
  }
  #output{
    width:100%;
    height: 80%;
    color: white;
    font-size: 15px;
    margin-left: 10px;
    margin-top: 10px;
  }
  </style>