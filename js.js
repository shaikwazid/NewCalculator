// btn.onclick = ()=>{
//     let a = prompt("what  is  your name");

//     if(a == a){
//         document.getElementById("demo").innerHTML += a;
//     }
// }


// function f(){
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;


//     var c = (parseInt(a)-(parseInt(b)));

//     return c;

// }


// function f1(){
//     var result = f();

//     document.getElementById("result").value = result;
    
// }


// function addallargs(...args){
//     let sumofargs = 0;
//     let i = 0;

//     while(i < args.length){
//         sumofargs += args[i];
//         i++;
//     }
//     return sumofargs;
// }

// let total = addallargs(233,5,5,65,4);
// console.log(total);


// let String = "";

// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             String = eval(String);
//             document.querySelector('input').value = String;
//         }else if(e.target.innerHTML == 'C'){
//             String = "";
//             document.querySelector('input').value = String;
//         }else{
//             console.log(e.target);
//             String = String+e.target.innerHTML;
//             document.querySelector('input').value = String;
//         }
//     })
// })


let String = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      String = eval(String);
      document.querySelector('.input').value = String;
    }else if(e.target.innerHTML == 'C'){
      String = "";
      document.querySelector('.input').value = String;
    }else{
      console.log(e.target);
      String = String+e.target.innerHTML;
      document.querySelector('.input').value = String;
    }
   })
})

// from here different




