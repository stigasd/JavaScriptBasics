//object oriented programing

var employee = {
    name: "Stig",
    position: "Tester",
    salary:30000,

    getsalary: function(){
        document.write("salary of ",this.name, " is",this.salary)
    }
}

console.log(employee);
document.write(employee.name);
document.write("<br>");
document.write(employee.position);
document.write("<br>");
employee.getsalary();


// using class


class Employee{
    constructor(name,position,salary){
        this.name=name;
        this.salary=salary;
        this.position=position;
    }
    getsalary()
    {
        document.write("salary of ",this.name,"is",this.salary);
    }
}
//creating object of the class
let e1 = new Employee("jhon","TEster",20000);
let e2=new Employee("appu","veo",30000);
let e3 = new Employee("kundu","firemen",40000);
document.write("<br>");
document.write(e2.getsalary());
document.write("<br>");
document.write(e3.getsalary());


