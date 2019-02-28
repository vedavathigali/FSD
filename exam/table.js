 
 let un='';
 let ucategory='';
 let p='';
 let sk=''; 
 function save()
 {
     un = document.getElementById('uname').value;
    ucategory =document.getElementById("category").value;
    p =document.getElementById("price").value;
    sk =document.getElementById("skv").value;
    console.log('Save function called');
localStorage.setItem('name', un);
   localStorage.setItem('category',ucategory);
   localStorage.setItem('price',p);
   localStorage.setItem('skn',sk);
  getdata();
}
function getdata()
{
 const n1=localStorage.getItem('name');
   const c1=localStorage.getItem('category');
   const p1=localStorage.getItem('price');
   const s1=localStorage.getItem('skn');
   document.getElementById('t1').innerHTML=n1.value;

   

}
/*function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];
  
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // cells creation
    for (var j = 0; j <= 2; j++) {
      // table row creation
      var row = document.createElement("tr");
  
      for (var i = 0; i < 2; i++) {
        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("name");
        var cellText1 = document.createTextNode(category);
        var cellText2=document.createTextNode(price);
       var celltext3=document.
  
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      //row added to end of table body
      tblBody.appendChild(row);
    }
  
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    tbl.setAttribute("border", "2");
  }*/