var boton_encriptar = document.querySelector("#boton_encriptar");
var boton_desencriptar = document.querySelector("#boton_desencriptar");
var munheco = document.querySelector(".munheco");
var sin_texto = document.querySelector(".sin_texto");
var texto_default = document.querySelector(".texto_default");
var mensaje_final = document.querySelector(".texto_modificado");
var solo_minusculas = true;
var sin_acentos = true;


function mensajeUsuario(){
	var cuadro_texto = document.querySelector(".cuadro_texto");
	return cuadro_texto.value;
}

function desaparecer(){
	munheco.classList.add("desaparecer");
	sin_texto.classList.add("desaparecer");
	texto_default.classList.add("desaparecer");
}


function detectar_acentos(texto) {
    var acentos = ["á","é","í","ó","ú"];
    for (i=0; i<acentos.length; i++) {
        if(texto.includes(acentos[i])){
           alert("No admite acentos");
            sin_acentos = false;
        };
    };
    return sin_acentos;	
}


function detectar_mayúsculas(texto) {
    if(texto != texto.toLowerCase()){
       alert("Solo admite minúsculas");
         solo_minusculas = false;
    };
    return solo_minusculas;
}


function encriptar(){
	var mensaje_usuario = mensajeUsuario();
	if(mensaje_usuario != ""){
		desaparecer();
	};
	mensaje_final.textContent = codificar(mensaje_usuario);
	solo_minusculas = true;
	sin_acentos = true;
}

function desencriptar() {
	var mensaje_codificado = mensajeUsuario();
	mensaje_final.textContent = "";
	if(mensaje_codificado != ""){
		desaparecer();
	};
	mensaje_final.textContent = decodificar(mensaje_codificado);
	solo_minusculas = true;
	sin_acentos = true;
}


boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;

	