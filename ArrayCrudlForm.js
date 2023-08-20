let VegetableName=new Array("Tomato","Onion","Brinjal","CauliFlower","BeetRoot","Carrot")

let Adding=()=>
{
    let newvegetable=document.getElementById('uservalue').value;

    // VegetableName.unshift(newvegetable);
    // VegetableName.unshift(newvegetable)
    alert(newvegetable+" your vegetable value is added successfully");
    Listing1()
}

let Listing1=()=>
{
    let listall="";

    VegetableName.map((data)=>
    {
        listall+="<tr><td>"+data+"</td></tr>"
    })
    document.getElementById('liveValues').innerHTML="<table align='center' cellpadding='6px' cellspacing='10px'><thead><tr><th>Vegetable Names</th></tr></thead><tbody>"+listall+"</tbody></table>"
}


let Updating=()=>
{
    let index=document.getElementById('uservalue').value;

    let newvalue=prompt("please tell us which value you want update/replace")

    VegetableName[index]=newvalue;//vegetable[1]=green chilly;

    Listing1()
}

let Removing=()=>
{
    let deletevalue=document.getElementById('uservalue').value;
    // alert(VegetableName[deletedvalue]+" has been deleted successfully")
    // delete VegetableName[deletedvalue];
    
  VegetableName=VegetableName.filter((getting)=>
  {
        return getting!==deletevalue;
  })
    Listing1()
}
 var Searching=()=>
 {
    let checkingvalue=document.getElementById('uservalue').value;
    for(let pos=0;pos<VegetableName.length;pos++)
    {
        if(VegetableName[pos]===checkingvalue)
        {
            return pos; 
            break;
        }
    }
 }



