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
            throw new Error("something was wrong!");
        }
        this._baseSalary = newSalary;
    }
    calculate() {
        return this.baseSalary;
    }
}
class Manager extends Employee {
    //Todo: akhane amara calculate ke override kore dilam
    calculate() {
        return this.baseSalary + 555;
    }
}
const employee = new Employee("Ridme", 12000);
const manager = new Manager("Adif", 1000);
console.log(employee.calculate());
console.log(manager.calculate());
export {};
