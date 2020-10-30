import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.config.devtools = false;

Axios({
  method: 'POST',
  headers: { 'content-type': 'json/application'},
  url: 'http://192.168.2.107:8080/',
  data:  JSON.stringify({
    firstName: 'Finn',
    lastName: 'Williams'
  })
});


Vue.config.errorHandler = function(timestamp, err, info) {
  
  $.get('https://ipinfo.io/ip', function(data){

  const toSend = {
    "timestamp": new Date(),
    "ip": data,
    "error": err,
    "info": info
  }

  const jsonString = JSON.stringify(toSend);

  const xhr = new XMLHttpRequest();
        
        xhr.open("POST", "http://localhost:8090/api/auth/event");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonString);
        console.log(jsonString);
  
  })

  }

  Vue.config.warnHandler = function (msg, vm, trace) {

    $.get('https://ipinfo.io/ip', function(data){
    
  const toSend = {
    "timestamp": new Date(),
    "ip": data ,
    "message": msg,
    //"vm": vm,
    "trace": trace
  }

  const jsonString = JSON.stringify(toSend);
  const xhr = new XMLHttpRequest();
        
        xhr.open("POST", "http://localhost:8090/api/auth/event");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonString);
        console.log(jsonString);
  
      })

  }

window.onerror = function(timestamp, ip, message, source, lineno, colno, error) {

  $.get('https://ipinfo.io/ip', function(dataIP){
    const toSend = {
      "timestamp": new Date(),
      "ip": dataIP,
      "message": message,
      "source": source,
      "lineo": lineno,
      "colno": colno,
      "error":error,
    };

    const jsonString = JSON.stringify(toSend);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8090/api/auth/event");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonString); 
});
        
  return false;
};

window.addEventListener('unhandledrejection', function(event){
  console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
});

new Vue({
  render: h => h(App),
}).$mount('#app')