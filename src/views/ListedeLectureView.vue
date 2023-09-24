<template>
    <DashboardLayout>
      <div class="listedelecture">
          
        
      </div>
    </DashboardLayout>
   </template>
  
   <script lang="ts" setup>
   import DashboardLayout from "@/views/layout/DashboardContainerLayout.vue"
    import Logo from "../components/Logo.vue";
    import { useFilmStore } from "@/Stores/film";
    import { storeToRefs } from "pinia";
    import { ref, onMounted } from "vue";
    const {addToPlaylist}= useFilmStore()
    const {playlist}= storeToRefs(useFilmStore())
    import{supabase} from "@/lib/supabase"
/* 
onMounted(
  ()=>{addToPlaylist()}
) */
  </script>
  
  <style>
    .listedelecture{
      margin-top: -550px;
    }
  </style>