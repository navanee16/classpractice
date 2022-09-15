var count = 0;
document.querySelector(".inc").onclick=function(){
    count++;
 document.querySelector(".num").innerText=count   
}
document.querySelector(".dec").onclick=function(){
    count--;
 document.querySelector(".num").innerText=count   
}

document.querySelector(".res").onclick=function(){
    count=0;
 document.querySelector(".num").innerText=count   
}


// shift
var x =[1,2,3,4,5];
console.log(x.shift());
console.log(x);


// even number
var x =[1,2,3,4,5,6,7,8,9];
for(i=0; i<=x.length; i++){
    if(x[i]%2==0){
        console.log(x[i]);
    }
}

// date,time
var button1 =document.querySelector(".btn1");
var button2 =document.querySelector(".btn2");
var head =document.querySelector(".heading");
var head1 = document.querySelector(".heading1");

button2.addEventListener("click",()=>{
    let x =new Date();
    let day =myfunction(x.getDate())
    console.log(day);

    let month =myfunction(x.getMonth())
    console.log(month);

    let year =myfunction(x.getFullYear())
    console.log(year);

    let display=`${day}/${month}/${year}`
    head.innerText=display
})
function myfunction(btn0){
    return btn0<10 ? `0${btn0}`: btn0
}

button1.addEventListener("click",()=>{
    let y =new Date();
    let hour =y.getHours()
    console.log(hour);

    let min =y.getMinutes()
    console.log(min);

    let sec =y.getSeconds()
    console.log(sec);

    let display=`${hour}:${min}:${sec}`
    head1.innerText=display
})


