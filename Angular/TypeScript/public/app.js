"use strict";
// const anchor = document.querySelector("a")!;
//does not work without !
// console.log(anchor.href);
// if(anchor){
//     console.log(anchor.href);
// }
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
//input
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
