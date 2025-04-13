let txt = document.createElement("input");
let btn = document.createElement("button");
let list = document.createElement("ul");
txt.setAttribute("type", "text");
txt.setAttribute('placeholder', 'Enter your text here'); 
txt.style.marginLeft = "600px";
btn.style.marginLeft = "670px";
txt.style.width = '200px';
txt.style.height = '50px';
btn.style.width = '50px';
btn.style.height = '25px';
btn.textContent = 'Click';
btn.addEventListener("dblclick",function(){
    let l = document.createElement("li");
    l.textContent = txt.value
    list.appendChild(l);
    txt.value="";
})
document.body.appendChild(txt);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(btn);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(list);
