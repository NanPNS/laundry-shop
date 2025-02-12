//ข้อ1
function sortNumbers(numbers) {
    
    let frequency = {};

    for (let num of numbers) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    numbers.sort((a, b) => {
        if (frequency[a] === frequency[b]) {
            return a - b; 
        }
        return frequency[a] - frequency[b]; 
    });

    return numbers;
}

let input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
let result = sortNumbers(input);
console.log(result);



//ข้อ2
function findEmployee(employees, targetName) {

    for (let employee of employees) {
        if (employee.name === targetName) {
            return `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}`;
        }
    }

    return `ไม่พบพนักงานชื่อ ${targetName}`;
}


let employees = [
    { name: "Arm", position: "Front End" },
    { name: "Game", position: "Back End" }
];
let searchName = "Nan";
let employeeInfo = findEmployee(employees, searchName);
console.log(employeeInfo);


//ข้อ3
const fs = require('fs'); 

const rawData = fs.readFileSync('F:\\projects\\laundry-shop\\MockupData.json', 'utf-8'); 
const jsonData = JSON.parse(rawData);


function extractXY(data) {
    const xArray = []; 
    const yArray = []; 


    data.forEach(item => {

        if (!xArray.includes(item.x)) {
            xArray.push(item.x);
        }

 
        if (!yArray.includes(item.y)) {
            yArray.push(item.y);
        }
    });

    return {
        x: xArray, 
        y: yArray 
    };
}

const runresult = extractXY(jsonData.mockUpData);


console.log("ผลลัพธ์ x และ y:");
console.log(runresult);
