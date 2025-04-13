let txt = document.createElement("textarea");
txt.style.width = "200px"
txt.style.marginLeft = "200px";
txt.style.height = "200px"
txt.textContent = "Text area"
txt.style.backgroundColor = "green";
txt.addEventListener("focus",function(){
    txt.style.backgroundColor="yellow";
})
document.body.appendChild(txt);
