// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declaracion del arreglo de amigos
let amigoSorteado = []; //declaro arreglo de amigos ya elegidos
let amigoSecreto;
document.querySelector('#amigo').focus();//al usar esta instrucción el focus deja el cursor en el textbox

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
if(amigo == ''){
    alert('Por favor, debes igresar un nombre');
}else{
    if(validarNombre(amigo) == false){
        alert('No se permite valores numéricos en un nombre');
        reiniciar();
    }else {
        if(amigos.includes(amigo)){
            alert('el nombre esta duplicado, ingrese otro diferente');
            reiniciar();
        }else{
            amigos.push(amigo);
             listaAmigos();
            reiniciar();
        }
    }
   }
   return;
}

function listaAmigos(){
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        let li =document.createElement('li');
                li.innerHTML = amigos[index];
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo(){
   let numeroDeIndex = Math.floor(Math.random()*amigos.length);
   console.log(numeroDeIndex);
   amigoSecreto = amigos[numeroDeIndex];
   console.log(amigos);

   if(amigos.length == 0){
        alert('No hay ingresado ningún amigo para sortear');
        reiniciar();
    }else{
        if(numeroDeIndex > amigos.length){
            sortearAmigo();
        }else{
            if(amigoSorteado.length === amigos.length){
                document.getElementById('listaAmigos').innerHTML = 'TODOS LOS AMIGOS FUERON SORTEADOS';
                document.querySelector('#resultado').innerHTML = 'FIN DEL SORTEO';
                document.querySelector('#sorteo').setAttribute('disabled','true');
            }else {
                if(amigoSorteado.includes(amigoSecreto)){
                    sortearAmigo();
                }else {
                    let ganador = document.getElementById("resultado");
                    amigoSorteado.push(amigoSecreto);
                    console.log(amigoSorteado);
                    document.getElementById('listaAmigos').innerHTML = ''; //elimina la lista dispuesta en el html
                    ganador.innerHTML = `Tú amigo secreto es : ${amigoSecreto}`;
                } 
            }
        }
   }
   return;
}

