import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  @Input() selectedPokemon: any | null = null;
  @Output() closeDetails = new EventEmitter<void>();

  getPokemonNumber(url: string | undefined): string {
    if (url) {
      const parts = url.split('/');
      return parts[parts.length - 2];
    }
    return '';
  }

  getPokemonTypes(url: string | undefined): string {
    return 'Type 1, Type 2'; 
  }

  onClose(): void {
    this.closeDetails.emit();
  }
}
