import { salaryData } from "./salaryData";
import { getDataByRole, getDataByCompany } from "./salaryData";

export const getAverageSalaryByRole = (role: string): number => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
};

export const getAverageSalaryByCompany = (company: string): number => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
};

export const getSalaryAtCompany = (role: string, company: string): number => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany?.salary || 0;
};

export const getIndustryAverageSalary = (): number => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
};

function calculateAverage(arrayOfNumbers: number[]): number {
  let total = 0;
  arrayOfNumbers.forEach(number => (total += number));
  return total / arrayOfNumbers.length;
}
