const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) { 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {                    
        
        if(stringEncriptada.includes(matrizCodigo[i][0])) {         
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }
    return stringEncriptada;
}

function btnDescriptar() {
    const textoDescriptado = Descriptar(inputTexto.value)
    mensagem.value = textoDescriptado
    mensagem.style.backgroundImage="none"
}

function Descriptar(stringDescriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada =stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDescriptada;
}
