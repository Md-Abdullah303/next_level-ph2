class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    name;
    baseSalary;
}
const employee = new Employee("Miraz", 12000);
const employee2 = new Employee("mir", 32000);
console.log(employee, employee2);
export {};
