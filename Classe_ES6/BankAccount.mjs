class BankAccount {
  constructor (balance = 0, accountHolder = "default", accountNumber) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber
    }

    deposit(amt) {
    this.balance += amt;
    return `You deposit ${amt}€ on your account and now have a ${this.balance > 0 ? "positive balance" : "negative balance"} with the present amount ${this.balance}€`
  }
}

const myAccount = new BankAccount(-100, "Me", "1234 - 3456 - 5678 - 6789");

// console.log(myAccount.deposit(65));

class ArrayUtils {
  constructor() {
      throw new Error("ArrayUtils cannot be instanciated.");
  }
  
  static average(arr) {
      if (arr.length === 0) {
          throw new Error('Array cannot be empty.')
      } else {
        console.log();
          return (arr.reduce((acc, curr) => { return acc + curr })) / arr.length;
      }
  }
  
  static max(arr) {
      return Math.max(...arr);
  }
}

const myArr = [1, 2, 3, 4, 5];

console.log(ArrayUtils.average(myArr));
console.log(ArrayUtils.max(myArr));
