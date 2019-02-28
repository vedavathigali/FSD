const addRowTable=()=>{
    var table=document.getElementById('table');
    newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell2=newrow.insertCell(0);
cell3=newrow.insertCell(0);
cell4=newrow.insertCell(0);
cell5=newrow.insertCell(0);
const pname=document.getElementById('uname').value;
const pcat=document.getElementById('category').value;
const pprice=document.getElementById('price').value;
const psku=document.getElementById('skv').value;
const quantity=document.getElementById('quantity').value;
cell1.innerHTML=pname;
cell2.innerHTML=pcat;
cell3.innerHTML=pprice;
    cell4.innerHTML=psku;
    cell5.innerHTML=quantity;
}
const deleteRowTable=()=>{
    
}
