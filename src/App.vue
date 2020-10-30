<template>
  <div id="app">
<button v-on:click="sendLog('hey', $event)">
  Submit
</button>
  </div>
</template>
<script>
//import {initializeSecurityLib} from '@mvx/javascript-lib';
import { DatabaseError } from './error'
import $ from 'jquery'
export default{
methods: {
  sendLog: function (message, event) {
    try{
      event
      throw new DatabaseError(JSON.stringify({ "status": 400, "error": 'Email already exists' }))
    }catch(err){
      if (err instanceof DatabaseError) {
    $.get('https://ipinfo.io/ip', function(data){
    const toSend = {
    "timestamp": new Date(),
    "ip": data,
    "error": err,
    "message": err.message
  }

  const jsonString = JSON.stringify(toSend);

  const xhr = new XMLHttpRequest();
        
        xhr.open("POST", "http://localhost:8090/api/auth/event");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonString);
        console.log(jsonString);

  })
  }
   else {
    // ...
  } 
    }
    
   }
  },
  /*
  ,
   async created() {
            await initializeSecurityLib("http://payment.movex-cloud.de/auth-service/", 
            "eyJhbGciOiJSUzI1NiJ9.eyJsb2dpbl9pZCI6MTAwNSwib3Bjb2RlIjoiQU1PIiwibGFuZyI6ImRlIiwibG9naW4iOiJhbW9zIiwibGFzdF9zeW5jIjoiMjAyMC0xMC0yOSAwNzo1MDo1MyArMDEwMCIsImV4cCI6MTYwNDU1OTA1OCwiY29tcGFueV9pZCI6IjEiLCJjdXN0X2NvbXBhbnlfaWQiOiIxIiwiY29tcGFueSI6IjNQYWdlbiIsImN1c3RfY29tcGFueSI6IjNQQUdFTiBEZXV0c2NobGFuZCIsIndhcmVob3VzZV9pZCI6IjEiLCJ3YXJlaG91c2UiOiJBbHNkb3JmIiwibG9naW5fYXQiOiIyMDIwLTEwLTI5VDA2OjUwOjU4WiJ9.lq0mE1_fJ2Tyr0YvQOjE0bLtKYVtEIZlh-HkeFPL39DSUlf0vOIxPuOihoflnaetBu5wdBN3cOVwgLjmuvLCTSEm757J8gDdoJxREKA6YhhGBOOx67M_CW5IgCxDNqhfSYS8jn3VOlIUZlIEneIcEeZ8kooLpFWANU2DHAX5MMcXIqvavPhoqfFNCfI-j7ksZwzlOZrfzOLqTN1ByFMr6CVp0DDNP3PwTDsGM7CmYXXYzLWYKwohiJuwpVcBVZlsBVGMSGkx8bZA6lj8mXZCqGy7B1xJpc6k13bSxi_Fra4vCt-r9eV9wPEDi-GgjACNss54AUDk9XxTr_8cqyPY4w");
            await this.$store.dispatch('loadConstants').then(() =>{
                console.log('loaded constants');
            });
        }
 */
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>