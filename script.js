import { url } from "./components.js";
import { saveToken, saveUser } from "./storage/localStorage.js";
const message = document.querySelector('.message');
const formDiv = document.querySelector('.Cform');
const username = document.querySelector('#userName');
const password = document.querySelector('#password');
const form = document.querySelector('.formDiv');
// const unError = document.querySelector('#userNameError');
// const emailError = document.querySelector('#emailError');




formDiv.addEventListener("submit", submitform);

function submitform(event) {
    event.preventDefault();

    message.innerHTML="";

    const unValue = username.value.trim();
    const passValue = password.value.trim();

    if(unValue.length === 0 || passValue.length=== 0) {
        displaymessage();
    }

    // if(username.value.length < 2){
    //     console.log("hello there");
    //     unError.style.display = "none";
    //     console.log(unError);
    // }else{
    //     unError.style.display = "block";
    // }

logIn(unValue, passValue);
};

async function logIn(username, password){
   const newUrl = url + "auth/local";
   const data = JSON.stringify({ identifier: username, password: password });
   const options = {
      method: "post",
      body: data,
      headers: {
          "content-Type": "application/json"
      }

   };
   try{
      const response = await fetch(newUrl, options);
      const json = await response.json();
     if(json.user){
    

        saveToken(json.jwt);
        saveUser(json.user);

        location.href = "/succsess.html";
        
     }

     if(json.error){
        displaymessage();
     }

      
   }catch(error){
console.log(error);
   }
};

function displaymessage(){ 
    document.querySelector('.message').innerHTML= "Please enter valid credentials";

};








