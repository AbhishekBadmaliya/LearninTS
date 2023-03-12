class Pravin{
  firstname: string;
  lastname: string;
  age: number;

  getFirstName(){
    console.log("My name is" + this.firstname);
  }
}

let parvez = new Pravin();
parvez.firstname = "praveen";
parvez.getFirstName();

// constructor for ANAND
class Anand{
  salary: number;
  expense: number;

  constructor(salary: number, expense: number){
    this.salary = salary;
    this.expense = expense;
  }

  getSalary(){
    console.log("My weekly salary is "+ this.salary + " this is my expense "+ this.expense);
  }
}

let onand = new Anand(25000, 0);
// onand.salary = 25000;
// onand.expense = 0;
onand.getSalary();
