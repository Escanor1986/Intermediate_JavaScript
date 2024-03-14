import "./style.css";
import { renderInputButtons, updateResults } from "./main";
import { getRoles, getCompanies } from "./salaryData";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<main>
<!-- The roles and companies <section>s are dynamically created in main.js with renderInputButtons() -->
<section id="resultsContainer">
  <h3>Details:</h3>
  <p id="salarySelected"> ... </p>
  <p id="salaryAverageByRole"> ... </p>
  <p id="salaryAverageByCompany"> ... </p>
  <p id="salaryAverageIndustry"> ... </p>
</section>
</main>
</div>
`;

const companies = getCompanies();
const roles = getRoles();

renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

document
  .querySelectorAll<HTMLInputElement>(
    'input[name="company"], input[name="role"]'
  )
  .forEach(input => {
    input.addEventListener("change", updateResults);
  });
