// // Anonymous Function (it means a function without name)
// function (){
//     console.log("Hello")
// }

// // Function Expression
// let part = function(){
//     console.log("hello world")
// }
// part()

// // setTimeout function
// setTimeout(function(){
//     console.log("loading")
// },2000)

// // IIFE or Immediately invoked Function Expression
// (function(){
//     console.log("hello world")
// })()


// // Arrow Function
// method-1 (with parameter and arguments)
// let add = (x,y) => {
//     console.log("me")
// }
// add(10.20)

// // method-2 (no parameter and shortest)
// let sum = () => console.log("hello world")
// sum()


// // Callback Function (its passed a function as a parameter to another function)
// function myself(original, nick){
//     let result = original;
//     return nick(result);
// }
// function anderson(total){
//     return total;
// }
// console.log(myself("shibin", anderson))


// // Example of Lexical scope (it means where a variable accessible)
// function outer(){
//     let num = 5;

// function inner(){
//     console.log(num)
// }
// inner()
// }
// outer()


// // closure example (It means the inner function use the outer functions variable and it becomes the recursion, and still anymore the inner function remembers the outer functions variable)



// Example of Recursions (A functions calls itself repeatly until the condition false)
// function fact(n){
//     if(n===1){
//     return 1;
//     }
//     return fact(n-1)*n
// }
// console.log(fact(5))


// // Method  (It means a function inside an object)
// let obj = {
//     name : "Shibin",
//     age : 26,
//     info(){
//         console.log("learning")
//     }
// }
// obj.info()

// "this" keyword (used for access the current object)
// let obj = {
//     name : "Shibin",
//     age : 26,
//     info(){
//         console.log(this.name)
//     }
// }
// obj.info()


// // Array destructuring examples copy and skip
// let arr = [10,20,30,40,50]
// let [a, ,c, ,e] = arr;
// console.log(c)

// // Object destructuring easily takes the value from the object to varaible 
// let obj = {
//     name : "shibin",
//     age : 26,
//     place : "KK"
// }
// let {name,age,place:location} = obj
// console.log(location)


// // forEach
// let arr = [10,28,32,14,25];
// arr.forEach(n=> console.log(n*2))

// // map
// let arr = [24,16,25,37,52,15];
// let result = arr.map(n=> n*3)
// console.log(result)

// // filter
// let arr = [23,16,27,35,36,15]
// let even = arr.filter(n=> n%2===0)
// let odd = arr.filter(x=> x%2!== 0)
// console.log(even)
// console.log(odd)

// // reduce
// let arr = [24,15,24,32,51];
// let result = arr.reduce((acc,curr) => acc+curr,0)
// console.log(result)


// // Pure Function (it means a function that always gives the same results and same input and does'nt change anything outside)
// function any(a,b){
//     return a+b;
// }
// console.log(any(10,20))


// // Example for set(set is the collections of unique values and and it doesnot allowed the duplicate values)
// let numbers = new Set();

// // Add values
// numbers.add(10);
// numbers.add(20);
// numbers.add(10); // duplicate, ignored

// console.log(numbers); // Set { 10, 20 }

// // Check if value exists
// console.log(numbers.has(20)); // true
// console.log(numbers.has(30)); // false

// // Remove a value
// numbers.delete(10);
// console.log(numbers); // Set { 20 }

// // Size of set
// console.log(numbers.size); // 1