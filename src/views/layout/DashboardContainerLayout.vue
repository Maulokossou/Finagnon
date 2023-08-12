<template>
      <div class="dashboard_content">
          <div class="dashboard_content_left">
             <SideBar/>
          </div>
          <div class="dashboard_content_right">
            <NavBar/>
            <router-view>
                
            </router-view>
          </div>
      </div>

  </template>
  <script lang="ts" setup>
  import SideBar from '@/components/SideBar.vue'
  import NavBar from '@/components/NavBar.vue'
  import {Logo} from "../components/Logo.vue";
  import { useFilmStore } from "@/Stores/film";
  import { storeToRefs } from "pinia";
  import { ref, onMounted } from "vue";
  
  const { initialise } = useFilmStore();
  const { films } = storeToRefs(useFilmStore());
  
  onMounted(async () => {
    await initialise();
  });
   
  </script>

  <style scoped>
  .dashboard_content{
    display: flex;
  }
  .dashboard {
    /* width: 100%; */
    height: 632px;
    display: flex;
  }
  .side-bar {
    width: 200px;
    background-color: black;
    height: 632px;
    color: white;
    padding: 0px 15px;
    font-size: 12px;
  }
  .side-bar_top {
    margin-top: -65px;
    margin-left: -10px;
    /* border: 1px solid red; */
    width: 100%;
  }
  .side-bar_mid {
    /* border: 2px solid red; */
    line-height: 60px;
    margin-top: -20px;
    color: #ecb431da;
  }
  .side-bar_mid h2 {
    text-decoration: underline;
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .side-bar_mid h3 {
    margin-left: 10px;
  }
  .movies {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .movies a {
    display: flex;
    align-items: center;
    color: #ecb431da;
  }
  .movies:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .cartoons {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .cartoons:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .series {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .series:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .documentary {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .documentary:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .reality_show {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    padding: 0px 0px 0px 25px;
    cursor: pointer;
  }
  .reality_show:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .side-bar_bottom {
    /* border: 2px solid blue; */
    color: #ecb431da;
    display: flex;
    align-items: center;
    margin-top: 60px;
    padding: 18px 25px;
    cursor: pointer;
  }
  .side-bar_bottom:hover {
    background-color: whitesmoke;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }
  .side-bar_bottom h3 {
    margin-left: 10px;
  }
  .container {
    width: 1100px;
    /* border: 1px solid black; */
    height: 632px;
    /*  border: 2px solid blue; */
    background-color: whitesmoke;
  }
  .container_top {
    /* border: 1px solid green; */
    padding: 15px 10px;
    background-color: #f7f9fb;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container_top .hamburger {
    cursor: pointer;
  }
  .container_top .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid rgb(216, 215, 215); */
    border-radius: 5px;
    width: 400px;
    padding: 10px;
    color: rgb(148, 146, 146);
    background: whitesmoke;
  }
  .container_top .search .right {
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    cursor: pointer;
  }
  .container_top .search .right input {
    border: none;
    outline: none;
    margin-left: 5px;
    background: none;
  }
  .container_top .search .left {
    cursor: pointer;
  }
  .container_top .deconnexion button {
    cursor: pointer;
    border: none;
    background: none;
    /* border: 1px solid black; */
    padding: 15px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #ecb431da;
    color: white;
    font-weight: bold;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .container_top .deconnexion button a {
    color: white;
  }
  .container_bottom {
   /*  border: 1px solid rgb(216, 215, 215); */
    border-radius: 5px;
    margin: 10px;
    height: 540px;
  }
  .film_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
  }
  .film {
    /* border: 1px solid red; */
    width: 250px;
    height: 265px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .film .top{
    height: 70%;
    width: 100%;
    /* border: 1px solid blue; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 2px;
  }
  .film .top img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
  .film .bottom{
    /* border: 1px solid green; */
    height: 30%;
    padding: 10px;
  }
  
  
  </style>
  