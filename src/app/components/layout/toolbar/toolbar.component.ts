import { Component, EventEmitter, Output, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../../../services/cart.service';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  cartService = inject(CartService);

  cart = this.cartService.cart;
  @Output() toggleSidenav = new EventEmitter<void>();
}
