export interface Game {
  background_image: string;
  genres: Genre[];
  metacritic: number;
  name: string;
  parent_platforms: any[];
  released: Date;
}

export interface ApiResponse {
  next: string;
  previous: string;
  results: Game[];
}

export interface Genre {
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
}