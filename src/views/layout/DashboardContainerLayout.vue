<template>
      <div class="dashboard_content">
          <div class="dashboard_content_left">
             <SideBar/>
          </div>
          <div class="dashboard_content_right">
            <NavBar/>
            <slot></slot>
          </div>
      </div>

  </template>
  <script lang="ts" setup>
  import SideBar from '@/components/SideBar.vue'
  import NavBar from '@/components/NavBar.vue'
  import { storeToRefs } from "pinia";
  import { ref, onMounted } from "vue";
  
/*   const { initialise } = useFilmStore();
  const { films } = storeToRefs(useFilmStore());
  
  onMounted(async () => {
    await initialise();
  }); */
   
  </script>

  <style scoped>
  .dashboard_content{
    display: flex;
  }
  </style>
  