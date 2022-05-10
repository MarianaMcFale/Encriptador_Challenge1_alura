function codificar (texto) {
    detectar_mayúsculas(texto);
    detectar_acentos(texto);
    if (solo_minusculas && sin_acentos){
        texto = texto.replace(/e/g,'enter');
        texto = texto.replace(/i/g,'imes');
        texto = texto.replace(/a/g,'ai');
        texto = texto.replace(/o/g,'ober');
        texto = texto.replace(/u/g,'ufat');
    }else {
        texto = "Ingrese el mensaje nuevamente";
    }
    
    return texto;
}