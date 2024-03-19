import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// @ts-ignore
globalThis.supabase = supabase

export const user = ref(null);
async function fetchUser() {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user ?? null;
  });
}

// Invoquer fetchUser directement pour initialiser l'état de l'utilisateur
fetchUser();