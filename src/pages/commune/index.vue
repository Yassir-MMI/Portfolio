<script setup lang="ts">
import { RouterLink } from "vue-router";
import { supabase } from "../../supabase";

// const { data, error } = await supabase.from('QuartierCommune').select(`
//   *
// `);
// const { data, error } = await supabase.from('Quartier').select(`
//   nom_quartier,
//   id,
//   Commune(id, nom_commune)
// `);

const { data, error } = await supabase.from('Quartier').select(`
  *,
  Commune(*)
`);

if (error) console.log("n'a pas pu charger la table commune_quartier :", error);
console.log(data);
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des communes</h3>
    <ul>
      <!-- <li v-for="(les_quartiers, nom_commune) in Object.groupBy(data, v=>v.nom_commune)"> -->
        <!-- {{ quartierObject.Commune.nom_commune }} -
        {{ quartierObject.nom_quartier }} -->
        <!-- <h4>{{ nom_commune }}</h4>
        <ul>
          <li v-for="quartierObject in les_quartiers" class="">
            {{ quartierObject.nom_quartier }}
          </li> -->
          <li v-for="quartier in data">
            {{ quartier?.nom_quartier }} -
           <ul>
            <li class="pl-3" v-for="Commune in (quartier.Commune)">
              <RouterLink class="text-blue-700" :to='{ name:"/commune/edit/[[id]]",params:{id:Commune.id}}'>
                {{ Commune.nom_commune }}
              </RouterLink>
            </li>
           </ul>
          </li>
        </ul>
  </section>
  
</template>