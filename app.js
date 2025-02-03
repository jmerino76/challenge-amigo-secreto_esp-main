// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declaracion del arreglo
document.querySelector('#amigo').focus();

function reiniciar(){ //esta función limpia el textbox para ingresar un nombre
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();//esta sentencia es utilizada para posicionar el cursor en el texbox
}

function validarNombre(parametro) { //funcion que permite validar solo ingreso de letras, espacio y caracteres especiales
    let patron = /^[a-zA-z\s]*$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}

function agregarAmigo(){
let amigo = document.querySelector('#amigo').value;
console.log(typeof(amigo));
if(amigo == ''){
    alert('Por favor, debes igresar un nombre');
}else{
    if(validarNombre(amigo) == false){
        alert('No se permite valores numéricos en un nombre');
        reiniciar();
    }else{
        amigos.push(amigo);
        console.log(amigos);
        reiniciar();
    }
    

}
}

