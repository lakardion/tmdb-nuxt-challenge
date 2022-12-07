export type PaginatedResult<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};

type MovieSharedFields = {
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  poster_path: string | null;
  id: number;
  adult: boolean;
  overview: string;
  release_date: string;
};

export type MovieDiscover = {
  gender_ids: number[];
} & MovieSharedFields;

export type Movie = MovieSharedFields & {
  adult: boolean;
  belongs_to_collection: object | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  imdb_id: string | null;
  productions_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: string | null;
};
type BackdropSizes = [300, 780, 1280];
type LogoSizes = [45, 92, 154, 185, 300, 500];
type PosterSizes = [92, 154, 185, 342, 500, 780];
type ProfileSizes = [45, 185, 300];
type StillSizes = [92, 185, 300];
export type ImageConfiguration = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: `w${BackdropSizes[number]}` & "original";
    logo_sizes: `w${LogoSizes[number]}` & "original";
    poster_sizes: `w${PosterSizes[number]}` & "original";
    profile_sizes: `w${ProfileSizes[number]}` & "original";
    still_sizes: `w${StillSizes[number]}` & "original";
  };
  change_keys: [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ];
};
