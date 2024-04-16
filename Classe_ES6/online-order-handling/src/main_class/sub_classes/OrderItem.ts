import Product from "../Product";

export default class OrderItem extends Product {
  public _quantity: number;

  constructor(productName: string, productPrice: number, quantity: number) {
    super(productName, productPrice);
    this._quantity = quantity;
  }
}
