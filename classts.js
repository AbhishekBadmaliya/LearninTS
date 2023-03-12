var Pravin = /** @class */ (function () {
    function Pravin() {
    }
    Pravin.prototype.getFirstName = function () {
        console.log("My name is" + this.firstname);
    };
    return Pravin;
}());
var parvez = new Pravin();
parvez.firstname = "praveen";
parvez.getFirstName();
// constructor for ANAND
var Anand = /** @class */ (function () {
    function Anand(salary, expense) {
        this.salary = salary;
        this.expense = expense;
    }
    Anand.prototype.getSalary = function () {
        console.log("My weekly salary is " + this.salary + " this is my expense " + this.expense);
    };
    return Anand;
}());
var onand = new Anand(25000, 0);
// onand.salary = 25000;
// onand.expense = 0;
onand.getSalary();
