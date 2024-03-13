import School from "../School";

export default class PrimarySchool extends School {
  protected _pickupPolicy: string;

  constructor(
    name: string,
    numbersOfStudents: number,
    pickupPolicy: string,
    politicalOrientation: string = "",
    bankAccount: string = ""
  ) {
    super(
      name,
      "primary",
      numbersOfStudents,
      politicalOrientation,
      bankAccount
    );
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(): string {
    return this._pickupPolicy;
  }
}
