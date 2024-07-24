
// function run(){
//     let vin = "running";
//     console.log("He is running");
//     let runner = ()=>{
//         console.log(vin);
//     }
//     return runner;//afunctions and all there is to know bwoout them in the js with examples 
    
// }

//  let Run = run();
// console.log(Run())//here the closures is attained as the vin varaible is the 
// //variable of the run function  but after the excution of it also it remembers the va;ue of the varibale 
// //and this is the closures. 
// function walk(){
//     console.log(this);
// }
// walk();
//  "use strict"
console.log(this);

function show() {
    console.log(this);
}
show();
const show1 = function() {
    console.log(this);
};
show1();
const obj = {
    name: "Alice",
    show2: function() {
        console.log(this);
    }
};
obj.show2();
const obj1 = {
    name: "Alice",
    show3: function() {
        const arrowFunction = () => {
            console.log(this);
        };
        arrowFunction();
    }
};
obj1.show3();

// document.getElementById("myButton").addEventListener("click", function() {
//     console.log(this);
// });
function show4(greeting) {
    console.log(greeting + ", " + this.name);
}

const obj3 = {
    name: "Alice"
};

show4.call(obj3, "Hello");
class Person {
    constructor(name) {
        this.name = name;
    }
}

const alice = new Person("Alice");
console.log(alice.name);

function sum(...numbers) {
    console.log(numbers)//it's like an array with the name given as last for the rest operator 
    console.log(numbers.push(5))//arguments and rest operator are different only arugumnets has and belongs to the fucntion so there is only one state that is length which gives the length of the array
    // console.log(numbers[2])
    // return numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(numbers)

}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
console.log(sum(5, 10, 15));  // Outputs: 30


