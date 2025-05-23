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

console.clear();

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

function step1(callback){
    let status = 200;
    if(status == 200){
        callback()
    }else{
        throw new Error('failed')
    }
}
function step2(callback){
    let status = 201;
    if(status == 200){
        callback()
    }else{
        throw new Error('failed')
    }
}

function step3(callback){
    let status = 200;
    if(status == 200){
        callback()
    }else{
        throw new Error('failed')
    }
}

// CALLBACK HELL

try{
    step1(function(){
        step2(function(){
            step3(function(){
                console.log("All steps completed successfully")
            })
        })
    })
}catch(err){
    console.log(`some error occured ${err}`)   
}


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