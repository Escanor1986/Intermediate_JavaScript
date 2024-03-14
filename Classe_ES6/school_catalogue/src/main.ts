import "./style.css";
import School from "./main_class/School";
import PrimarySchool from "./main_class/sub_classes/PrimarySchool";
import HighSchool from "./main_class/sub_classes/HichSchool";

const lorraineHansbury: PrimarySchool = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);

console.log(
  School.pickSubstituteTeacher(["José", "Thibault", "Rafael", "Leonrado"])
);

lorraineHansbury.quickFacts();

console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith: HighSchool = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith);

console.log(alSmith.teams);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>

    <h1>School Catalogue</h1>
    <p>Test it in the console!</p>

  </div>
`;
