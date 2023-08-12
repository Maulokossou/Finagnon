<template>
  <div class="dashboard">

    <div class="dashboard_right">
      <SideBar/>
    </div>
    <div class="dasboard_left">
      <NavBar/> 
      <NavBarContain/>       
    </div>

  </div>
</template>
<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import NavBarContain from '@/components/NavBarContain.vue'
 
</script>
<style>
.dashboard{
  display: flex;
  height: 632px;
  width: 1000px;
}
</style>
