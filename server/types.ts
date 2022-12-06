export type PaginatedResult<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};

export type MovieDiscover = {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overiew: string;
  release_date: string;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};
