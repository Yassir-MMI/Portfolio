<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheMaison from "@/components/AfficheMaison.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const maison = ref ({});
const route = useRoute('/maisons/edit/[[id]]');

async function upsertMaison(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/maisons/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Maison").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else maison.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheMaison v-bind="maison" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertMaison" type="form" v-model="maison"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nomProjet" label="nom de la maison" />
                <FormKit name="adresse" label="adresse" />
                <FormKit name="prix" type="number" label="prix" />
                <FormKit name="favori" type="checkbox" label="mettre en valeur" />
                <FormKit name="nbrChambres" type="number" label="nombre de chambres" />
                <FormKit name="nbrSDB" type="number" label="nombre de salle de bain" />
                <FormKit name="surface" label="surface" />
                <FormKit name="image" label="image" />
            </FormKit>
        </div>
    </div>
</template>