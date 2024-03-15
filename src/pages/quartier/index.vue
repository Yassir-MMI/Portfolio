<script setup lang="ts">
import { supabase } from "../../supabase";
const { data, error } = await supabase.from("quartier_commune").select("*");
if (error) console.log("n'a pas pu charger la table quartier_commune :", error);
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.libelle_Commune }} -
        {{ quartierObject.libelle_Quartier }}
      </li>
    </ul>
  </section>
</template>