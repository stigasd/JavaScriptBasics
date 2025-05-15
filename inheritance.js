//inheritance


//parent class

class vehicle
{
   constructor(brand,model,price)
   {
    this.brand=brand;
    this.model=model;
    this.price=price
   }
   
   getPrice()
   {
    document.write("on road price of ",this.brand," ",this.model," is ",this.price);
   }
}

//creating child class

class car extends vehicle
{
}

    let c1=new vehicle("BMW","M3 competition",7300000);
    let c2=new vehicle("benz","c class",500000);
    let c3=new vehicle("jeep","wrangler",980000);
    console.log(c2);
    c1.getPrice();
    document.write("<br>");
    c2.getPrice();
    document.write("<br>");
    c3.getPrice();
