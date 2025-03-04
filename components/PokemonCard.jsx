import Link from 'next/link';
import Image from 'next/image';

export default function PokemonCard({ pokemon }) {
  return (
    <Link 
      href={`/pokemon/${pokemon.name}`}
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="pt-4">
          {pokemon.image ? (
            <div className="relative w-32 h-32 mx-auto mb-2">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          ) : (
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
          
          <div className='bg-[#fafafa] p-4'>
            <h2 className="text-lg font-semibold capitalize mb-2">
              {pokemon.name}
            </h2>

            <p className='mt-14 mb-2 text-[#356885] font-medium text-[14px]'>Details &rarr;</p>
          </div>

        </div>
      </div>
    </Link>
  );
}