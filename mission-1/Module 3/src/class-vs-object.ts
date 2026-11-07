class Employee {
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  name: string;
  baseSalary: number;
}

const employee = new Employee("Miraz", 12000);
const employee2 = new Employee("mir", 32000);

// console.log(employee, employee2);
