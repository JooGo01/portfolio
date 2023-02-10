//Declare var

let uname;
let mail;
let mesage;
let phone;
let submit=document.getElementById("btnSend");

//Read input

function agarravalor(){

    uname=document.getElementById("idname").value;
    mail=document.getElementById("idemail").value;
    phone=document.getElementById("idphone").value;
    mesage=document.getElementById("idtext").value;

}

//Send email

function sendEmail(e){

    agarravalor(); 

    Email.send({
        Host : "smtp.gmail.com",
        Username : maail,
        Password : pass,
        To : maail,
        From : maail,
        Subject : "Contact Form",
        Body : `Name: ${uname} <br/> Email: ${mail} <br/> Phone:${phone} <br/> Message: ${mesage}`
    }).then(
    message => alert("Mail sent succesfully")
    ).catch(er=>console.log(er))

    e.preventDefault();
}



//Adding event

submit.addEventListener("click", e=>sendEmail(e));