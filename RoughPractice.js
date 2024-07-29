// let calculateTip= (bill) =>{
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2; 
// }
// let bill =[22,282,3829,383,839];

// let tip = [];
// let totalAmount=[];

// for (let index = 0; index < bill.length; index++) {
//     tip.push(calculateTip(bill[index]))
// }
// console.log(tip);
// for (let index = 0; index < tip.length; index++) {
//     totalAmount.push(bill[index]+tip[index])
// }
// console.log(totalAmount);

// let averageOfTotal= (amount)=>
// {
//     let total ;
//     for (let index = 0; index < amount.length; index++) {
//          total =+ amount[index];
//     }
//     return total/amount.length;
// }
// let avgOfTips = averageOfTotal(tip);
// console.log(avgOfTips);
// let avgOfTotalAmount = averageOfTotal(totalAmount);
// console.log(avgOfTotalAmount);

// function traingle(n){
//     for(let i =1; i<=n;i++)
//     {
//         let line = '';
//         for(let j =0;j<n-i;j++){
//             line+=' ';
//         }
//         for (let j = 0; j < 2*i-1; j++) {
//             line+=i;
//         }
//         console.log(line);
//     }
// }


// function reversePyramid(n){
//     for(let i =n; i>0;i--)
//     {
//         let line = '';
//         for(let j=0;j<n-i;j++){
//             line +=' ';
//         }
//         for (let j = 0; j < 2*i-1; j++) {
//             line+=i;
//         }
//         console.log(line);
//     }
// }


// function fullPyramid(n){
//     for(let i =1; i<=n;i++)
//         {
//             let line = '';
//             for(let j =0;j<n-i;j++){
//                 line+=' ';
//             }
//             for (let j = 0; j < 2*i-1; j++) {
//                 line+=i;
//             }
//             console.log(line);
//         }
//     for(let i =n-1; i>0;i--)
//     {
//         let line='';
//         for(let j=0;j<n-i;j++){
//             line +=' ';
//         }
//         for (let j = 0; j < 2*i-1; j++) {
//             line+=i;
//         }
//         console.log(line);
//     }

    
//     }
// fullPyramid(5);

// function checkPrime(n){
//     if(n==0 ||n==1) {
//         console.log("Not a prime number");
//         return;}
//     for (let i = 2; i <= Math.trunc(n/2); i++) {
//        if(n%i==0){
//         console.log("Not a PrimeNumber.");
//         return;
//        }
//     }
//     console.log("It's a prime number.") 
// }
// checkPrime(2338);

// function factorial(n){
//     if(n==0 || n== 1) return 1;
//     let fact =1;
//     for (let i = n; i>0; i--) {
//        fact*=i;      
//     }
// return fact;
// }

// let factor = factorial(10);
// console.log(factor)

// function running(run){
//     console.log("He is playing");
//     console.log(run);
// }

// function run1(){
//     console.log("there are 5 players");
// }

// running(run1);

// setTimeout(()=>{
//     let arr={name:'vinay',num: 5 }
//     display(arr);
// },2000)

// function display(arr){
//     console.log(arr)
// }

// try{
//     let slow = display5();
// }
// catch(err){
//     console.log("The error is",err)
// }
// finally{
//     console.log("Final block.")
// }

// function walk(name,count){
//   this.name = name;
//   this.c= count;
// }
// let arr =["vinay",5]
// walk.prototype.greet = function(){
//     console.log(`${this.name} is the name and ${this.c} is the number`)
// }

// let rumour = new walk("vinay", 5);
// rumour.greet();

// function greet(){
//     let n = 5;
//     function greeting(){
//         n = 10;
//         console.log(n);
//     }
//     greeting();
// }
// let r = greet();
// console.log(r)

// let n = 10;
// let a = 0;
// let b = 1;

// for(let i =0; i<n*2;i++){
//     let temp = a+b;
//     a= b;
//     b = temp;
//     if(i%2==0){
//     console.log(temp);
//     }
// }

// let v = 0 || 5;
// console.log(v);
// if(v){
// console.log("trueee")
// }else{
//     console.log("not true")
// }

// let user = true;
// let deafaultuser = 10;
// console.log(user??deafaultuser)

function getSomething(charac,things){
    console.log( `His name ${this.name}${charac} get the ${things} `)
}
const person1={name: "varma "};
getSomething.call(person1,"vinay","books")
let name5=['vinay','books'];
const greet = getSomething.bind(person1);
greet("vinay","books");

getSomething.apply(person1,name5)