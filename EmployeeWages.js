//UC1 Ability to Check Employee is present or Absent

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2; 
if(empCheck === IS_ABSENT){
    console.log("Employee is Absent!!");
    return;
}else{
    console.log("Employee is Present!!");
}

// UC2 Ability to check daily employee wage based on the work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;

// switch(empCheck){
//     case IS_PART_TIME: 
//         empHrs = PART_TIME_HOURS;
//         break;
//     case IS_FULL_TIME: 
//         empHrs = FULL_TIME_HOURS;
//         break;
//     default : 
//         empHrs = 0;
// }
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Employee Wage: " + empWage);

// UC3 to get working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }
}

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);

// UC 4 Calculating wages for a month
var NUM_OF_WORKING_DAYS = 2;
empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hours: " + empHrs + " Employee Wage: " + empWage);

// UC 5 -> Calculating wages till number of working days and total working hours is reached
const MAX_HRS_IN_MONTH = 100;
NUM_OF_WORKING_DAYS = 10;
let totalEmployeeHrs = 0;
let totalWorkingDays = 0;

while (totalEmployeeHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalEmployeeHrs++;
    let empCheck = Math.floor(Math.random() * 10) % 3;

    totalEmployeeHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmployeeHrs);

// UC6 Storing daily wages in an array

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }
  
  MAX_HRS_IN_MONTH = 160;
  NUM_OF_WORKING_DAYS = 20;
  totalEmployeeHrs = 0;
  totalWorkingDays = 0;
  let empDailyWageArr = new Array();
  
  while ( totalEmployeeHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmployeeHrs += empHrs;
  
    empDailyWageArr.push(calcDailyWage(empHrs));
  }
  
  let empwage = calcDailyWage(totalEmployeeHrs);
  
  console.log("UC6 Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmployeeHrs + "Emp Wage: " + empwage);