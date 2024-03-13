export default class School {
  protected _name: string;
  protected _level: "primary" | "middle" | "high";
  protected _numberOfStudents: number;
  private _politicalOrientation: string;
  private _bankAccount: string;

  constructor(
    name: string,
    level: "primary" | "middle" | "high",
    numbersOfStudents: number,
    politicalOrientation: string,
    bankAccount: string
  ) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numbersOfStudents;
    this._politicalOrientation = politicalOrientation;
    this._bankAccount = bankAccount;
  }

  protected get politicalOrientation(): string {
    return this._politicalOrientation;
  }

  get name(): string {
    return this._name;
  }

  get level(): "primary" | "middle" | "high" {
    return this._level;
  }

  get numberOfStudents(): number {
    return this._numberOfStudents;
  }

  protected get bankAccount(): string {
    return this._bankAccount;
  }

  set newNumberOfStudents(amount: number) {
    if (typeof amount === "number" && Number.isInteger(amount)) {
      this._numberOfStudents = amount;
    } else {
      throw new Error(
        "Invalid input: numberOfStudents must be set to a Number."
      );
    }
  }

  private set bankAccount(value: string) {
    if (value.startsWith("BE") && value.length == 16) {
      this._bankAccount = value;
    } else {
      throw new Error(
        "Invalid input: bankAccount must begin by 'BE' and makes 16 characters length"
      );
    }
  }

  quickFacts(): void {
    console.log(
      `${this._name} educates ${this._numberOfStudents} et the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(subTeachers: string[]): string {
    let randomIndex: number = Math.floor(
      Math.random() * (subTeachers.length - 1)
    );
    return subTeachers[randomIndex];
  }
}
