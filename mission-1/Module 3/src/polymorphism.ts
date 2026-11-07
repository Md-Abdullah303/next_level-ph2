class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}
  get baseSalary(): number {
    return this._baseSalary;
  }
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("something was wrong!");
    }

    this._baseSalary = newSalary;
  }

  calculate(): number {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  //Todo: akhane amara calculate ke override kore dilam
  override calculate() {
    return this.baseSalary + 555;
  }
}

const employee = new Employee("Ridme", 12000);
const manager = new Manager("Adif", 1000);

console.log(employee.calculate());
console.log(manager.calculate());
