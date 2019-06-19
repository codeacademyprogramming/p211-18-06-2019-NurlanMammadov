'use strict';

const inputs = [...document.getElementsByTagName('input')];
const platform = document.getElementById('platform');
const circle = document.getElementById('circle');
const img = document.querySelector('#circle img');
const img2 = document.querySelector('#platform img');
const count = document.getElementById('count');
let property;
let timer = inputs[5].value;
let inter;

inputs.forEach((item)=>{
    item.onchange = function(){
    platform.style.backgroundColor = inputs[0].value;
    circle.style.backgroundColor = inputs[1].value;
    img.src = inputs[2].value;
    img2.src = inputs[3].value;
    circle.style.width = inputs[4].value +'px';
    circle.style.height = inputs[4].value +'px';
    timer = inputs[5].value;
    count.innerText = timer + ' sec';
     moving(circle, timer)
}});    

function moving(item,time){
let i = 50;
let j = 350;  
clearInterval(inter);
inter = setInterval(function(){
    if(i <= 350){
        item.style.top = i + 'px';
    i ++}
    else{
        if(j>=50){
        item.style.top = j + 'px';
    j--}
        else{
        i = 50;
        j = 350;  
    }}
},time);};

moving(circle,timer)


