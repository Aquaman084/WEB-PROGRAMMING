let btn = document.createElement("button");
btn.style.width = "100px"
btn.style.height = "50px"
btn.textContent = "Button"
btn.style.backgroundColor = "red";
btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor="green";
})
document.body.appendChild(btn);
