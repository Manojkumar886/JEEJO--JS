const myValidation=()=>
{
    let a=document.forms['irctc'].flatno.value;
    let b=document.forms['irctc'].streetname.value;
    let c=document.forms['irctc'].statename.value;
    let d=document.forms['irctc'].pincode.value;
    let e=document.forms['irctc'].email.value;
    let f=document.forms['irctc'].pass.value;

    let activation=true

    if(a.length<=0)
    {
        document.getElementById('flatno1').innerHTML="Flat input should not be empty"

        activation=false;

    }
    else if(!(/^[0-9A-Za-z/s]+$/).test(a))
    {
        document.getElementById('flatno1').innerHTML="flat no input followed by (flatno/doorno/address)";
        activation=false;
    }

    if(e.length<=0)
    {
        document.getElementById('email1').innerHTML="email id shound not be empty";
        activation=false;
    }


    if(f.length<=0)
    {
        document.getElementById('pass1').innerHTML="password should not be empty";
        activation=false;   
    }
    else if(!((/^[a-zA-Z0-9!@#$%^&*]{6,15}$/).test(f)))
    {
        document.getElementById('pass1').innerHTML="password using special charcter and min 6/Max 15 letter want";
        activation=false;          
    }
    return activation;
    
}