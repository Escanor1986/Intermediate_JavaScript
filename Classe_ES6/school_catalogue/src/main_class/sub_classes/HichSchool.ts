import School from "../School";

export default class HighSchool extends School {
  protected _sportsTeam: string[];

  constructor(name: string, numbersOfStudents: number, sportsTeam: string[]) {
    super(name, "high", numbersOfStudents, "", "");
    this._sportsTeam = sportsTeam;
  }

  get teams(): string[] {
    return this._sportsTeam;
  }
}
