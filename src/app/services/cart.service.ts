import { Injectable, signal } from '@angular/core';
import { Game } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Game[]>([]);

  addToCart(game: Game){
    this.cart.update(games => [...games, game]);
  }

  constructor() { }
}
