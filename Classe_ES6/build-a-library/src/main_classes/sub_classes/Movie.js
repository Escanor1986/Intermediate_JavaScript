import Media from "../Media";

export default class Movie extends Media {
  constructor(director = "", title, runTime = 0, movieCast = [], legalAge = 6) {
    super([], title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    this._legalAge = legalAge;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

  get movieCast() {
    return this._movieCast;
  }

  get legalAge() {
    return this._legalAge;
  }
}
