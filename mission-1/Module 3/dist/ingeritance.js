//* Inheritance: a Manager is an Employee with an additional responsibility.
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can't be negative value!");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} is erns ${this.baseSalary}`;
        // return `${this.name} is erns ${this._baseSalary}`;
        //! Now a qns arraiv, je opore comment kora return a _baseSalary keno ase?
        // note : bcz _baseSalary to akta private property ata access korar kono kotha nai
        //* Ans is amra amader private property gulo amader class ar vetor use korte parbo tai kono somossa hoy nai but class ar bahire ata diye kisu korte parbo na
    }
}
class Manager extends Employee {
    teamMemberCount;
    //* normal way
    //   teamMemberCount: number;
    //   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
    //     super(name, _baseSalary);
    //     this.teamMemberCount = teamMemberCount;
    //   }
    //* short way
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describManager() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
const employee = new Employee("Mir", 23000);
const manager = new Manager("Sihab", 10000, 23);
const managerDes = manager.describe();
console.log(managerDes);
export {};
