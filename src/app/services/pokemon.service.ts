import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface IPokemons {
  name: string;
}
interface IPokemonsResponseApi {
  results: Array<IPokemons>;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<IPokemonsResponseApi>('https://pokeapi.co/api/v2/pokemon/');
  }
}
