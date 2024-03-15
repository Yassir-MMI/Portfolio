const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaOffreMaison {
id?: string;
nomMaison: string;
prix: number;
favori: boolean;
image: string;
nbrChambres: number;
nbrSDB: number;
adresse: string;
surface: string;
}