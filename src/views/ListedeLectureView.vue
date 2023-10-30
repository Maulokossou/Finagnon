<template>
    <DashboardLayout>
      <div class="listedelecture">
          
        
      </div>
    </DashboardLayout>
   </template>
  
   <script lang="ts" setup>
    import DashboardLayout from "@/views/layout/DashboardContainerLayout.vue"
    import Logo from "../components/Logo.vue";
    import { storeToRefs } from "pinia";
    import { ref, onMounted } from "vue";

  </script>
  
  <style>
    .listedelecture{
      margin-top: -550px;
    }
  </style>