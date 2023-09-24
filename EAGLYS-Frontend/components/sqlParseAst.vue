<template>
    <v-app>
      <v-container fluid class="pa-0" style="background-color: #1E232F">
      <div class="" style="height:100%">
        <Nuxt style="overflow-y: scroll" />
        <div class="title">
          SQL & AST 
        </div>
        <form @submit.prevent="handleSubmit">
         <div class="title">1st : SQL Parse AST</div>
        <input v-model="sqlQuery1" class="sqlInput" type="text" id="1st" name="parse" size="10" />
        <div class="title">2nd Modify AST</div>
        <input v-model="sqlQuery2" class="sqlInput" type="text" id="2nd" name="modify" size="10" />
        <div class="title">3rd Rebuild SQL</div>
        <input v-model="sqlQuery3" class="sqlInput" type="text" id="3rd" name="rebuild" size="10" />
        <br>
        <input style="margin-top:10px;margin-left: 10px;" type="submit" />  
         </form>
      </div>
      <div id="outputArea">
        <div class="title">
          Output : 
        </div>
        <div id="output">
          select * from foo; select * from bar;
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
        sqlQuery1: '',
        sqlQuery2: '',
        sqlQuery3: '',
      };
    },
    methods: {
      handleSubmit() {
        const data = {
          sqlQuery1: this.sqlQuery1,
          sqlQuery2: this.sqlQuery2,
          sqlQuery3: this.sqlQuery3,
        };
  
        // use Axios send POST
        axios.post('http://192.168.199.1:4000/query', data, {
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