function decodificar (texto) {
    if(texto != "") {
        texto = texto.replace(/ufat/g,'u');
        texto = texto.replace(/ober/g,'o');
        texto = texto.replace(/ai/g,'a');
        texto = texto.replace(/imes/g,'i');
        texto = texto.replace(/enter/g,'e');
    }else {
        texto = "Ingrese el mensaje nuevamente";
    }
    return texto;
}