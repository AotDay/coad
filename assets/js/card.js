"use strict";{let o=Math.floor(3*Math.random());var card=document.getElementsByClassName("card");function myheadler(t){var e=document.getElementById("card0"),a=document.getElementById("card1"),n=document.getElementById("card2"),r=document.getElementById("shuffle");t.target==r?(o=Math.floor(3*Math.random()),e.textContent="",a.textContent="",n.textContent=""):t.target==e&&0==o||t.target==a&&1==o||t.target==n&&2==o?t.target.innerHTML="<img src='/assets/images/atari.png' alt=''>":t.target!=e&&t.target!=a&&t.target!=n||(t.target.innerHTML="<img src='/assets/images/hazure.png' alt=''>")}window.onload=function(){var e=document.querySelectorAll("*");for(let t=0;t<e.length;t++)e[t].onclick=myheadler}}