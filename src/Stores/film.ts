import { defineStore } from "pinia";
import type { Film } from "@/Types/film";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";


export const useFilmStore= defineStore ('film',()=>{
    const films = ref<Film[]>([])

    async function initialise() {
       const{data, error}= await supabase.from ('Film').select('*')

       if (data) {
            films.value= data;
       }
    }
   /*  async function addFilm(film:Film) {
        const {data, error}= await supabase.from ('Films').insert(film).select('*')
        if (data) {
            films.value.push(data[0])
        }
    } */
    return{films, /* addFilm */ initialise}
})