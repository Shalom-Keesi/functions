// Q1:Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// function reversedStrings(arr,indices){
//     arr.map(str => str.split("").reverse().join(""));
//     arr.sort()
//     indices.forEach(index => {
//         if(index >= 0 && index < arr.length){
//             arr[index] = arr[index].split("").reverse().join("");
//         }
        
//     });
//     return arr;
    
// }
// const strings=["stool","table","bench","couch","seat","bed"];
// const indicesToBeReversed=[0,2,4];
// const result= reversedStrings(strings,indicesToBeReversed);
// console.log(result);
function reversedStrings(){
    newArray=[];
    arrayOriginal=["Gloria","Gidieon","Joseph","Jemimah","Solomon","Zipporah","Nicola"];
    arrayOriginal.forEach(string => {
        if(string[0]=="L"||string[0]=="J"){
            let newString=string.split("").reverse().join("");
            newArray.push(newString);
        }
        else{
            let newString=string.split("").sort().join("");
            newArray.push(newString);
        }
    
    })
    console.log(newArray)
}
reversedStrings()


// //return positive if an element within the array is positive, negative if an element is negative, else zero
// function checkArrayStatus(arr){
//     const isPositive= arr.some(num => num >0);
//     const isNegative= arr.some(num =>num <0);
//     const isZero = arr.some(num => num =0)
//     if(isPositive){
//         return "Positive"
//     }
//     if(isNegative){
//         return "Negative"
//     }
//     else{
//         return"Zero"
//     }
// }

// const numArray=[-4,-3,0,111,-7,-7];
// console.log(checkArrayStatus(numArray));
// const numArray2=[5,10,15,20,25,30]
// console.log(checkArrayStatus(numArray2));
// const numArray3=[-3,-6,-9,-12,-15,-18]
// console.log(checkArrayStatus(numArray3));
// const numArray4=[0,0,0];
// console.log(checkArrayStatus(numArray4));


function numberStatus(){
    const arrayOfNumbers=[4,6,-7,-3,0,14,-19,0]
    arrayOfNumbers.forEach(number=>{
        if(number>0){
            console.log("Positive");
            return "Positive"
        }
        else if(number<0){
            console.log("Negative");
            return "Negative"
        }
        else{
            console.log("Zero");
            return "Zero"
        }
    })
        
}
numberStatus()

// write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortEmployeesIDandSalary(){
let employees=[
    {id:252525 , name:"Emily" , salary: 55000},
    {id:212121 , name:"Esther" , salary: 3000},
    {id:282828 , name:"Elsie" , salary: 10000}

];
console.log(employees.sort((a,b) => a.salary - b.salary))
return employees.sort((a,b) => a.salary - b.salary)
}
sortEmployeesIDandSalary()



//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const nums = [2,3,5,7,11,13,17,19,23];
function arrNumbers(){
    nums.forEach(num=>{
    console.log(num*2);
})
}
arrNumbers(nums)



//Write a function that takes in an array of numbers and consoles the first
// // four items multiplied by 8 and the last two added by 5. Console the array with the new values
function operateOnArray(numbers){
    for(let index=0; index<4 && index<numbers.length;index++){
        numbers [index]*=8;
    }
    for (let index=numbers.length-2;index<numbers.length;index++){
        if(index>=0){
            numbers[index]+=5;
        }
    }
    console.log(numbers);
}
const numbers=[5,10,15,20,25,30,35];
operateOnArray(numbers)


