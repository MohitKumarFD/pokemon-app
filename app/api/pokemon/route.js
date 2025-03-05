// import React from 'react';
import { fetchAllPokemon, fetchPokemonByType } from '@/lib/pokemonData';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  
  try {
    let pokemonData;
    
    if (type) {
      pokemonData = await fetchPokemonByType(type);
    } else {
      pokemonData = await fetchAllPokemon(100);
    }
    
    return NextResponse.json(pokemonData);
  } catch (error) {
    console.error('Error in Pokemon API route:', error);
    return NextResponse.json({ error: 'Failed to fetch Pokemon data' }, { status: 500 });
  }
}