//* Inheritance: a Manager is an Employee with an additional responsibility.

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
      throw new Error("Salary can't be negative value!");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} is erns ${this.baseSalary}`;
    // return `${this.name} is erns ${this._baseSalary}`;
    //! Now a qns arraiv, je opore comment kora return a _baseSalary keno ase?
    // note : bcz _baseSalary to akta private property ata access korar kono kotha nai
    //* Ans is amra amader private property gulo amader class ar vetor use korte parbo tai kono somossa hoy nai but class ar bahire ata diye kisu korte parbo na
  }
}

class Manager extends Employee {
  //* normal way
  //   teamMemberCount: number;

  //   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
  //     super(name, _baseSalary);
  //     this.teamMemberCount = teamMemberCount;
  //   }

  //* short way
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }
  describManager(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

const employee = new Employee("Mir", 23000);
const manager = new Manager("Sihab", 10000, 23);

const managerDes: string = manager.describe();

console.log(managerDes);
