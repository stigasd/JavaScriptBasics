 class Employee
 {

    
    setDetails(name,id)
    {
        this.name=name; //class varible
        this.id=id;
    }

 }

 //outside the class

 let emp1= new Employee();
 emp1.setDetails('stig',4233);
 console.log(emp1.name);
 console.log(emp1.id);
 