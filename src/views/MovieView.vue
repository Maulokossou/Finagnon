<template>
    <DashboardLayout>
      <div>
        <div class="container_bottom">
        <div class="contain">
          <div class="film_container">
            <div class="film" v-for="element in filmsFiltres">
              <div class="top">
                <a :href="element.url"><img :src="element.Image" alt=""></a>
              </div>
             <div class="bottom">
              <h2>{{ element.titre }}</h2>
              <div class="collection">
                <p>{{ element.genre }}_</p>
                <p>{{ element.annee }}</p>
              </div>
              <p><span style="border-bottom: 1px solid black;">Durée: </span>{{ element.durée }}</p>
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
    import { supabase } from "@/lib/supabase";
  
    const { initialise } = useFilmStore();
    const { films } = storeToRefs(useFilmStore());
    
    const genreFiltre = "Film";
    const filmsFiltres = films.value.filter(film => film.genre === "Film");
    onMounted(async () => {
    await initialise();
    });
 
  </script>
  
  <style>
</style>