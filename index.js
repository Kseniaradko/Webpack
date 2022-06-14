import '../index.css'; 

console.log("Hello World!");

import JS_IMAGE from '../assets/js.png';

const textJS = document.createElement('h1');
textJS.textContent = 'I love JavaScript';

const JSImageHTML = document.createElement('img');
JSImageHTML.src = JS_IMAGE;
JSImageHTML.className = 'image';
document.body.append(textJS, JSImageHTML);