//inheritance

class Car 
{
    setName(name)
    {
        this.name=name;
         
    }

    startEngine()
        {
            console.log('Engine started for '+this.name);

        }
        stopEngine()
        {
            console.log('Engine stopped for '+this.name);

        }
    
}

//another class

class Toyota extends Car
{
    topSpeed(speed)
    {
        console.log('Top speed for '+this.name+' is '+speed);

    }
}

let mycar= new Toyota();
mycar.setName('supra');
mycar.startEngine();
mycar.stopEngine();
mycar.topSpeed(260);