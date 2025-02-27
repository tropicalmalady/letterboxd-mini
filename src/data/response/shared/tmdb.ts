export interface DiscoverOptions {
  page?: number;
  primary_release_year?: string;
  sort_by?: SortBy;
  with_Genres?: Genre;
  with_original_language?: Languages;
  with_companies?: number;
  with_watch_providers?: number;
}

export interface SearchOptions {
  page?: number;
  query: string;
}

export interface Movies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: BelongsToCollection;
  budget: number;
  homepage: string;
  id: number;
  recommendations: Movies;
  imdb_id: string;
  studios: Detailable[];
  countries: Detailable[];
  genres: Detailable[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  credits: Credits;
  alternative_titles: string[];
  similar: Movies;
  "watch/providers": WatchProviders;
}

export interface AlternativeTitles {
  titles: Title[];
}

export interface Title {
  iso_3166_1: string;
  title: string;
  type: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  page: number;
  results: ProductionCompany[];
  total_pages: number;
  total_results: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  results: Video[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: Date;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}

export interface WatchProviders {
  results: WatchProvider;
}

export interface WatchProvider {
  US: WatchOptions;
}

export interface WatchOptions {
  flatrate?: WatchOption[];
  buy?: WatchOption[];
  rent?: WatchOption[];
  free?: WatchOption[];
}

export interface WatchOption {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface PersonDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday?: Date;
  deathday?: Date;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  credits: Credits;
}

export interface People {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: KnownForDepartment;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  known_for: KnownFor[];
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: null | string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: null | string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum SortBy {
  releaseDateAscending = "release_date.asc",
  releaseDateDescending = "release_date.desc",
  titleAscending = "original_title.asc",
  titleDescending = "original_title.desc",
}

export enum TimeWindow {
  day = "day",
  week = "week",
}

export enum Search {
  movie = "movie",
  person = "person",
  company = "company",
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Lighting = "Lighting",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum KnownForDepartment {
  Acting = "Acting",
  Directing = "Directing",
  Editing = "Editing",
  Writing = "Writing",
}

export enum Languages {
  afrikaans = "af",
  albanian = "sq",
  amharic = "am",
  arabic = "ar",
  armenian = "hy",
  azerbaijani = "az",
  basque = "eu",
  belarusian = "be",
  bengali = "bn",
  bosnian = "bs",
  bulgarian = "bg",
  burmese = "my",
  catalan = "ca",
  chinese = "zh",
  croatian = "hr",
  czech = "cs",
  danish = "da",
  dutch = "nl",
  english = "en",
  estonian = "et",
  filipino = "fil",
  finnish = "fi",
  french = "fr",
  galician = "gl",
  georgian = "ka",
  german = "de",
  greek = "el",
  gujarati = "gu",
  hebrew = "he",
  hindi = "hi",
  hungarian = "hu",
  icelandic = "is",
  igbo = "ig",
  indonesian = "id",
  irish = "ga",
  italian = "it",
  japanese = "ja",
  kannada = "kn",
  kazakh = "kk",
  khmer = "km",
  korean = "ko",
  kurdish = "ku",
  kyrgyz = "ky",
  lao = "lo",
  latvian = "lv",
  lithuanian = "lt",
  luxembourgish = "lb",
  macedonian = "mk",
  malay = "ms",
  malayalam = "ml",
  maltese = "mt",
  marathi = "mr",
  mongolian = "mn",
  nepali = "ne",
  norwegian = "no",
  odia = "or",
  persian = "fa",
  polish = "pl",
  portuguese = "pt",
  punjabi = "pa",
  romanian = "ro",
  russian = "ru",
  serbian = "sr",
  sinhala = "si",
  slovak = "sk",
  slovenian = "sl",
  somali = "so",
  spanish = "es",
  swahili = "sw",
  swedish = "sv",
  tamil = "ta",
  telugu = "te",
  thai = "th",
  turkish = "tr",
  ukrainian = "uk",
  urdu = "ur",
  uzbek = "uz",
  vietnamese = "vi",
  welsh = "cy",
  xhosa = "xh",
  yiddish = "yi",
  yoruba = "yo",
  zulu = "zu",
}

export const WatchProviders: WatchOption[] = [
  {
    logo_path: "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
    provider_id: 2,
    provider_name: "Apple TV",
    display_priority: 4,
  },
  {
    logo_path: "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
    provider_id: 3,
    provider_name: "Google Play Movies",
    display_priority: 15,
  },
  {
    logo_path: "/21dEscfO8n1tL35k4DANixhffsR.jpg",
    provider_id: 7,
    provider_name: "Vudu",
    display_priority: 43,
  },
  {
    logo_path: "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
    provider_id: 8,
    provider_name: "Netflix",
    display_priority: 0,
  },
  {
    logo_path: "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
    provider_id: 10,
    provider_name: "Amazon Video",
    display_priority: 14,
  },
  {
    logo_path: "/bVR4Z1LCHY7gidXAJF5pMa4QrDS.jpg",
    provider_id: 11,
    provider_name: "MUBI",
    display_priority: 4,
  },
  {
    logo_path: "/zxrVdFjIjLqkfnwyghnfywTn3Lh.jpg",
    provider_id: 15,
    provider_name: "Hulu",
    display_priority: 6,
  },
  {
    logo_path: "/6A1gRIJqLfFHOoTvbTxDAbuU2nQ.jpg",
    provider_id: 34,
    provider_name: "MGM Plus",
    display_priority: 65,
  },
  {
    logo_path: "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
    provider_id: 68,
    provider_name: "Microsoft Store",
    display_priority: 54,
  },
  {
    logo_path: "/wbCleYwRFpUtWcNi7BLP3E1f6VI.jpg",
    provider_id: 191,
    provider_name: "Kanopy",
    display_priority: 52,
  },
  {
    logo_path: "/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg",
    provider_id: 192,
    provider_name: "YouTube",
    display_priority: 16,
  },
  {
    logo_path: "/jPXksae158ukMLFhhlNvzsvaEyt.jpg",
    provider_id: 257,
    provider_name: "fuboTV",
    display_priority: 5,
  },
  {
    logo_path: "/4TJTNWd2TT1kYj6ocUEsQc8WRgr.jpg",
    provider_id: 258,
    provider_name: "Criterion Channel",
    display_priority: 1,
  },
  {
    logo_path: "/gbyLHzl4eYP0oP9oJZ2oKbpkhND.jpg",
    provider_id: 279,
    provider_name: "Redbox",
    display_priority: 55,
  },
  {
    logo_path: "/kJlVJLgbNPvKDYC0YMp3yA2OKq2.jpg",
    provider_id: 352,
    provider_name: "AMC on Demand",
    display_priority: 137,
  },
  {
    logo_path: "/xL9SUR63qrEjFZAhtsipskeAMR7.jpg",
    provider_id: 358,
    provider_name: "DIRECTV",
    display_priority: 59,
  },
  {
    logo_path: "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg",
    provider_id: 384,
    provider_name: "HBO Max",
    display_priority: 30,
  },
  {
    logo_path: "/79mRAYq40lcYiXkQm6N7YErSSHd.jpg",
    provider_id: 486,
    provider_name: "Spectrum On Demand",
    display_priority: 171,
  },
  {
    logo_path: "/xbhHHa1YgtpwhC8lb1NQ3ACVcLd.jpg",
    provider_id: 531,
    provider_name: "Paramount Plus",
    display_priority: 17,
  },
];

export const Genres: Genre[] = [
  { name: "action", id: 28 },
  { name: "adventure", id: 12 },
  { name: "animation", id: 16 },
  { name: "comedy", id: 35 },
  { name: "crime", id: 80 },
  { name: "documentary", id: 99 },
  { name: "drama", id: 18 },
  { name: "family", id: 10751 },
  { name: "fantasy", id: 14 },
  { name: "history", id: 36 },
  { name: "horror", id: 27 },
  { name: "music", id: 10402 },
  { name: "mystery", id: 9648 },
  { name: "romance", id: 10749 },
  { name: "science_fiction", id: 878 },
  { name: "thriller", id: 53 },
  { name: "war", id: 10752 },
  { name: "western", id: 37 },
  { name: "TV Movie", id: 10770 },
];

export const Countries = [
  { iso_3166_1: "AF", name: "Afghanistan" },
  { iso_3166_1: "AL", name: "Albania" },
  { iso_3166_1: "DZ", name: "Algeria" },
  { iso_3166_1: "AD", name: "Andorra" },
  { iso_3166_1: "AO", name: "Angola" },
  { iso_3166_1: "AI", name: "Anguilla" },
  { iso_3166_1: "AG", name: "Antigua and Barbuda" },
  { iso_3166_1: "AR", name: "Argentina" },
  { iso_3166_1: "AM", name: "Armenia" },
  { iso_3166_1: "AW", name: "Aruba" },
  { iso_3166_1: "AU", name: "Australia" },
  { iso_3166_1: "AT", name: "Austria" },
  { iso_3166_1: "AZ", name: "Azerbaijan" },
  { iso_3166_1: "BS", name: "Bahamas" },
  { iso_3166_1: "BH", name: "Bahrain" },
  { iso_3166_1: "BD", name: "Bangladesh" },
  { iso_3166_1: "BB", name: "Barbados" },
  { iso_3166_1: "BY", name: "Belarus" },
  { iso_3166_1: "BE", name: "Belgium" },
  { iso_3166_1: "BZ", name: "Belize" },
  { iso_3166_1: "BJ", name: "Benin" },
  { iso_3166_1: "BM", name: "Bermuda" },
  { iso_3166_1: "BT", name: "Bhutan" },
  { iso_3166_1: "BO", name: "Bolivia" },
  { iso_3166_1: "BA", name: "Bosnia and Herzegovina" },
  { iso_3166_1: "BW", name: "Botswana" },
  { iso_3166_1: "BR", name: "Brazil" },
  { iso_3166_1: "VG", name: "British Virgin Islands" },
  { iso_3166_1: "BN", name: "Brunei" },
  { iso_3166_1: "BG", name: "Bulgaria" },
  { iso_3166_1: "BF", name: "Burkina Faso" },
  { iso_3166_1: "BI", name: "Burundi" },
  { iso_3166_1: "KH", name: "Cambodia" },
  { iso_3166_1: "CM", name: "Cameroon" },
  { iso_3166_1: "CA", name: "Canada" },
  { iso_3166_1: "CV", name: "Cape Verde" },
  { iso_3166_1: "KY", name: "Cayman Islands" },
  { iso_3166_1: "CF", name: "Central African Republic" },
  { iso_3166_1: "TD", name: "Chad" },
  { iso_3166_1: "CL", name: "Chile" },
  { iso_3166_1: "CN", name: "China" },
  { iso_3166_1: "CO", name: "Colombia" },
  { iso_3166_1: "KM", name: "Comoros" },
  { iso_3166_1: "CG", name: "Congo (Brazzaville)" },
  { iso_3166_1: "CD", name: "Congo (Kinshasa)" },
  { iso_3166_1: "CR", name: "Costa Rica" },
  { iso_3166_1: "HR", name: "Croatia" },
  { iso_3166_1: "CU", name: "Cuba" },
  { iso_3166_1: "CY", name: "Cyprus" },
  { iso_3166_1: "CZ", name: "Czech Republic" },
  { iso_3166_1: "CI", name: "Côte d'Ivoire" },
  { iso_3166_1: "DK", name: "Denmark" },
  { iso_3166_1: "DJ", name: "Djibouti" },
  { iso_3166_1: "DM", name: "Dominica" },
  { iso_3166_1: "DO", name: "Dominican Republic" },
  { iso_3166_1: "EC", name: "Ecuador" },
  { iso_3166_1: "EG", name: "Egypt" },
  { iso_3166_1: "SV", name: "El Salvador" },
  { iso_3166_1: "GQ", name: "Equatorial Guinea" },
  { iso_3166_1: "ER", name: "Eritrea" },
  { iso_3166_1: "EE", name: "Estonia" },
  { iso_3166_1: "ET", name: "Ethiopia" },
  { iso_3166_1: "FK", name: "Falkland Islands" },
  { iso_3166_1: "FO", name: "Faroe Islands" },
  { iso_3166_1: "FJ", name: "Fiji" },
  { iso_3166_1: "FI", name: "Finland" },
  { iso_3166_1: "FR", name: "France" },
  { iso_3166_1: "GF", name: "French Guiana" },
  { iso_3166_1: "PF", name: "French Polynesia" },
  { iso_3166_1: "TF", name: "French Southern Territories" },
  { iso_3166_1: "GA", name: "Gabon" },
  { iso_3166_1: "GM", name: "Gambia" },
  { iso_3166_1: "GE", name: "Georgia" },
  { iso_3166_1: "DE", name: "Germany" },
  { iso_3166_1: "GH", name: "Ghana" },
  { iso_3166_1: "GI", name: "Gibraltar" },
  { iso_3166_1: "GR", name: "Greece" },
  { iso_3166_1: "GL", name: "Greenland" },
  { iso_3166_1: "GD", name: "Grenada" },
  { iso_3166_1: "GP", name: "Guadeloupe" },
  { iso_3166_1: "GT", name: "Guatemala" },
  { iso_3166_1: "GG", name: "Guernsey" },
  { iso_3166_1: "GN", name: "Guinea" },
  { iso_3166_1: "GW", name: "Guinea-Bissau" },
  { iso_3166_1: "GY", name: "Guyana" },
  { iso_3166_1: "HT", name: "Haiti" },
  { iso_3166_1: "HN", name: "Honduras" },
  { iso_3166_1: "HK", name: "Hong Kong" },
  { iso_3166_1: "HU", name: "Hungary" },
  { iso_3166_1: "IS", name: "Iceland" },
  { iso_3166_1: "IN", name: "India" },
  { iso_3166_1: "ID", name: "Indonesia" },
  { iso_3166_1: "IR", name: "Iran" },
  { iso_3166_1: "IQ", name: "Iraq" },
  { iso_3166_1: "IE", name: "Ireland" },
  { iso_3166_1: "IM", name: "Isle of Man" },
  { iso_3166_1: "IL", name: "Israel" },
  { iso_3166_1: "IT", name: "Italy" },
  { iso_3166_1: "JM", name: "Jamaica" },
  { iso_3166_1: "JP", name: "Japan" },
  { iso_3166_1: "JE", name: "Jersey" },
  { iso_3166_1: "JO", name: "Jordan" },
  { iso_3166_1: "KZ", name: "Kazakhstan" },
  { iso_3166_1: "KE", name: "Kenya" },
  { iso_3166_1: "KI", name: "Kiribati" },
  { iso_3166_1: "KW", name: "Kuwait" },
  { iso_3166_1: "KG", name: "Kyrgyzstan" },
  { iso_3166_1: "LA", name: "Laos" },
  { iso_3166_1: "LV", name: "Latvia" },
  { iso_3166_1: "LB", name: "Lebanon" },
  { iso_3166_1: "LS", name: "Lesotho" },
  { iso_3166_1: "LR", name: "Liberia" },
  { iso_3166_1: "LY", name: "Libya" },
  { iso_3166_1: "LI", name: "Liechtenstein" },
  { iso_3166_1: "LT", name: "Lithuania" },
  { iso_3166_1: "LU", name: "Luxembourg" },
  { iso_3166_1: "MO", name: "Macau" },
  { iso_3166_1: "MK", name: "Macedonia" },
  { iso_3166_1: "MG", name: "Madagascar" },
  { iso_3166_1: "MW", name: "Malawi" },
  { iso_3166_1: "MY", name: "Malaysia" },
  { iso_3166_1: "MV", name: "Maldives" },
  { iso_3166_1: "ML", name: "Mali" },
  { iso_3166_1: "MT", name: "Malta" },
  { iso_3166_1: "MH", name: "Marshall Islands" },
  { iso_3166_1: "MQ", name: "Martinique" },
  { iso_3166_1: "MR", name: "Mauritania" },
  { iso_3166_1: "MU", name: "Mauritius" },
  { iso_3166_1: "YT", name: "Mayotte" },
  { iso_3166_1: "MX", name: "Mexico" },
  { iso_3166_1: "FM", name: "Micronesia" },
  { iso_3166_1: "MD", name: "Moldova" },
  { iso_3166_1: "MC", name: "Monaco" },
  { iso_3166_1: "MN", name: "Mongolia" },
  { iso_3166_1: "ME", name: "Montenegro" },
  { iso_3166_1: "MS", name: "Montserrat" },
  { iso_3166_1: "MA", name: "Morocco" },
  { iso_3166_1: "MZ", name: "Mozambique" },
  { iso_3166_1: "MM", name: "Myanmar" },
  { iso_3166_1: "NA", name: "Namibia" },
  { iso_3166_1: "NR", name: "Nauru" },
  { iso_3166_1: "NP", name: "Nepal" },
  { iso_3166_1: "NL", name: "Netherlands" },
  { iso_3166_1: "AN", name: "Netherlands Antilles" },
  { iso_3166_1: "NC", name: "New Caledonia" },
  { iso_3166_1: "NZ", name: "New Zealand" },
  { iso_3166_1: "NI", name: "Nicaragua" },
  { iso_3166_1: "NE", name: "Niger" },
  { iso_3166_1: "NG", name: "Nigeria" },
  { iso_3166_1: "NU", name: "Niue" },
  { iso_3166_1: "NF", name: "Norfolk Island" },
  { iso_3166_1: "KP", name: "North Korea" },
  { iso_3166_1: "NO", name: "Norway" },
  { iso_3166_1: "OM", name: "Oman" },
  { iso_3166_1: "PK", name: "Pakistan" },
  { iso_3166_1: "PS", name: "Palestinian Territory" },
  { iso_3166_1: "PA", name: "Panama" },
  { iso_3166_1: "PG", name: "Papua New Guinea" },
  { iso_3166_1: "PY", name: "Paraguay" },
  { iso_3166_1: "PE", name: "Peru" },
  { iso_3166_1: "PH", name: "Philippines" },
  { iso_3166_1: "PN", name: "Pitcairn" },
  { iso_3166_1: "PL", name: "Poland" },
  { iso_3166_1: "PT", name: "Portugal" },
  { iso_3166_1: "QA", name: "Qatar" },
  { iso_3166_1: "RO", name: "Romania" },
  { iso_3166_1: "RU", name: "Russia" },
  { iso_3166_1: "RW", name: "Rwanda" },
  { iso_3166_1: "RE", name: "Réunion" },
  { iso_3166_1: "BL", name: "Saint Barthélemy" },
  { iso_3166_1: "SH", name: "Saint Helena" },
  { iso_3166_1: "KN", name: "Saint Kitts and Nevis" },
  { iso_3166_1: "LC", name: "Saint Lucia" },
  { iso_3166_1: "MF", name: "Saint Martin (French part)" },
  { iso_3166_1: "PM", name: "Saint Pierre and Miquelon" },
  { iso_3166_1: "VC", name: "Saint Vincent and the Grenadines" },
  { iso_3166_1: "WS", name: "Samoa" },
  { iso_3166_1: "SM", name: "San Marino" },
  { iso_3166_1: "ST", name: "São Tomé and Príncipe" },
  { iso_3166_1: "SA", name: "Saudi Arabia" },
  { iso_3166_1: "SN", name: "Senegal" },
  { iso_3166_1: "RS", name: "Serbia" },
  { iso_3166_1: "SC", name: "Seychelles" },
  { iso_3166_1: "SL", name: "Sierra Leone" },
  { iso_3166_1: "SG", name: "Singapore" },
  { iso_3166_1: "SK", name: "Slovakia" },
  { iso_3166_1: "SI", name: "Slovenia" },
  { iso_3166_1: "SB", name: "Solomon Islands" },
  { iso_3166_1: "SO", name: "Somalia" },
  { iso_3166_1: "ZA", name: "South Africa" },
  { iso_3166_1: "GS", name: "South Georgia/Sandwich Islands" },
  { iso_3166_1: "KR", name: "South Korea" },
  { iso_3166_1: "SS", name: "South Sudan" },
  { iso_3166_1: "ES", name: "Spain" },
  { iso_3166_1: "LK", name: "Sri Lanka" },
  { iso_3166_1: "SD", name: "Sudan" },
  { iso_3166_1: "SR", name: "Suriname" },
  { iso_3166_1: "SJ", name: "Svalbard and Jan Mayen" },
  { iso_3166_1: "SZ", name: "Swaziland" },
  { iso_3166_1: "SE", name: "Sweden" },
  { iso_3166_1: "CH", name: "Switzerland" },
  { iso_3166_1: "SY", name: "Syria" },
  { iso_3166_1: "TW", name: "Taiwan" },
  { iso_3166_1: "TJ", name: "Tajikistan" },
  { iso_3166_1: "TZ", name: "Tanzania" },
  { iso_3166_1: "TH", name: "Thailand" },
  { iso_3166_1: "TL", name: "Timor-Leste" },
  { iso_3166_1: "TG", name: "Togo" },
  { iso_3166_1: "TK", name: "Tokelau" },
  { iso_3166_1: "TO", name: "Tonga" },
  { iso_3166_1: "TT", name: "Trinidad and Tobago" },
  { iso_3166_1: "TN", name: "Tunisia" },
  { iso_3166_1: "TR", name: "Turkey" },
  { iso_3166_1: "TM", name: "Turkmenistan" },
  { iso_3166_1: "TC", name: "Turks and Caicos Islands" },
  { iso_3166_1: "TV", name: "Tuvalu" },
  { iso_3166_1: "UG", name: "Uganda" },
  { iso_3166_1: "UA", name: "Ukraine" },
  { iso_3166_1: "AE", name: "United Arab Emirates" },
  { iso_3166_1: "GB", name: "United Kingdom" },
  { iso_3166_1: "US", name: "United States" },
  { iso_3166_1: "UY", name: "Uruguay" },
  { iso_3166_1: "UZ", name: "Uzbekistan" },
  { iso_3166_1: "VU", name: "Vanuatu" },
  { iso_3166_1: "VA", name: "Vatican" },
  { iso_3166_1: "VE", name: "Venezuela" },
  { iso_3166_1: "VN", name: "Vietnam" },
  { iso_3166_1: "WF", name: "Wallis and Futuna" },
  { iso_3166_1: "EH", name: "Western Sahara" },
  { iso_3166_1: "YE", name: "Yemen" },
  { iso_3166_1: "ZM", name: "Zambia" },
  { iso_3166_1: "ZW", name: "Zimbabwe" },
];

export interface Detailable {
  name: string;
  id: number;
}
