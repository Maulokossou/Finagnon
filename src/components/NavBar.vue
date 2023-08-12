<template>
    <div>
    <div class="container">
      <div class="container_top">
        <div class="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div class="search">
          <div class="right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Rechercher..." />
          </div>
          <div class="left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mic"
            >
              <path
                d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
              ></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
        </div>
        <div class="deconnexion">
          <button><router-link to="/">SE DECONNECTER</router-link></button>
        </div>
      </div>
    </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.container {
  width: 1055px;
  /* border: 1px solid black; */
  height: 640px;
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
</style>