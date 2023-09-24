import { defineStore } from "pinia";
import type { Film } from "@/Types/film";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";


export const useFilmStore= defineStore ('film',()=>{
    const films = ref<Film[]>([])
    const playlist = ref<Film[]>([]);
    const nowUser= ref();

    async function initialise() {
       const{data, error}= await supabase.from ('Film').select('*')

       if (data) {
            films.value= data;
       }
    }

    async function initialiseUser(){
        const {data}=await supabase.auth.getSession()
        if(data.session){
            nowUser.value=data.session?.user
        }
    }

    async function addToPlaylist(film: Film) {
        try {
          // Remplacez 'userId' par l'ID de l'utilisateur connecté
          const userId = 'votre_id_utilisateur'; // Vous devrez obtenir l'ID de l'utilisateur connecté depuis votre système d'authentification
    
          // Envoie une requête à Supabase pour ajouter le film à la liste de lecture de l'utilisateur
          const { data, error } = await supabase
            .from("playlist_items")
            .insert([{ user_id: userId, film_id: film.id }]);
    
          if (error) {
            console.error("Erreur lors de l'ajout à la liste de lecture", error);
          } else {
            console.log("Film ajouté à la liste de lecture avec succès", data);
            // Mettez à jour l'interface utilisateur pour refléter l'ajout du film à la liste de lecture
            playlist.value.push(film); // Ajoutez le film à la liste de lecture locale
          }
        } catch (error) {
          console.error("Erreur lors de l'ajout à la liste de lecture", error);
        }
      }
    
      return { films, playlist,nowUser, initialise, addToPlaylist, initialiseUser };
})
