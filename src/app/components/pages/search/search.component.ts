import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { Game } from '../../../models/models';
import { GamesService } from '../../../services/games.service';
import { GameCardComponent } from '../../game-card/game-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, GameCardComponent, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent{

  private gamesService = inject(GamesService);
  next= '';
  previous = '';
  games: Game[] = [];

  value = '';

  search()
  {
    this.gamesService.getGamesSearch(this.value).subscribe(resp => {
      this.games = resp.results;
      this.next = resp.next;
      this.previous = resp.previous;
    });
  }
  getGames(query: string)
  {
    this.gamesService.getGames(query).subscribe(resp => {
      this.next = resp.next;
      this.previous = resp.previous;
      this.games = resp.results;
    });
  }


}
