import Media from "../Media";

export default class CD extends Media {
  constructor(
    artist = "",
    title,
    duration = 0,
    numberOfTracks = 0,
    songs = []
  ) {
    super([], title);
    this._artist = artist;
    this._duration = duration;
    this._numberOfTracks = numberOfTracks;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get duration() {
    return this._duration;
  }

  get numberOfTracks() {
    return this._numberOfTracks;
  }

  get songs() {
    return this._songs;
  }

  shuffle(songs) {
    // songs.sort(() => Math.random() - 0.5);
    //? Pretty for small array
    // Fisher-Yates blend
    //? Better for bigger array
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }
}
