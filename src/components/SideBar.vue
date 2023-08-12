<template>
    <div>
        <div class="side-bar">
      <div class="side-bar_top">
        <Logo />
      </div>
      <div class="side-bar_mid">
        <h2>Home</h2>
        <div class="movies">
          <router-link to="/dashboard/films">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #ecb431da; transform: ; msfilter: "
            >
              <path
                d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"
              ></path>
            </svg>
            <h3>Films</h3>
          </router-link>
        </div>
        <div class="cartoons">
         <router-link to="/dashboard/cartoons">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #ecb431da; transform: ; msfilter: "
          >
            <circle cx="12" cy="6" r="2"></circle>
            <path
              d="M14 9h-4a1 1 0 0 0-.8.4l-3 4 1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6 1.6-1.2-3-4A1 1 0 0 0 14 9z"
            ></path>
          </svg>
          <h3>Dessins-animés</h3>
         </router-link>
        </div>
        <div class="series">
         <router-link to="/dashboard/serie"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-film"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <h3>Series</h3>
        </router-link>
        </div>
        <div class="documentary">
          <router-link to="/dashboard/documentary">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #ecb431da; transform: ; msfilter: "
          >
            <path
              d="M5 5v14a1 1 0 0 0 1 1h3v-2H7V6h2V4H6a1 1 0 0 0-1 1zm14.242-.97-8-2A1 1 0 0 0 10 3v18a.998.998 0 0 0 1.242.97l8-2A1 1 0 0 0 20 19V5a1 1 0 0 0-.758-.97zM15 12.188a1.001 1.001 0 0 1-2 0v-.377a1 1 0 1 1 2 .001v.376z"
            ></path>
          </svg>
          <h3>Documentaires</h3>
          </router-link>
        </div>
        <div class="reality_show">
          <router-link to="/dashboard/documentary">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-tv"
          >
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
          <h3>Téléréalités</h3>
          </router-link>
        </div>
      </div>
      <div class="side-bar_bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path>
        </svg>
        <h3>Paramètres</h3>
      </div>
    </div>
    </div>
</template>
<script lang="ts" setup>
    import Logo from "../components/Logo.vue";
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
.dashboard {
  /* width: 100%; */
  height: 632px;
  display: flex;
}
.side-bar {
  width: 200px;
  background-color: black;
  height: 695px;
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
.cartoons a {
  display: flex;
  align-items: center;
  color: #ecb431da;
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
.series a {
  display: flex;
  align-items: center;
  color: #ecb431da;
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
.documentary a {
  display: flex;
  align-items: center;
  color: #ecb431da;
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
.reality_show a {
  display: flex;
  align-items: center;
  color: #ecb431da;
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
</style>
