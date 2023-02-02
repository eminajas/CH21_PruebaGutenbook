

let signInBtn = document.querySelector("#sign-in-btn");
let signUpBtn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container-register");

//User - Login variables
let loged 
let admin  
let users = []; 
let pass
let userlogged

// Arreglo de usuarios
//usuarios = new Map ();

//usuarios.set('admin',{"correo":"admin@gutenbook.com","tel":"5562441585", "contraseña":"P4$$w0rd"});
//usuarios.set('pepito',{"correo":"pepepecas@gmailcom","tel":"5519451524", "contraseña":"Contraseña.123"});


signUpBtn.addEventListener('click', () => {
    
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});



// VARIABLES REGISTRO
let txtNombreUp = document.getElementById("txtNombreUp");
let txtEmailUp = document.getElementById("txtEmailUp");
let txtTelUp = document.getElementById("txtTelUp");
let txtContrasenaUp = document.getElementById("txtContrasenaUp");

// VARIABLES INGRESO
let txtNombreIn = document.getElementById("txtNombreIn");
let txtContrasenaIn = document.getElementById("txtContrasenaIn");

// BOTONES

let btnsubmitIn = document.getElementById("btnsubmitIn");//Ingreso
let btnsubmitUp = document.getElementById("btnsubmitUp");//Registro

let datosUsuarios = []; // new Array();



//mensajes validación//

let messageNombreUp1 = document.getElementById("messageNombreUp1")
let messageNombreUp2 = document.getElementById("messageNombreUp2")
let messageNombreUp3 = document.getElementById("messageNombreUp3")
let messageTelUp = document.getElementById("messageTelUp")
let messageEmailUp = document.getElementById("messageEmailUp")
let messageEmailUp2 = document.getElementById("messageEmailUp2")
let messageContrasenaUp1 = document.getElementById("messageContrasenaUp1")
let messageContrasenaUp2 = document.getElementById("messageContrasenaUp2")
let messageContrasenaUp3 = document.getElementById("messageContrasenaUp3")
let messageContrasenaUp4 = document.getElementById("messageContrasenaUp4")
let messageContrasenaUp5 = document.getElementById("messageContrasenaUp5")

let messageNombreIn1 = document.getElementById("messageNombreIn1")
let messageContrasenaIn1 = document.getElementById("messageContrasenaIn1")

//mensajes validacion//

//Bordes alertas//

let NombreBorder =  document.getElementById("NombreBorder");
let EmailBorder =  document.getElementById("EmailBorder");
let TelBorder =  document.getElementById("TelBorder");
let ContrasenaBorder =  document.getElementById("ContrasenaBorder");

let NombreBorderIn =  document.getElementById("NombreBorderIn");
let ContrasenaBorderIn =  document.getElementById("ContrasenaBorderIn");

//Bordes alertas//

// const submit = document.getElementsByClassName('form-contact')[0];


let idTimeout;

// let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmitUp")
let btnsubmitin = document.getElementById("btnsubmitIn")

//Expresiones para validar//

let regexName = /^([a-zA-Z]{1})[\w]{2,}$/;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
let regexTel = /^(?!(\d)\1{7})[\+]?[52]?[1]?[\s]?((\d{3}[\s]?){2}\d{4}|\d{10})$/;
let regexContrasena = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
//Expresiones para validar//


//funciones para validar//

function validarNombre(){
    return (regexName.test(txtNombreUp.value))
}//validarNombre

function validarUsuario(){
    return (usuarios.has(txtNombreUp.value))
}

function validarEmail(){
    return (regexEmail.test(txtEmailUp.value))
}//validarEmail

function validarTel(){
    return (regexTel.test(txtTelUp.value))
}//validarTel

function validarContrasena(){
    return (regexContrasena.test(txtContrasenaUp.value))
}//validarNumber

function validarprimerCaracter(){
    return (! isNaN(txtNombreUp.value.charAt(0)))
}


//funciones para validar//


btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);


    if ( (validarUsuario()) || (! validarNombre()) || (! validarEmail()) || (! validarTel()) || (! validarContrasena())) {

        btnsubmit.style.backgroundColor = "#ff6961"
        if (validarUsuario()) {
            messageNombreUp3.style.display = "block"
            NombreBorder.style.border = "#ff6961 medium solid"
        } else{
            messageNombreUp3.style.display = "none"
            NombreBorder.style.border = "#77dd77 medium solid"
        }
        
        if (! validarNombre()){


            if (validarprimerCaracter()) {
                messageNombreUp1.style.display = "block"
                NombreBorder.style.border = "#ff6961 medium solid"
            } else{
                messageNombreUp1.style.display = "none"
            }

            if (txtNombreUp.value.length < 3) {
                messageNombreUp2.style.display = "block"
                NombreBorder.style.border = "#ff6961 medium solid"
            } else{
                messageNombreUp2.style.display = "none"
            }

  
        } else{
            messageNombreUp1.style.display = "none"
            messageNombreUp2.style.display = "none"
          
          /*  NombreBorder.style.border = "#77dd77 medium solid"*/
        }//validarNombre

        if (! validarEmail()){
            messageEmailUp.style.display = "block"
            EmailBorder.style.border = "#ff6961 medium solid"
        } else{
            messageEmailUp.style.display = "none"
            EmailBorder.style.border = "#77dd77 medium solid"
        }//validarEmail

        if (! validarTel()){
            messageTelUp.style.display = "block"
            TelBorder.style.border = "#ff6961 medium solid"
        } else{
            messageTelUp.style.display = "none"
            TelBorder.style.border = "#77dd77 medium solid"
        }//validarTel

        if (! validarContrasena()){

            let mensajes = 0;

            if ((txtContrasenaUp.value.length < 8 || txtContrasenaUp.value.length > 20) && mensajes <3 ) {
                messageContrasenaUp1.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            } else{
                messageContrasenaUp1.style.display = "none"
            }

           if (! /\d/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp2.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            } else{
                messageContrasenaUp2.style.display = "none"
            }

            if (! /[A-Z]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp3.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            } else{
                messageContrasenaUp3.style.display = "none"
            }

            if (! /[a-z]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp4.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            } else{
                messageContrasenaUp4.style.display = "none"
            }

            if (! /[!@#$%^&*]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp5.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            } else{
                messageContrasenaUp5.style.display = "none"
            }

        } else{
            messageContrasenaUp1.style.display = "none"
            messageContrasenaUp2.style.display = "none"
            messageContrasenaUp3.style.display = "none"
            messageContrasenaUp4.style.display = "none"
            messageContrasenaUp5.style.display = "none"
            ContrasenaBorder.style.border = "#77dd77 medium solid"
        }//validarContrasena



        idTimeout = setTimeout(function(){
         
            // messageNombreUp1.style.display = "none"
            // messageNombreUp2.style.display = "none"
            // NombreBorder.style.border = ""
            // messageEmailUp.style.display = "none"
            // EmailBorder.style.border = ""
            // messageTelUp.style.display = "none"
            // TelBorder.style.border = ""
            // messageContrasenaUp1.style.display = "none"
            // messageContrasenaUp2.style.display = "none"
            // messageContrasenaUp3.style.display = "none"
            // messageContrasenaUp4.style.display = "none"
            // messageContrasenaUp5.style.display = "none"
            // ContrasenaBorder.style.border = ""
            btnsubmit.style.backgroundColor = "#84b6f4"
        }, 4000);

        return false;
    }//if ! validaciones


    NombreBorder.style.border = "";
    messageNombreUp1.style.display = "none"
    messageNombreUp2.style.display = "none"
    messageNombreUp3.style.display = "none"
    EmailBorder.style.border = "";
    messageEmailUp.style.display = "none"
    TelBorder.style.border = "";
    messageTelUp.style.display = "none"
    ContrasenaBorder.style.border = "";
    messageContrasenaUp1.style.display = "none"
    messageContrasenaUp2.style.display = "none"
    messageContrasenaUp3.style.display = "none"
    messageContrasenaUp4.style.display = "none"
    messageContrasenaUp5.style.display = "none"

   /*
    let elemento = `{
        "Usuario": "${txtNombreUp.value}",
        "Email": "${txtEmailUp.value}",
        "Telefono":"${txtTelUp.value}",
        "Contrasena":"${txtContrasenaUp.value}"
    }`;

    users.push(JSON.parse(elemento));
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users)) */
    
    	 let _registro = {
		usuario: txtNombreUp.value,
		nombre:"",
        correoElectronico: txtEmailUp.value,
        telefono: txtTelUp.value,
        contrasenia: txtContrasenaUp.value,
        administrador: ""
		}
		
		fetch('/api/usuarios/', {
		  method: "POST",
		  body: JSON.stringify(_registro),
		  headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json()) 
		.then(json => console.log(json))
		.catch(err => console.log(err));

    
    Swal.fire(
        `¡Gracias por registrarte ${txtNombreUp.value}!`,
        'haz clic en ok para continuar',
        'success'
      )

      txtNombreUp.value = "";
      txtEmailUp.value = "";
      txtTelUp.value = "";
      txtContrasenaUp.value = "";
  
      
      txtNombreUp.focus();
      
      for (let index = 0; index < users.length; index++) {
          agregarUsuarios(users[index])
      }

});//btnsubmit


/*
function agregarUsuarios(item){
    usuarios.set(item.Usuario,{"correo":item.Email,"tel":item.Telefono, "contraseña":item.Contrasena});
}

function extraerdato(item){
    try {
        pass = item.contraseña
    } catch (error) {
        console.error(error);
    }
     

} 

    try {
        var captura = JSON.parse(localStorage.getItem('users'));
    
    
        for (let index = 0; index < captura.length; index++) {
        users.push(captura[index]);

        for (let index = 0; index < users.length; index++) {
            agregarUsuarios(users[index])
        }
    
        }
    } catch (error) {
        console.error(error);
    }
*/
    
    btnsubmitIn.addEventListener("click", function(event){
        event.preventDefault();
        clearTimeout(idTimeout);
        
         	
         
// Aquí se debe cambiar el URL del servicio en el BackEnd
	 const URL_MAIN ='/api/usuarios/';
			
	    fetch(URL_MAIN, {
		  method: 'get'
		 }).then(function(response) {
			 response.json().then(function (user) {
			// console.log(user);
		    //console.log(user.length);
			 
			// Array.from(json).forEach((usuario) => {
			 for (let i=0; i<user.length ;i++   ){
				 
				if (txtNombreIn.value == user[i].usuario && txtContrasenaIn.value == user[i].contrasenia){
					
			  //  admin = sessionStorage.setItem ("admin", true);
                userlogged = sessionStorage.setItem("userlogged", txtNombreIn.value)
                location.href='./index.html';

					 
					  console.log("logeado como admin");
					
					  break;
				
					
				}else{
            
            console.log("Error de datos")
            Swal.fire(
                `Usuario o contraseña no validos`,
                'haz clic en ok para continuar',
                'error'
              )//alerterror
        }
        txtNombreIn.focus();

				 
			 }              
			                      
			      
			  //          }); // foreach
			        });//then
			    }).catch(function(err) {
			        console.log(err);
			    });
			  
			   
			


     //   let arreglodatos = usuarios.get(txtNombreIn.value)
       // let nombredeuduario = usuarios.has(txtNombreIn.value)
        
      //  extraerdato(arreglodatos);

        if ((nombredeuduario) && (pass == (txtContrasenaIn.value)) ) {
            if(txtNombreIn.value == "admin"){
                
                admin = sessionStorage.setItem ("admin", true);
                userlogged = sessionStorage.setItem("userlogged", txtNombreIn.value)
                location.href='./index.html';


                console.log("logeado como admin")
            }else{

                loged = sessionStorage.setItem("loged",true);
                userlogged = sessionStorage.setItem("userlogged", txtNombreIn.value)
                console.log("logeado");
                location.href='./index.html';
            }
        }else{
            
            console.log("Error de datos")
            Swal.fire(
                `Usuario o contraseña no validos`,
                'haz clic en ok para continuar',
                'error'
              )//alerterror
        }

        txtNombreIn.focus();

        });

/*------------INICIO DE SESIÓN------------*/
/*
btnsubmitIn.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);


    if ((! validarNombre(txtNombreIn.value)) ||  (txtContrasenaIn.value.length < 8 || txtContrasenaIn.value.length > 20)) {

        btnsubmitIn.style.backgroundColor = "#ff6961"
        if (! validarNombre(txtNombreIn.value)){
            messageNombreIn1.style.display = "block";
            NombreBorderIn.style.border = "#ff6961 medium solid"

  
        } else{
          
            messageNombreIn1.style.display = "none"
            NombreBorderIn.style.border = "#77dd77 medium solid"
            
        }//validarNombre


        if (txtContrasenaIn.value.length < 8 || txtContrasenaIn.value.length > 20){
            messageContrasenaIn1.style.display = "block"
            ContrasenaBorderIn.style.border = "#ff6961 medium solid"

        } else{
            messageContrasenaIn1.style.display = "none"
            ContrasenaBorderIn.style.border = "#77dd77 medium solid"
        }//validarContrasena


        idTimeout = setTimeout(function(){
         

            btnsubmitIn.style.backgroundColor = "#84b6f4"
        }, 4000);

        return false;
    }//if ! validaciones

    NombreBorderIn.style.border = "";
    messageNombreIn1.style.display = "none"

    ContrasenaBorderIn.style.border = "";
    messageContrasenaIn1.style.display = "none"

    let registro = localStorage.getItem("datosUsuarios")
    registro = JSON.parse(registro)
    let encontrado = false;
    if (registro == null) {
        encontrado = false;
    } else {
    registro.forEach(element => {
        if (element.Usuario == txtNombreIn.value && element.Contrasena == txtContrasenaIn.value) {
            encontrado = true;
        }
    });
    }
    
    
    if (encontrado == true) {
        /*Swal.fire(
            `¡Bienvenido ${txtNombreIn.value}!`,
            'haz clic en ok para continuar',
            'success'
          )//alertsucess
          sessionStorage.setItem('usuarioActivo',txtNombreIn.value);
          txtNombreIn.value = "";
          txtContrasenaIn.value = "";
          location.href='./index.html';
    } else{
        Swal.fire(
            `Usuario o contraseña no validos`,
            'haz clic en ok para continuar',
            'error'
          )//alerterror
    }


    txtNombreIn.focus();
  
*/

//btnsubmit

/*------------INICIO DE SESIÓN------------*/


txtNombreIn.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtNombreIn.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});

txtContrasenaIn.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtContrasenaIn.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});


txtNombreUp.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtNombreUp.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});

txtEmailUp.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtEmailUp.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});

txtContrasenaUp.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtContrasenaUp.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});

txtTelUp.addEventListener("focus", function (event){
    event.preventDefault();
    clearTimeout(idTimeout);
    before = event.target.parentElement.style.border
    event.target.parentElement.style.border = "#84b6f4 medium solid"
    txtTelUp.addEventListener("blur", function (event){
        event.preventDefault();
        event.target.value = event.target.value.trim();
        
        event.target.parentElement.style.border = before
         
    });
     
});




function myFunctionUp(){
    var x = document.getElementById("txtContrasenaUp");
    var y = document.getElementById("hide3");
    var z = document.getElementById("hide4");

    if (x.type ==="password" ) {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";

    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
    
}



function myFunctionIn(){
var x = document.getElementById("txtContrasenaIn");
var y = document.getElementById("hide1");
var z = document.getElementById("hide2");

if (x.type ==="password" ) {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";

} else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
}

}











