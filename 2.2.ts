
class vehicle { // this is a ES6 class 
	
	name:string;
	yearofmanufacture:number;

	constructor (name,yearofmanufacture){ // this is a constructor
		this.name = name;
		this.year=yearofmanufacture;

	}	

	getvehicleInfo(){

		console.log(`vehicle is ${this.name} year of manufacture is ${this.year}`);
	}
}

var maruti= new vehicle('city','2015');
maruti.getvehicleInfo();

/*to run the code in the browser we have to compile it, the changes will be reflected in js file 
, copy the code and run in the console */ 