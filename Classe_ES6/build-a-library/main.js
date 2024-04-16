import "./style.css";
/* import CD from "./src/main_classes/sub_classes/CD";
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
console.log(historyOfEverything); */

const endPoint = "users";
let data = [];

async function dataFetch() {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/${endPoint}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // console.log(response.type);
      // console.log(response.redirected);
      return response.json();
    })
    .then(json => {
      data = json;
    })
    .catch(err => console.error("Error fetching data:", err));

  return fetchData;
}

async function showDataThen() {
  await dataFetch();
  // data.map(elem => console.log(elem));
}

showDataThen();

async function showData() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const value = await response.json();
    // console.log(value);
  } catch (err) {
    console.log(err);
  }
}

showData();

const user = {
  title: "foo",
  body: "bar",
  userId: 1,
};

async function postUser() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response);
    const value = await response.json();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

postUser();

document.querySelector("#app").innerHTML = `
  <div>

    <h1>Build a Library</h1>
    <p>Test it in the console !</p>

  </div>
`;
