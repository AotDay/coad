"use strict";{function showPassword(){var e=document.getElementById("result"),t=document.getElementById("numbers-checkbox"),n=document.getElementById("symbols-checkbox"),o="abcdefghijklmnopqrstuvwxyz";let d="",s=o+o.toUpperCase();t.checked&&(s+="0123456789"),n.checked&&(s+="!#$%&()");for(let e=0;e<a.value;e++)d+=s[Math.floor(Math.random()*s.length)];e.textContent=d}const a=document.getElementById("slider"),b=document.getElementById("btn");a.addEventListener("input",()=>{document.getElementById("password-length").textContent=a.value}),b.addEventListener("click",()=>{showPassword()}),showPassword()}