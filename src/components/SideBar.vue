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
              <FilmIcon></FilmIcon>
              <h3>Films</h3>
            </router-link>
        </div>

        <div class="cartoons">
          <router-link to="/dashboard/cartoons">
              <DessinIcon></DessinIcon>
              <h3>Dessins-animés</h3>
          </router-link>
        </div>

        <div class="series">
          <router-link to="/dashboard/serie"> 
            <SerieIcon></SerieIcon>
            <h3>Series</h3>
          </router-link>
        </div>

        <div class="documentary">
            <router-link to="/dashboard/documentary">
              <DocumentaryIcon></DocumentaryIcon>
              <h3>Documentaires</h3>
            </router-link>
        </div>

        <div class="reality_show">
            <router-link to="/dashboard/documentary">
              <RealityIcon></RealityIcon>
              <h3>Téléréalités</h3>
            </router-link>
        </div>
      </div>

      <div class="side-bar_bottom">
        <router-link to="/dashboard/listedelecture">
          <ListeIcon></ListeIcon>
          <h3>Liste de lecture</h3>
      </router-link>
      </div>
    </div>
    </div>
</template>
<script lang="ts" setup>
    import Logo from "../components/Logo.vue";
    import DocumentaryIcon from "../components/DocumentaryIcon.vue";
    import SerieIcon from "../components/SerieIcon.vue";
    import RealityIcon from "../components/RealityIcon.vue";
    import DessinIcon from "../components/DessinIcon.vue";
    import FilmIcon from "../components/FilmIcon.vue";
    import ListeIcon from "../components/ListeIcon.vue";
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
  width: 100%;
}
.side-bar_mid {
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
  color: #ecb431da;
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 18px 25px;
  cursor: pointer;
}
.side-bar_bottom a{
  color: #ecb431da;
  display: flex;
  align-items: center;
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
.router-link-active{
  display: flex;
}
</style>
