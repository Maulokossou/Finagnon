<template>
    <div>
    <div class="container">
      <div class="container_top">
        <div class="hamburger">
         <HamburgerIcon></HamburgerIcon>
        </div>
        <div class="search">
          <div class="right">
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Rechercher..." />
          </div>
          <div class="left">
            <MicIcon></MicIcon>
          </div>
        </div>
        <div class="deconnexion">
          <p id="author" v-if="nowUser" class="animate__animated animate__shakeY"> {{ nowUser.email }}</p>
          <button><router-link to="/">SE DECONNECTER</router-link></button>
        </div>
      </div>
    </div>
    </div>
</template>
<script lang="ts" setup>

import{onMounted, ref} from 'vue'
import{storeToRefs} from 'pinia'
import {useFilmStore} from '../Stores/film'
import SearchIcon from "../components/SearchIcon.vue";
import HamburgerIcon from "../components/HamburgerIcon.vue";
import MicIcon from "../components/MicIcon.vue";
const {initialiseUser}= useFilmStore()
const {nowUser}= storeToRefs(useFilmStore())
import{supabase} from "@/lib/supabase"

onMounted(
  ()=>{initialiseUser()}
)
console.log(nowUser);
</script>
<style scoped>
.container {
  width: 1055px;
  height: 640px;
  background-color: whitesmoke;
}
.container_top {
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
  border-radius: 5px;
  width: 400px;
  padding: 10px;
  color: rgb(148, 146, 146);
  background: whitesmoke;
}
.container_top .search .right {
  display: flex;
  align-items: center;
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
.deconnexion{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.deconnexion p{
  margin-right: 20px;
}
#author{
  border-bottom:1px solid #ecb431da;
  color:#ecb431da;
}
</style>