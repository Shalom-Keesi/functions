// Q1:Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function reverseStringsArray(arr) {
    const reversedStrings = arr.map(str => [...str].reverse().join(''));
    console.log(reversedStrings);
}

//return positive if an element within the array is positive, negative if an element is negative, else zero
function examineElement(array, index){
    const example=array[index];
    if(example > 0){
        return example + "is positive";
    }
    else if (example < 0) {
        return example + "is negative";

    }
    else{
        return example + "zero"
    }
}
const example=[5, 7, 0, 0,-7]
console.log(examineElement(example,3));

// write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortSalary(employees){
    return employees.sort((x,y) => x.salary - y.salary);
}
const employees = [
    {id: 1, name: "Karuri", salary: 500},
    {id: 1, name: "Kamau", salary: 700},
    {id: 1, name: "Kinya", salary: 1000}
];

const sortedEmployees= sortSalary(employees);
console.log(sortedEmployees);