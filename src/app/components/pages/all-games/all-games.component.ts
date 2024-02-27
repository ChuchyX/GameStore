import { Component, inject } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { GamesService } from '../../../services/games.service';
import { Game } from '../../../models/models';
import { GameCardComponent } from '../../game-card/game-card.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-all-games',
  standalone: true,
  imports: [ButtonModule, GameCardComponent],
  templateUrl: './all-games.component.html',
  styleUrl: './all-games.component.scss'
})
export class AllGamesComponent {
  private gamesService = inject(GamesService);
  cartService = inject(CartService);

  next= '';
  previous = '';
  games: Game[] = [];
  
  getAllGames()
  {
    this.gamesService.getAllGames().subscribe(resp => {
      console.log(resp);
      this.next = resp.next;
      this.previous = resp.previous;
      this.games = resp.results;
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

  addToCart(game:Game)
  {
    this.cartService.addToCart(game);
  }
}
