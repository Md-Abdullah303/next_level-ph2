//* Abstraction : every employee must define their pay is calculated.

abstract class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Negative number is not ok");
    }

    this._baseSalary = newSalary;
  }

  abstract calculatePay(): number;
}

class Manager extends Employee {
  calculatePay() {
    return this.baseSalary + 3000;
  }
}

class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 5000;
  }
}
