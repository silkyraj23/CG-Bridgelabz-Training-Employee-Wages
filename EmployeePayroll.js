
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
        this.setName(name);
    }

    setName(name) {
        try {
            const nameRegex = /^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]{1,})*$/;
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

   
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}


const emp1 = new EmployeePayroll(101, "Kaju", 1000, "Female", "2026-07-10");
const emp2 = new EmployeePayroll(102, "Shyam", 9000000, "Male", "2022-01-15");
const emp3 = new EmployeePayroll(103, "Ram", 6000000, "Male", "2024-07-20"); 

console.log(emp1.getDetails());
console.log(emp2.getDetails()); 
console.log(emp3.getDetails()); 