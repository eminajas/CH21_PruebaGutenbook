


let txtNombre = document.getElementById("txtNombre");
let txtemail =  document.getElementById("txtemail");
let txtNumber = document.getElementById("txtNumber");
let txtMensaje = document.getElementById("txtMensaje");


//mensajes validación//

let messageNombre = document.getElementById("messageNombre")
let messageNumber = document.getElementById("messageNumber")
let messageEmail = document.getElementById("messageEmail")
let messageMensaje = document.getElementById("messageMensaje")

//mensajes validacion//

const submit = document.getElementsByClassName('form-contact')[0];


let idTimeout;

let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmit")

//Expresiones para validar//

let regexName = /^([a-zA-Z]{1})[\w]{2,}$/;
let regexNumber = /^(?!(\d)\1{7})[\+]?[52]?[1]?[\s]?((\d{3}[\s]?){2}\d{4}|\d{10})$/;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
let regexMessage = /^.{20,}$/;

//Expresiones para validar//


//funciones para validar//

function validarNombre(){
    return (regexName.test(txtNombre.value))
}//validarNombre

//valida que la entrada sea email
function validarEmail(){
    return (regexEmail.test(txtemail.value))
}//ValidarEmail

//valida que la entrada sea telefono
function validarNumber(){
    return (regexNumber.test(txtNumber.value))
}//validarNumber

//valida longitud de cadena de mensaje
function validarMensaje(){
    return (regexMessage.test(txtMensaje.value))
}//validarMensaje

//funciones para validar//





btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);

    if ((! validarNombre()) || (! validarEmail()) || (! validarNumber()) || (! validarMensaje())) {
        if (! validarNombre()){
            messageNombre.style.display = "block"
            txtNombre.style.border = "red thin solid"
        } else{
            messageNombre.style.display = "none"
        }//validarNombre

        if (! validarEmail()){
            messageEmail.style.display = "block"
            txtemail.style.border = "red thin solid"
        } else{
            messageEmail.style.display = "none"
        }//validarMensaje

        if (! validarNumber()){
            messageNumber.style.display = "block"
            txtNumber.style.border = "red thin solid"
        } else{
            messageNumber.style.display = "none"
        }//validarEmail

        if (! validarMensaje()){
            messageMensaje.style.display = "block"
            txtMensaje.style.border = "red thin solid"
        } else{
            messageMensaje.style.display = "none"
        }//ValidarMensaje



        idTimeout = setTimeout(function(){
         
            // messageNombre.style.display = "none"
            txtNombre.style.border = ""
            // messageEmail.style.display = "none"
            txtemail.style.border = ""
            // messageNumber.style.display = "none"
            txtNumber.style.border = ""
            // messageMensaje.style.display = "none"
            txtMensaje.style.border = ""
        }, 4000);

        return false;
    } else{
            txtNombre.value = "";
            txtemail.value = "";
            txtNumber.value = "";
            txtMensaje.value = "";
        }//if ! validaciones

    txtNombre.style.border = "";
    messageNombre.style.display = "none"
    txtemail.style.border = "";
    messageEmail.style.display = "none"
    txtNumber.style.border = "";
    messageNumber.style.display = "none"
    txtMensaje.style.border = "";
    messageMensaje.style.display = "none"

    
    txtNombre.focus();
    console.log(txtNombre.value);

    //e.preventDefault();
    console.log("Click");

    //para que se escriban las instrucciones html
    let ebody= `
                <b>Nombre: </b>${txtNombre.value}<br>
                <b>email: </b>${txtemail.value}<br>
                <b>telefono: </b>${txtNumber.value}<br>
                <b>mensaje: </b>${txtMensaje.value}<br>
                `

    Email.send({
        SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
        To : txtemail.value,
        From : "tortillajuden@gmail.com",
        Subject : "Gracias por contactarnos con nosotros en un plazo maximo de 2 dias nos pondremos en contacto contigo"+txtemail.value,
        Body : "Por contactarnos de esta forma recibe un codigo de descuento en tu proxima compra. CODE= ASDASFSDHFS41526265"
    }).then(
        message => 
        Swal.fire(
          'Lo más pronto nos pondremos en contacto!',
          'haz clic para salir!',
          'success'
        )
    );

    //codigo para enviar email
    Email.send({
        SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
        To : 'tortillajuden@gmail.com',
        From : "tortillajuden@gmail.com",
        Subject : "Test email"+ txtemail.value,
        Body : ebody
    })
});


//evento BLUR
txtNombre.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNombre.value = txtNombre.value.trim();
    event.target.value = event.target.value.trim();
});

txtemail.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtNumber.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtMensaje.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

//evento BLUR







