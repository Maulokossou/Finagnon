<template>
    <div class="b-container">
        <div class="formulaire">
            <form action="" @submit.prevent="register">
                <h1>INSCRIPTION</h1>
                <div class="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <input type="text" id="text" name="text" placeholder="Nom et Prénom" v-model="userData.name">
                </div>                      
                <div class="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <input type="email" id="email" name="email" placeholder="Adresse e-mail" v-model="userData.email">
                </div> 
                <div class="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <input type="password" id="password" name="password" placeholder="Mot de passe"  v-model="userData.password">
                </div>
                <button type="submit" id="envoyer">S'inscrire</button>
                <div class="footer">
                    <p>Déja un compte?</p>
                    <router-link to="/connexion">Connectez-vous ici</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import router from '../router/index';
import {ref, computed} from 'vue';
import {clientHttp} from "../lib/clientHttps";

const userData = ref({
  email: "",
  password: "",
  name: ""
});

const register = async function () {
  if (userData.value.email.trim()=== ""  || 
    userData.value.password.trim()==="" || 
    userData.value.name.trim()==="" ) {
    console.log("Tous les champs sont obligatoires ");
  }else{
    try {
      const user=await clientHttp.post("/users/register", userData.value);
     /* router.replace("/connexion"); *
      console.log(userData.value); */
      console.log(user);
      router.replace("/connexion");
    } catch (error) {
      console.log(error);
    }
  }
  /* console.log(userData.value); */
  
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
      /* border: 1px solid whitesmoke; */
      position: absolute;
      padding: 40px 0px 110px 35px;
      width: 350px;
      border-radius: 5px;
      overflow: hidden;
      margin: 20px 370px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      /* background-image: linear-gradient(rgb(0, 0, 0),transparent,rgb(0, 0, 0), transparent); */
      background-color: rgba(0, 0, 0, 0.76);
      filter: blur(2);
      height: 250px;
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
        border: 1px solid rgba(245, 245, 245, 0.712);
        /* border-left: none; */
    }
    input:focus{
        background: none;
    }
    #envoyer{
        width: 90%;
        cursor: pointer;
        background: none;
        border: none;
        color: white;
        background-color: #ecb431da;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom:20px;
        padding:10px 0px;
        font-size:18px;
    }
    h1{
        margin-left: 54px;
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
        padding: 6px 5px 5px 5px;
        background-color: #ecb431da;
        color: white;
        cursor: pointer;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    form span{
        color: #ecb431da;
        font-size: 14px;
        margin-top: -14px;
    }
    .footer{
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between;
        /* border: 1px solid white; */
        margin-top:-10px;
    }
    .footer a{
       color: #ecb431da;
       text-decoration: underline;
    }
    .valid {
        background: url('@/assets/ok2.png') no-repeat right;
        background-size: auto 60%;
    }
    .invalid {
        background: url('@/assets/false1.png') no-repeat right;
        background-size: auto 70%;
    }
</style>