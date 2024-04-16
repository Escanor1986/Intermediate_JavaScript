import "./style.css";
import Product from "./main_class/Product";

const italianShoes1 = new Product("Italian Sneakers", 99);
const italianShoes2 = new Product("Italian Mocassin", 149);
const italianShoes3 = new Product("Italian Escarpins", 199);
const italianShoes4 = new Product("Italian Sandales", 59);

console.log(Product.instances);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Welcome on ${Product.societyName} !</h1>
    <ul>
      ${Product.instances
        .map(
          obj =>
            `<li>Product Name: ${obj._name} --- Product Price: ${obj._price}</li>`
        )
        .join("")}
    </ul>
  </div>
`;
