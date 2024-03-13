import School from "../School";

export default class HighSchool extends School {
  protected _sportsTeam: string[];

  constructor(
    name: string,
    numbersOfStudents: number,
    politicalOrientation: string = "",
    bankAccount: string = "",
    sportsTeam: string[]
  ) {
    super(name, "high", numbersOfStudents, politicalOrientation, bankAccount);
    this._sportsTeam = sportsTeam;
  }

  get teams(): string[] {
    return this._sportsTeam;
  }
}
