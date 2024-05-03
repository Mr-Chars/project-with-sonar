import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { firstValueFrom } from 'rxjs';
interface IPokemons {
  name: string;
}
interface IPokemonsResponseApi {
  results: Array<IPokemons>;
}
@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {
  pokemons: Array<IPokemons> = [];

  constructor(
    public readonly pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    const pokemonsResponse: IPokemonsResponseApi = await firstValueFrom(this.pokemonService.getPokemons());
    this.pokemons = pokemonsResponse?.results;
    console.log(this.pokemons);
  }
}
