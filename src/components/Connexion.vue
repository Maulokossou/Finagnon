<template>
    <div class="b-container">
        <div class="formulaire">
            <form action="" @submit.prevent="login()">
                <h1>CONNEXION</h1>
                <div class="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <input type="email" id="email" name="email" placeholder="Adresse e-mail"  v-model="userData.email">
                </div>
                <div class="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <input type="password" v-model="userData.password">
                </div>

                <button type="submit" id="envoyer">Se connecter</button>

                <div class="footer">
                    <p>Pas encore de compte?</p>
                    <router-link to="/enregistrement">Inscrivez-vous ici</router-link>
                </div>
                 
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import router from "../router/index"
import { ref } from "vue";
import axios from "axios";
const clientHttp = axios.create(
    {
        baseURL: "http://localhost:3000/",
        headers: {
        Accept: "application/json",
        "Content-type": "*"
        }
    }
)
const userData = ref({
  email: "",
  password: "",
});
 async function login() {
  if ( !userData.value.email && !userData.value.password ){
    console.log("Tous les champs sont requis");
  } else {
    try {
      const userExist = await clientHttp.post("/users/login", userData.value);
      console.log(userExist);
      localStorage.setItem('token',userExist.data.token);
      userData.value.email = "";
      userData.value.password = "";

      router.replace("/dashboard");
      
    } catch (error) {
      console.log(error);
    }
  }
};
const token = localStorage.getItem('token')
if(token){
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

</script>
<style scoped>
    .b-container {
      background-image: linear-gradient(rgba(0,0,0,0.7),transparent), url('@/assets/BACKGROUND.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      background-position: center;
    }
    .formulaire{
      max-width: 1170px;
      margin: 0 auto !important;
      padding-left: 15px;
      padding-right: 15px;
      /* height: 100%; */
      padding-top: 50px;
      padding-bottom: 50px;
    }
    form{
      position: absolute;
      padding: 40px 5px 100px 35px;
      width: 350px;
      border-radius: 5px;
      overflow: hidden;
      margin: 80px 380px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      /* background-image: linear-gradient(rgb(0, 0, 0),transparent,rgb(0, 0, 0), transparent); */
      background-color: rgba(0, 0, 0, 0.747);
      filter: blur(2);
      height: 200px;
      color: white;
    }
    input{
        display: block;
        width: 86%;
        padding: 8px 7px;
        margin: 8px 0px;
        outline: none;
        border: none;
        background: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
       /*  background: #f7f9Fb; */
        color: white;
        font-size: 17px;
        border: 1px solid rgba(245, 245, 245, 0.616);
        /* border-left: none; */
    }
    #envoyer{
        width: 91%;
        cursor: pointer;
        background: none;
        border: none;
        color: white;
        padding: 10px 0px;
        background-color: #ecb431da;
        border-radius: 3px;
        margin-top: 20px;
        font-size: 17px;
    }
    h1{
        margin-left: 65px;
        color:#ecb431da;
        padding-bottom: 15px;
    }
    .input{
        display: flex;
        align-items: center;
        width: 90%;
        color: #ecb431da;
    }
    .input svg{
        border: 1px solid #ecb431da;
        padding: 6px 6px 5px 5px;
        background-color: #ecb431da;
        color: white;
        cursor: pointer;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .footer{
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between;
    }
    .footer a{
       color: #ecb431da;
       text-decoration: underline;
    }
    </style>