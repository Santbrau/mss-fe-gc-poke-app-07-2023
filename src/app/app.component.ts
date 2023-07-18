import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mss-fe-gc-poke-app-07-2023';

  selectedPokemon: any | null = null;

  closePokemonDetails(): void {
    this.selectedPokemon = null;
  }
}
