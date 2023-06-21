let begin=()=>
{
    mysampleitems={"foods":["idly","dhosa","parotta"]}

    localStorage.setItem("menucard",JSON.stringify(mysampleitems))
    alert("Menu item initialized")
}

let adding=()=>
{
    let newvalue=document.getElementById('item').value;

    var temporary=localStorage.getItem("menucard");

    // alert(temporary)


    let convertobject=JSON.parse(temporary);

    // alert(convertobject);

    alert(convertobject["foods"]+" before list of my items");

    convertobject["foods"].push(newvalue);

    alert(convertobject["foods"]+" after  list of my items");

    localStorage.setItem("menucard",JSON.stringify(convertobject))

    alert(newvalue+" has added to the local storage")

}