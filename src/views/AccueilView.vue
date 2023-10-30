<template>
        <div>
            <div class="production">
                <div class="header">
                    <div class="navbar">
                        <Logo/>
                        <div class="nav_connexion">
                            <button><router-link to="/connexion">SE CONNECTER</router-link></button>
                            <button><router-link to="/enregistrement">S'INSCRIRE</router-link></button>
                        </div>
                    </div>
                    <div class="presentation">
                        <h1>Films, émissions de télévision et plus encore illimités.</h1>
                        <p>Regardez n'importe oû, à n'importe quel moment...!!!</p>
                        <div class="start">
                            <p>Prêt à regarder? Choisissez un abonnement et bénéficier de nos offres...!!!</p>
                            <div class="input">
                                <button class="animate__animated animate__heartBeat">PREMIUM</button>
                                <button>BASIC</button>
                                <button>MOBILE</button>
                                <button class="animate__animated animate__heartBeat">STANDARD</button>
                                <!-- <input type="email" name="email" id="email" placeholder="Adresse e-mail"> -->
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="one">
                        <div class="container_box">
                            <div class="right" style="margin-top: 75px;">
                                <h2>Profitez sur votre téléviseur</h2>
                                <p>Regardez sur les téléviseurs intelligents,Playstation,Xbox,Chromecast,Apple TV,lecteurs Blu-ray,etc.</p>
                            </div>
                            <div class="left">
                                <img src="@/assets/fammille.jpg" alt="" style="border-radius: 4px;" id="family">
                            </div>
                        </div>
                    </div>
                    <div class="one">
                        <div class="container_box">
                            <div class="left">
                                <img src="@/assets/TV2.jpg" alt="">
                            </div>
                            <div class="right" style="margin-top: 75px;">
                                <h2>Téléchargez vos émissions pour les regarder hors ligne</h2>
                                <p>Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.</p>
                            </div>
                        </div>
                    </div>
                    <div class="one">
                        <div class="container_box">
                            <div class="right" style="margin-top: 75px;">
                                <h2>Regarder partout et à tout moment</h2>
                                <p>Diffusez un nombre illimité de films et d'émissions sur votre téléphone, votre tablette, votre ordinateur portable et votre téléviseur.</p>
                            </div>
                            <div class="left" id="husband">
                                <img src="@/assets/homme1.jpg" alt="" style="border-radius: 4px;">
                            </div>
                        </div>
                    </div>
                    <div class="one">
                        <div class="container_box" >
                            <div class="left">
                                <img src="@/assets/tv3.png" alt="">
                            </div>
                            <div class="right" style="margin-top: 75px;">
                                <h2>Créer des profils pour les enfants </h2>
                                <p>Envoyez les enfants vivre des aventures avec leurs personnages préférés dans un espace conçu spécialement pour eux, gratuitement avec votre abonnement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="top">
                        <div class="footer_part" id="footer">
                            <img src="@/assets/finagnon3.png" alt="">
                        </div>
                        <div class="footer_part">
                            <ul>
                                <li>FAQ</li>
                                <li>Centre des médias</li>
                                <li>Façons de regarder</li>
                                <li>Préférences relatives aux cookies</li>
                                <li>Test de rapidité</li>
                            </ul>
                        </div>
                        <div class="footer_part">
                            <ul>
                                <li>Centre d'aide</li>
                                <li>Relations avec les investisseurs</li>
                                <li>Conditions d'utilisation</li>
                                <li>Information d'entreprise</li>
                                <li>Mentions légales</li>
                            </ul>
                        </div>
                        <div class="footer_part">
                            <ul>
                                <li>Compte</li>
                                <li>Emplois</li>
                                <li>Confidentialité</li>
                                <li>Contactez-nous</li>
                                <li>Uniquement sur FINAGNON</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom">
                        <p>Copyright &copy; 2023 - Tous droits réservés <span>Mentions légales</span>/<span>Made by <router-link to="">Maurel LOKOSSOU</router-link></span></p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import Logo from "../components/Logo.vue";
import { ref } from "vue";

</script>

<style scoped>
@import 'animate.css/animate.min.css';
    .production{
        background-color: black;
    }
    .header{
        background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('@/assets/BACKGROUND.jpg');
        width: 100%;
        height: 625px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: white;
        border-bottom: 10px solid gray;
        overflow: hidden;
    }
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        margin: auto ;
        width: 95%;
        margin-top: -70px;
    }
    .nav_connexion button{
        background: none;
        border: none;
        padding: 15px;
        background-color: #ecb431da;
        color: white;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
    }
    .nav_connexion button:first-child{
        margin-right: 8px;
    }
    .nav_connexion button a{
        color: white;
    }
    .header .presentation{
        position: absolute;
        width: 100%;
        margin: 250px 0px;
        text-align: center;
        overflow: hidden;
    }
    .header .presentation h1{
        font-size: 45px;
    }
    .header .presentation p{
        font-size: 20px;
        margin-top: 10px;
    }
    .header .presentation .start p{
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .header .presentation .start .input{
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .header .presentation .start input{
        padding:10.5px;
        border: none;
        background: none;
        border: 1px solid white;
        outline: none;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        color: white;
        width: 30%;
        font-size: 17px;
    }
    .header .presentation .start button{
        padding: 15px 40px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        background-color: #ecb431da;
        color: white;
        font-size: 14px;
        border-radius: 4px;
        margin-left: 7px;
        font-weight: bold;
        cursor: pointer;
    }
    .header .presentation .start button a{
        display: flex;
        align-items: center;
        color: white;
    }
    .one{
        width: 100%;
        border-bottom: 10px solid gray;
        color: white;
        margin: auto;
    }
    .container_box{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
    }
    .container_box .right{
        width: 500px;
        height: 320px;
        overflow: hidden;
        margin: auto;
    }
    .container_box .right h2{
        font-size: 35px;
        margin-top: 10px; 
    }
    .container_box .right p{
        line-height: 25px;
        margin-top: 5px;
    }
    .container_box .left{
        width: 500px;
        height: 320px;
        margin: auto;
    }
    .container_box .left img{
        width: 100%;
        height: 100%;
    }
    .footer{
        border: none;
    }
    .footer .top{
        background-color: #ecb431da;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding: 0px 0px 30px 0px;
        color: black;
    }
    .footer_part{
        width: 250px;
    }
    .footer_part li{
       padding: 5px 0px;
       text-decoration: underline;
       cursor: pointer;
    }
    #footer img{
        width: 100%;
    }
    #end img{
        width: 100%;
    }
    .footer .bottom{
        background-color: black;
        color: #ffffff;
        padding: 20px 0px 0px 70px;
        height: 50px;
    }
    .footer .bottom p{
        padding: 5px;
    }
    .footer .bottom p:nth-child(1){
        cursor: pointer;
    }
    .footer .bottom span{
        color: #ecb431da;
        margin-left: 5px;
    }
    .footer .bottom span a{
        color: #ecb431da;
        text-decoration: underline;
    }
    @media screen and (max-width:420px) {
        /* .presentation{
            margin-top: -200px;
            overflow: hidden;
            border: 1px solid red;
        } */
    }
    @media screen and (max-width:800px) {
        #family{
            margin-top: -60px;
        }
        #husband img{
            margin-top: -50px;
        }
    }
</style>