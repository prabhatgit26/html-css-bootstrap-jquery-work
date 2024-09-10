let btn=document.querySelector('button');

btn.addEventListener('click',()=>{
    console.log('text');
});

let div=document.querySelector('div');
div.addEventListener('mouseover',(e)=>{
    document.getElementById('fdiv').style.background='blue';
    console.log(e);
});


// const btn=document.querySelector("button");
//     function random(number){
//         return Math.floor(Math.random () *(number+1));
//     }
//     btn.addEventListener("click", ()=>{
//         const 
//     document.body.style.backgroundcolor=yellow;
// });

let body=document.querySelector('bdy');
body=addEventListener('click',()=>{
    document.getElementById('bdy').style.background='black';
});

let button=document.querySelector('btn1');
body.addEventListener('click',()=>{
    document.getElementById('bdy').style.background='black';
});