//* Encapsulation: protect a state and change it through methods.

//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
  //* old syntax
  // constructor (name:string, baseSalary:number) {
  //     this.name = name;
  //     this.baseSalary = baseSalary;
  // };
  // name : string;
  // baseSalary : number;

  //* Ts syntax
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}
  // Todo: akoii name ta method thakle 2 vabe atake alada kora hoy
  // 1. Using deffaretn name
  // 2. private method ar samne (_) use kora like _baseSalary jate onno developer bujte pare ata private ata change kora thik na, but amra private keyword use korsi ja TS a ase tai amader kono somossa hobe na keu change korte parbe na

  //* get * set

  // get
  get baseSalary(): number {
    return this._baseSalary;
  }
  //? ata readOnly

  // set
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can't be negative value!");
    }
    this._baseSalary = newSalary;
  }
  //? ata readOnly + changed ble
}

const employee = new Employee("Mir", 23000);
const employee2 = new Employee("Saheb", 32000);

employee.baseSalary = 3423;
console.log(employee.baseSalary);
