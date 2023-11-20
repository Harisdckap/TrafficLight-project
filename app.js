let container=document.createElement("div");
container.setAttribute("class","container");

let container2=document.createElement("div");
container2.setAttribute("class", "container2");

let Btn1=document.createElement("button");
Btn1.setAttribute("id","Btn1");

let Btn2=document.createElement("button");
Btn2.setAttribute("id","Btn2");

let Btn3=document.createElement("button");
Btn3.setAttribute("id","Btn3");

let div=document.createElement("div")
div.setAttribute("id","div")


container.append(container2)
container2.append(Btn1,Btn2,Btn3,div);
document.body.append(container);


//----------------------------------------Time out-----------------------------------

// var red=document.getElementById("Btn1");
// var yellow=document.getElementById("Btn2");
// var green=document.getElementById("Btn3");

// function TrafficSignal () {
//     var red=document.getElementById("Btn1");
//     var yellow=document.getElementById("Btn2");
//     var green=document.getElementById("Btn3");
//     red.style.backgroundColor="red"
  
//     setTimeout(function () {
//         red.style.backgroundColor="red"
//         green.style.backgroundColor=""
//         yellow.style.backgroundColor=""
       
//     },2000);

//     setTimeout(function () {
//         yellow.style.backgroundColor="yellow"
//         green.style.backgroundColor=""
//         red.style.backgroundColor=""

//     },7000);

//     setTimeout(function () {
       
//         green.style.backgroundColor="green"
//         red.style.backgroundColor=""
//         yellow.style.backgroundColor=""
    
//     },10000);
// }





// function TrafficSignal(){
// var x=10;

// if(x>10){
//     red.style.backgroundColor="red"
//     x++
// }
// else if(x>10){
//     green.style.backgroundColor="green"
//     x--
// }
// else if(x==0){
//     yellow.style.backgroundColor="yellow"
// }


let b=0;
let Red=10;

function Signal(){

if(b<11){

    // Btn1.style.backgroundColor="red"
    // Btn2.style.backgroundColor=""
    // Btn3.style.backgroundColor=""
    Btn1.classList.add("colorr")
    Btn3.classList.remove("colorg")
    div.innerText=Red;
    Red--;
    
}

else if(b>=11 && b<=16){
    if(Red<0){
    Red=5
    }
    // Btn1.style.backgroundColor=""
    // Btn2.style.backgroundColor="yellow"
    // Btn3.style.backgroundColor=""
    Btn1.classList.remove("colorr")
    Btn2.classList.add("colory")
    div.innerText=Red;
    Red--;
}

else if(b>=17 && b<=28){
    if (Red<0) {
        Red=10
    }
    // Btn1.style.backgroundColor=""
    // Btn2.style.backgroundColor=""
    // Btn3.style.backgroundColor="green"
    Btn2.classList.remove("colory")
    Btn3.classList.add("colorg")
    div.innerText=Red;
    Red--;
   

}

b++

if(b==28){
     b=0;
     Red=10;
}
}



setInterval(Signal,1000);

















// Btn1.addEventListener("mouseenter",MouseOver1);
// Btn1.addEventListener("mouseleave",MouseOut);

// Btn2.addEventListener("mouseenter",MouseOver2);
// Btn2.addEventListener("mouseleave",MouseOut);

// Btn3.addEventListener("mouseenter",MouseOver3);
// Btn3.addEventListener("mouseleave",MouseOut);


// function MouseOver1(){
//      Btn1.style.background="red";

// }
// function MouseOver2(){
//     Btn2.style.background="yellow";
// }

// function MouseOver3(){
//     Btn3.style.background="darkgreen";
// }

// function MouseOut(){
//     Btn1.style.background="";
//     Btn2.style.background="";
//     Btn3.style.background="";
// }