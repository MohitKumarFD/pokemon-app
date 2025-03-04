import HomeComponent from "@/components/HomeComponent";
import { fetchAllPokemon, fetchPokemonTypes } from "@/lib/pokemonData";

export default async function Home() {
  const initialPokemon = await fetchAllPokemon(100);
  const pokemonTypes = await fetchPokemonTypes();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-left">Pokemon Search</h1>
      <HomeComponent intialData={initialPokemon} intialTypeData={pokemonTypes}/>
    </div>
  );
}
