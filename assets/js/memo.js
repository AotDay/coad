"use strict";{const a=document.getElementById("text"),b=document.getElementById("save"),c=document.getElementById("clear"),d=document.getElementById("message");null===localStorage.getItem("memo")?a.value="":a.value=localStorage.getItem("memo"),b.addEventListener("click",()=>{d.classList.add("memo_appear"),setTimeout(()=>{d.classList.remove("memo_appear")},1e3),localStorage.setItem("memo",a.value)}),c.addEventListener("click",()=>{!0===confirm("本当に削除しますか？")&&(a.value="",localStorage.removeItem("memo"))})}