import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Game } from '../../models/models';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CardModule,ButtonModule, DatePipe],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
 @Input() game: Game =  { background_image: '', genres: [], metacritic: 0, name: '', parent_platforms: [], released: new Date};

 @Output() addToCart = new EventEmitter<Game>();
}
