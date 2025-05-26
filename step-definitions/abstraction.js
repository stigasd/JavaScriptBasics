
function Employee(name,age,basesalary)
{
    this.name=name;
    this.age=age;
    this.basesalary=basesalary;
    let monthlybonus = 1000;

    let calculatefinalsalary = function()
    {
        let finalsalary =  this.basesalary + this.monthlybonus;
        console.log('final salary ='+finalsalary)
    }

    finalsalary = basesalary + monthlybonus

    this.getEmpDetails = function()
    {
        console.log('name: '+this.name+'| age : '+this.age);

    }

}

let emp1 =new Employee('stig',30,35000);
emp1.getEmpDetails();
emp1.monthlybonus = 10000;
emp1.calculatefinalsalary();