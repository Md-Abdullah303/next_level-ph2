//* Abstraction : every employee must define their pay is calculated.
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
            throw new Error("Negative number is not ok");
        }
        this._baseSalary = newSalary;
    }
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
export {};
