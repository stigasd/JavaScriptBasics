class Employee{

    setEmpDetails(name,id, phoneNo)
    {
        this.name=name;
        this.id=id;
        this.phoneNo=phoneNo; 
        
    }
    getEmpName()
    {
        return this.name;
    }
    getEmpId()
    {
        return this.id;
    }
    getEmpPhoneNO()
    {
        return this.phoneNo;
    }
}

//outside the class instantiate or create object

let emp1 = new Employee();

emp1.setEmpDetails('stig',3042,7561000);


console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNO());

