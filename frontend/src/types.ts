export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface NewSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface UpdatedSong {
  id: string;
  title?: string;
  artist?: string;
  album?: string;
  genre?: string;
}

export interface Statistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: { [genre: string]: number };
  songsByArtist: { [artist: string]: number };
  albumsByArtist: { [artist: string]: number };
  songsByAlbum: { [album: string]: number };
}
