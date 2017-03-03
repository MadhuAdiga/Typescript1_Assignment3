abstract class Department { // Defines an abstract class Department
    constructor(public name :string){ // The constructor takes in a public name which ned not be defined as a property of class 
        console.log("Department is : " + this.name);// Logs the department name
    };
    printName() : void { // defines a method which logs the name of the department
        console.log(`Department is ${this.name} `);
    } 
    abstract printMeeting(subDept:string): void; // an abstract method which can be implemented in the extended classes
}

class AccountingDepartment extends Department{ // A class extends the abstract class Department
    constructor(){
        super("Accounting Department"); // constructors in derived classes must call super()
    }
   
    printMeeting(subDept:string) : void { // the method implemets the printMeeting defined in the abstract class. Tkes in a sub-dept name as parameter
        console.log(`You have a meeting with the ${subDept} department at 08:00 IST`); // Logs the meeting details
    }
}

// Below are two more similar derivations of the abstract class Department

class BioTechnologyDepartment extends Department{
    constructor(){
        super("BioTechnology and Genetics Department");
    }
   
    printMeeting(subDept:string) : void {
        console.log(`You have a meeting with the ${subDept} department at 14:00 IST`);
    }
}

class ComputersDepartment extends Department{
    constructor(){
        super("Computer Science and Application");
    }
   
    printMeeting(subDept:string) : void {
        console.log(`You have a meeting with the ${subDept} department at 09:00 IST`);
    }
}

var myDepartment1 = new AccountingDepartment();
myDepartment1.printMeeting("Finance");

var myDepartment2 = new BioTechnologyDepartment();
myDepartment2.printMeeting("CellBiology");

var myDepartment3 = new ComputersDepartment();
myDepartment3.printMeeting("Microprocessors");