//? Create class called Catalog that holds all of the Media items in our library.
export default class Catalog {
  constructor() {
    this._itemsList = [];
  }

  get itemsList() {
    return this._itemsList;
  }

  addItems(item) {
    this._itemsList.push(item);
  }
}
