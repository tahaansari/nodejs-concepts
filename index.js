console.clear();
// import test from './file1.js';
// import {a,b} from './file1.js'

// var user = {name:'Taha', age:33, gender:'Male'}
// console.log(user)
// Object.freeze(user)
// user.name = "Adil";
// console.log(user)

// console.log("5 "===" 5")

// for(;;){
//     console.log('Hello World');    
// }

// console.log(typeof NaN)
// let x = null;
// let y = null;
// console.log(x+y)

// console.log(typeof function(){ return  }()) 

// let x = [1,2,3]

// console.log(typeof x)


// console.log(x);
// var x = 15;

// console.log(typeof [])
// let a = 
// console.log(..."taha")

// var a = [1,2,3];
// var b = [4,5,6]
// console.log(...a,...b,7,8,9)
// test();

// function fruits(...fruits){
//     console.log(...fruits)
// }

// fruits('apple','mango','banana')

// function outer(){
//     let counter = 0;
//     return function inner(){
//         counter++;
//         console.log(counter)
//     }
// }

// const res = outer()
// res()
// res()
// res()
// res()
// res()

// var a = "hello";
// var a = "World"
// console.log(a)

// console.log(x)
// let x = 10;

// console.log(a);
// console.log(b);
// CLOSURE 

// const person = {
//     name:"Taha",
//     printName: ()=>{
//         console.log(`My name is ${this.name}`)
//     }
// } 

// person.printName();
 
// const MyCounter = {
//     count:0,
//     updateCounter: function() {
//         setTimeout(()=>{
//             console.log(`Updated Counter is ${this.count = this.count+1}`)    
//         },1000)
//     }
// }

// MyCounter.updateCounter();

// const nums = [1, 2, 3];
// const doubledArrow = nums.map(n => console.log(n * 2));
// const doubled = nums.map(function(n){
//     console.log(n * 2)
// });

// try{
//     console.log(x);
// }catch{
//     console.log('error')
// }

// const arr = [1,2,3,4,5]
// console.log(arr.splice(0,2))
// console.log(arr)
// console.log("...")
// const arr2 = [1,2,3,4,5]
// console.log(arr2.slice(0,2))
// console.log(arr2)

// console.log(typeof '12121')
// console.log(typeof parseInt('12121'))
// console.log(typeof Number('12121'))
// console.log(+'12121')

// console.log(Math.random())

// console.log(typeof (2 + "2" - 1))

// console.log(" abc   ".trim())

async function getName(){
    return await "Taha Ansari"
}

console.log(getName())


// CALLBACK

// function greet(name,callback){
//     setTimeout(()=>console.log("hello mr. "+name),10000)
//     callback(); 
// }

// function sayHey(){
//     console.log("Hey");
// }

// greet("Taha",sayHey);

// const numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// console.log('hello world');

// setTimeout(()=>{
//     console.log("step 1")
//     setTimeout(()=>{
//         console.log("step 2")
//         setTimeout(()=>{
//             console.log("step 3")
//         },1000)
//     },1000)
// },1000)

// const MyPromise = new Promise((resolve,reject)=>resolve())
// MyPromise.then(()=>console.log("step 1")).catch(()=>console.log("failed"))

// function DownloadFile(){
//     return new Promise((resolve,reject)=>{
//         const status = false;
//         status ? setTimeout(()=> resolve(), 10000) : reject();
//     })
// }

// DownloadFile().then(()=> console.log('file download completed')).catch(()=>console.log("failed to download file"))



// function sum(a,b){
//     if(a+b == 3){
//         throw new Error("please dont put 1 and 2"); 
//     }else{
//         return a+b;
//     }
    
// }

// try{
//     console.log(sum(1,2));
// }catch(err){
//     console.log(`${err.message}`);
// }


// NORMAL CALLBACK 
// function step1(callback){
//     let status = 200;
//     status == 200 ? callback() :  (() => { throw new Error('Fetching Failed')})();
//     // if(status == 200){
//     //     callback()
//     // }else{
//     //     throw new Error('failed')
//     // }}
// }
// function step2(callback){
//     let status = 200;
//     status == 200 ? callback() : (() => { throw new Error("Loading Failed")})();
//     // if(status == 200){
//     //     callback()
//     // }else{
//     //     throw new Error('failed')
//     // }
// }

// function step3(callback){
//     let status = 200;
//     status == 200 ? callback() : (() => { throw new Error("Downloading Failed")})();
//     // if(status == 200){
//     //     callback()
//     // }else{
//     //     throw new Error('failed')
//     // }
// }

// try{
//     step1(function(){
//         step2(function(){
//             step3(function(){
//                 console.log("All steps completed successfully")
//             })
//         })
//     })
// }catch(err){
//     console.log(`${err}`)   
// }
// NORMAL CALLBACK 


// PROMISE

// PROMISE


// PROMISE
// step1().then(step2).then(step3).then(()=> console.log('all steps completed')).catch(()=>console.log('failed'))

//ASYNC AWAIT
// async function completeAll(){
//     const res1 = await step1();
//     const res2 = await step2();
//     const res3 = await step3();
//     console.log(res1)
//     console.log(res2)
//     console.log(res3)
// }

// completeAll()

// step1(function(a){
//     step2(a,function(b){
//         step3(b,function(c){
//             console.log('all 3 steps completed')
//         })
//     })
// })
 
// const obj = {};
// console.log(typeof(obj))

// CALL HELL
// console.log('after 0 seconds') 
// setTimeout(function(){
//     console.log('after 5 seconds')
//     setTimeout(function(){
//         console.log('after 10 seconds')
//         setTimeout(function(){
//             console.log('after 15 seconds')
//         },5000)
//     },5000)
// },5000)
// CALL HELL
  
// PROMISE
// const mypromise = new Promise((resolve,reject)=>{
//     let status = 209;
//     status == 200 ? resolve("success") : reject("failed to load");
// })
// mypromise.then((respond)=> console.log('hello '+respond)).catch((error)=>console.log('failed '+error))
// PROMISE

// MAKE A SYNC AND ASYNC FUNCTION WHICH DO A CALCULATION AND RETURN THE RESULT AFTER 10 SECONDS
// function sum(a,b){
//     const result = a+b;
//     return new Promise((resolve,reject)=> setTimeout(()=> reject('oh no!!'), 1000 ) )
// }
// sum(10,10).then((result)=>console.log('result is '+result)).catch((error)=>console.log(error));


// async function sum(a,b){
//     const result = a+b;
//     return new Promise((resolve,reject)=> setTimeout(()=> reject(), 5000) )
// }

// async function getData(){
//     try{
//         const result = await sum(10,10);
//         console.log(result);
//     }
//     catch{
//         console.log('failed to load script')
//     }
// }

// getData();

