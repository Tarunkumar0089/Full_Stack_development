// function fun(){
//     console.log("This is a sample function.");
// }
// fun();

// fun();
// function fun(){
//     console.log("This is a sample function.");
// }

// a();
// let a=function(){
//     console.log("This is a sample function.");
// }

// let fun=()=>{
//     console.log("This is a sample function.");
// }
// fun();

// function add(a,b){
//     console.log(a+b);
// }
// add();
// add(5,10);


// function add(a,b){
//     return a+b;
// }
// console.log(add());
// console.log(add(5,10));

// let per=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let values=Math.floor(Math.random()*10);
//         if(values>5){
//             resolve("Promise resolved successfully");
//         }
//         else{
//             reject("Promise");
//         }
//     },2000);
// });
// per.then((message)=>{
//     console.log(message);
// }
// ).catch((message)=>{
//     console.error("error message: "+message);
// });


// var tarun = document.querySelector("#hi");
// console.log(tarun);
// tarun.style.color = 'red';
// tarun.innerHTML="Tarun sharma";

// tarun.addEventListener('click',function(){
//     tarun.style.color='blue';
//     tarun.innerHTML='You clicked me!';
// })



var inner=document.getElementById("inner");
var outer=document.getElementById("outer");


outer.addEventListener('click',function(){
    console.log("outer clicked");
    
})

inner.addEventListener('click',function(e){
    console.log("inner clicked");
    e.stopPropagation();
})



