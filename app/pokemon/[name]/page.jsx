import { fetchPokemonByName } from '@/lib/pokemonData';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';


export async function generateMetadata({ params }) {
  const { name } = await params;
  const pokemon = await fetchPokemonByName(name);
  
  if (!pokemon) {
    return {
      title: 'Pokemon Not Found',
    };
  }
  
  return {
    title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | Pokemon Search`,
    description: pokemon.description,
  };
}

export default async function PokemonDetailPage({ params }) {
  const { name } = await params;
  const pokemon = await fetchPokemonByName(name);

  const printArray = (arr) => {
    const newArray = arr;
    const joinedArray = newArray.join(', ');
    return joinedArray;
  }
  
  
  if (!pokemon) {
    return (
      <div className="text-center py-12">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Pokemon Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find any Pokémon with the name "{params.name}".</p>
        <Link 
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div>
        <div className="mb-6 text-left">
            <Link href="/" className="text-[#32ab93]">&lt; Back</Link>
        </div>
        <Breadcrumbs />
        <div className="">
            <div className="flex items-center justify-center">
                <div className='block max-w-2xl rounded-lg shadow-lg overflow-hidden'>
                    <div className="bg-[#60e2c9] p-6 flex justify-center items-center">
                        <div className="relative w-64 h-64">
                        {pokemon.image ? (
                            <Image
                            src={pokemon.image}
                            alt={pokemon.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            style={{ objectFit: 'contain' }}
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-400">No image</span>
                            </div>
                        )}
                        </div>
                    </div>
                    
                    <div className="px-6 py-10 bg-[#fdc666]">
                        <ul className='space-y-3'>
                            <li><h1 className="capitalize"><span className='font-bold'>Name: </span>{pokemon.name}</h1></li>
                            <li><p className="capitalize"><span className='font-bold'>Type: </span>{printArray(pokemon.types)}</p></li>
                            <li><p className="capitalize"><span className='font-bold'>Stats: </span>{printArray(pokemon.stats.map((stat) => (stat.name)))}</p></li>
                            <li><p className="capitalize"><span className='font-bold'>Abilities: </span>{printArray(pokemon.abilities)}</p></li>
                            <li><p className="capitalize"><span className='font-bold'>Some Moves: </span>{printArray(pokemon.moves)}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}