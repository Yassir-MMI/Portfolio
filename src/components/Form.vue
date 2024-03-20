<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const Film = ref ({});
const route = useRoute('/maisons/edit/[[id]]');

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Film").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/maisons/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Film").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else Film.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheFilm v-bind="Film" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertFilm" type="form" v-model="Film"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_film" label="nom du Film" />
                <FormKit name="description_film" label="adresse" />
                <FormKit name="annee_film" type="number" label="prix" />
                <FormKit name="note" type="checkbox" label="mettre en valeur" />
                <FormKit name="img_film" label="image" />
            </FormKit>
        </div>
    </div>
</template>