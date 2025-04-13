let table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "200px"
table.style.height = "200px"
table.style.margin = "auto";
for(let i=0;i<3;i++){
    let row = table.insertRow();
    for(let j=0;j<3;j++){
        let cell = row.insertCell(j);
        cell.style.border = "2px solid black";
    }
}
document.body.appendChild(table);
