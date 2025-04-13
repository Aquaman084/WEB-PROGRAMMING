let txt = document.createElement("input");
let txt1 = document.createElement("input");
txt.style.width = "200px";
txt.style.height = "50px";
txt1.style.width = "200px";
txt1.style.height = "50px";
txt.style.display = "inline-block";
txt1.style.display = "inline-block";
txt1.style.marginLeft = "10px";  
txt1.setAttribute('placeholder','Enter your text here');
var count=0;
txt1.addEventListener("keydown",function(){
    count++;
    txt.value=String(count);
})
document.body.appendChild(txt1);
document.body.appendChild(txt);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(list);
