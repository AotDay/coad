"use strict";{const a=[];let e=document.getElementById("table");for(let c=0;c<4;c++){let n=document.createElement("tr");for(let l=0;l<4;l++){let e=document.createElement("td"),t=4*c+l;e.className="tile",e.index=t,e.value=t,e.textContent=0==t?"":t,e.onclick=click,n.appendChild(e),a.push(e)}e.appendChild(n)}for(let e=0;e<1e3;e++)click({target:{index:Math.floor(16*Math.random())}});function click(e){e=e.target.index;0<=e-4&&0==a[e-4].value?swap(e,e-4):e+4<16&&0==a[e+4].value?swap(e,e+4):e%4!=0&&0==a[e-1].value?swap(e,e-1):e%4!=3&&0==a[e+1].value&&swap(e,e+1)}function swap(e,t){var l=a[e].value;a[e].textContent=a[t].textContent,a[e].value=a[t].value,a[t].textContent=l,a[t].value=l}}