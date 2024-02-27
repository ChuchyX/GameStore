import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiKey: string = '?key=33a8bdd88ca4402da9da595641a0669b';
  private API: string = 'https://api.rawg.io/api/games';
  private search = '&search='
  private http = inject(HttpClient);
  constructor() {}

  public getAllGames() : Observable<ApiResponse>
  {
    return this.http.get<any>(this.API + this.apiKey).pipe(
      map(response => ({
        next: response.next,
        previous: response.previous,
        results: response.results.map((game:any)=>({
          background_image: game.background_image,
          genres: game.genres,
          metacritic: game.metacritic,
          name: game.name,
          parent_platforms: game.parent_platforms,
          released: new Date(game.released),
        }))
      }))
    );
  }

  public getGames(query: string) : Observable<ApiResponse>
  {
    return this.http.get<any>(query).pipe(
      map(response => ({
        next: response.next,
        previous: response.previous,
        results: response.results.map((game:any)=>({
          background_image: game.background_image,
          genres: game.genres,
          metacritic: game.metacritic,
          name: game.name,
          parent_platforms: game.parent_platforms,
          released: new Date(game.released),
        }))
      }))
    );
  }

  public getGamesSearch(query: string) : Observable<ApiResponse>
  {
    return this.http.get<any>(this.API + this.apiKey + this.search + query).pipe(
      map(response => ({
        next: response.next,
        previous: response.previous,
        results: response.results.map((game:any)=>({
          background_image: game.background_image,
          genres: game.genres,
          metacritic: game.metacritic,
          name: game.name,
          parent_platforms: game.parent_platforms,
          released: new Date(game.released),
        }))
      }))
    );
  }



  
}
