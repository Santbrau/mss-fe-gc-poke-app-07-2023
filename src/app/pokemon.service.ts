import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    const url = this.apiUrl + 'pokemon-species?offset=20&limit=1000';
    return this.http.get<any>(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonTypes(pokemonId: number): Observable<any> {
    const url = `${this.apiUrl}pokemon/${pokemonId}`;
    return this.http.get<any>(url);
  }
}
