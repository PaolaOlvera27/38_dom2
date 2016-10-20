/// Generar arreglo de los inputs
var  inputs =document.getElementsByClassName ("input-box");
var i;
//Funcion que valida cada funcion de los inputs
function validateForm() {
		validateName();
		validateLastename();
		validateEmail();
		validatePassword();
		validateSelect();
}
//Funciones de validacion
function validateName() {
		var name = document.getElementsById("name");
		var space = /^\s*$/;
		var regexname = /^([a-z ñáéíóú]{2,60})$/i;

}
function validateLastname() {
		var lastname = document.getElementsById("lastname");
		var space = /^\s*$/;
		var regexname = /^([a-z ñáéíóú]{2,60})$/i;
}
function validateEmail() {
		var email = document.getElementsById("input-email");
		var space = /^\s*$/;
		var regexemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // regex de email
}
function validatePassword() {
		var name = document.getElementsById("input-password");
		var space = /^\s*$/;
		var regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/; // regex para passsword de sólo letras y números sin espacios u otros caracteres
}
function validateSelect() {
		var select = document.getElementsByTagName("select").selectedIndex;

		if( select == null || select == 0 ) {
		  return false;
		}
}
