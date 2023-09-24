<template>
  <DashboardLayout>
    <div>
      <div class="container_bottom">
      <div class="contain">
        <div class="film_container">
          <div class="film" v-for="element in films">
            <div class="top">
              <a :href="element.url" title="Lire la vidéo..."><img :src="element.Image" alt=""></a>
            </div>
           <div class="bottom">
            <h2>{{ element.titre }}</h2>
            <div class="collection">
              <p>{{ element.genre }}_</p>
              <p>{{ element.annee }}</p>
            </div>
            <div class="duration">
              <p><span style="border-bottom: 1px solid black;">Durée: </span>{{ element.durée }}</p>
              <button @click="addToPlaylist(element)" title="Ajouter à votre liste de lecture">Ajouter</button>
            </div>
           </div>
            
        </div>
        </div>
      </div>
    </div>
  </div>
  </DashboardLayout>
 </template>

 <script lang="ts" setup>
 import DashboardLayout from "@/views/layout/DashboardContainerLayout.vue"
  import Logo from "../components/Logo.vue";
  import { useFilmStore } from "@/Stores/film";
  import { storeToRefs } from "pinia";
  import { ref, onMounted } from "vue";

  const { initialise } = useFilmStore();
  const { films } = storeToRefs(useFilmStore());
  const { addToPlaylist } = useFilmStore();

</script>

<style>
  .container_bottom {
  border-radius: 5px;
  margin: 10px;
  height: 540px;
  margin-top: -550px;
  }
  .film_container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  }
  .film {
  width: 250px;
  height: 265px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .film .top{
  height: 60%;
  width: 100%;
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
  height: 40%;
  padding: 5px 10px;
  }
  .film .bottom h2{
  white-space: inherit;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }
  .collection{
  display: flex;
  align-items: end;
  line-height: 30px;
  }
  .collection p{
  display: flex;
  }
  .duration{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .duration button{
    cursor: pointer;
    background: none;
    border: none;
    font-size:14px ;
    /* border: 1px solid black; */
    padding: 7px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.87);
    color: white;
  }
</style>