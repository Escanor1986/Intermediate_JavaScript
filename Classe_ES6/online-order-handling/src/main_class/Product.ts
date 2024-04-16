export default class Product {
  public _name: string;
  public _price: number;
  protected _id: number;
  private static _societyName: "Online Mega Store";
  private static _instances: Product[] = [];

  constructor(productName: string, productPrice: number) {
    this._name = productName;
    this._price = productPrice;
    this._id = this.generateUniqueID();
    Product._societyName = "Online Mega Store";
    Product._instances.push(this);
  }

  static get societyName() {
    return Product._societyName;
  }

  static get instances(): Product[] {
    return Product._instances;
  }

  private generateUniqueID(): number {
    let uniqueID: number;
    do {
      uniqueID = parseInt(
        new Array(10)
          .fill(1)
          .map(elem => elem * Math.floor(Math.random() * 9))
          .join("")
      );
    } while (Product._instances.some(product => product._id === uniqueID));
    return uniqueID;
  }
}
