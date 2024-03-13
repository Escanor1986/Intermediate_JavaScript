import Media from "../Media";

export default class Book extends Media {
  constructor(author = "", title, pages = 0, releaseDate = 0) {
    super();
    this._author = author;
    this._title = title;
    this._pages = pages;
    this._releaseDate = releaseDate;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  get releaseDate() {
    return this._releaseDate;
  }
}
