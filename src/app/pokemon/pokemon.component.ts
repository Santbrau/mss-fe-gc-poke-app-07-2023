import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = []; // Lista de Pokémon obtenida de la API
  randomPokemon: any[] = []; // Pokémon seleccionados al azar para mostrar en la vista
  selectedPokemon: any | null = null; // Pokémon seleccionado actualmente
  searchTerm: string = ''; // Término de búsqueda para filtrar la lista de Pokémon

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // Obtener la lista de Pokémon al iniciar el componente
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
      this.getRandomPokemon();
    });
  }

  getRandomPokemon(): void {
    // Filtrar la lista de Pokémon según el término de búsqueda
    const filteredPokemon = this.pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()));

    const randomIndices: number[] = [];
    // Obtener 12 Pokémon al azar de la lista filtrada
    while (randomIndices.length < 12 && randomIndices.length < filteredPokemon.length) {
      const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Generar la lista de Pokémon aleatorios con su información
    this.randomPokemon = randomIndices.map(index => {
      const pokemon = filteredPokemon[index];
      return {
        name: pokemon.name,
        pokedexNumber: this.getPokemonNumber(pokemon.url),
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonNumber(pokemon.url)}.png`,
        url: pokemon.url
      };
    });
  }

  getPokemonNumber(url: string): string {
    // Obtener el número de la Pokédex a partir de la URL del Pokémon
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  getPokemonTypes(pokemonId: number): Observable<string> {
    // Obtener los tipos de un Pokémon a través de su ID usando la API
    return this.pokemonService.getPokemonTypes(pokemonId).pipe(
      map((response: any) => {
        const types = response.types.map((type: any) => type.type.name);
        return types.join(', ');
      })
    );
  }

  showPokemonDetails(pokemon: any): void {
    // Mostrar los detalles de un Pokémon seleccionado
    this.selectedPokemon = {
      name: pokemon.name,
      pokedexNumber: this.getPokemonNumber(pokemon.url),
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonNumber(pokemon.url)}.png`,
      url: pokemon.url
    };
  }

  closePokemonDetails(): void {
    // Cerrar la vista de detalles de Pokémon
    this.selectedPokemon = null;
  }
}
