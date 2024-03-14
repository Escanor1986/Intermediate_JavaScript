import { getRoles, getCompanies } from "./salaryData";

const companies = getCompanies();
const roles = getRoles();

renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

export function renderInputButtons(labels: string[], groupName: string) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => {
    // For each label...
    // Create the radio input element.
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main")?.prepend(container);
}

export function updateResults() {
  // Get the current selected company and role from the radio button inputs.
  const company: string | null = (
    document.querySelector("input[name='company']:checked") as HTMLInputElement
  )?.value;

  const role: string | null = (
    document.querySelector("input[name='role']:checked") as HTMLInputElement
  )?.value;

  // If either the company or role is unselected, return.
  if (!company || !role) {
    return;
  }

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByRole = 0;
  const averageSalaryByCompany = 0;
  const salary = 0;
  const industryAverageSalary = 0;

  // Render them to the screen.
  document.getElementById(
    "salarySelected"
  )!.innerText = `The salary for ${role}s at ${company} is \$${salary}`;
  document.getElementById(
    "salaryAverageByRole"
  )!.innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById(
    "salaryAverageByCompany"
  )!.innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById(
    "salaryAverageIndustry"
  )!.innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}
