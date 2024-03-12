import "./style.css";
import Media from "./src/main_classes/Media";
import Book from "./src/main_classes/sub_classes/Book";
import Movie from "./src/main_classes/sub_classes/Movie";

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

document.querySelector("#app").innerHTML = `
  <div>

    <h1>Build a Library</h1>
    <p>Test it in the console !</p>

  </div>
`;
