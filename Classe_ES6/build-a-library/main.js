import "./style.css";
import CD from "./src/main_classes/sub_classes/CD";
import Book from "./src/main_classes/sub_classes/Book";
import Movie from "./src/main_classes/sub_classes/Movie";
import Catalog from "./src/main_classes/Catalog";

const catalog = new Catalog();
console.log(catalog.itemsList);

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544,
  1987
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

catalog.addItems(historyOfEverything);

const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
catalog.addItems(speed);

console.log(catalog.itemsList);
console.log(speed);
console.log(historyOfEverything);

document.querySelector("#app").innerHTML = `
  <div>

    <h1>Build a Library</h1>
    <p>Test it in the console !</p>

  </div>
`;
