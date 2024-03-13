import Catalog from "./Catalog";

export default class Media extends Catalog {
  constructor() {
    super();
    this._ratings = [];
    this._title = "";
    this._isCheckedOut = false;
  }

  get ratings() {
    return this._ratings;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(bool) {
    return (this._isCheckedOut = bool);
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    return (
      this._ratings.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / this._ratings.length
    );
  }

  addRating(rating) {
    rating >= 1 && rating <= 5
      ? this._ratings.push(rating)
      : console.log("Your rating must be between 1 and 5 !");
  }
}
