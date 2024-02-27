import { Routes } from '@angular/router';
import { AllGamesComponent } from './components/pages/all-games/all-games.component';
import { YearTopComponent } from './components/pages/year-top/year-top.component';
import { PlatformsComponent } from './components/pages/platforms/platforms.component';
import { GenresComponent } from './components/pages/genres/genres.component';
import { SearchComponent } from './components/pages/search/search.component';
import { CartComponent } from './components/pages/cart/cart.component';

export const routes: Routes = [
    {path: '', redirectTo: 'allgames', pathMatch: 'full'},
   {path: 'allgames', component: AllGamesComponent},
   {path: 'search', component: SearchComponent},
   {path: 'yeartop', component: YearTopComponent},
   {path: 'platforms', component: PlatformsComponent},
   {path: 'genres', component: GenresComponent},
   {path: 'cart', component: CartComponent}
];
