//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaComNomes = [];

//Nesta função é responsavel por gerar um loop de while(enquanto), que vai acumulando nomes em uma lista a partir da 
// entrada do usuario.
function adicionarAmigo(){

    while (true){

        let entrada = document.querySelector('input').value;

        if (entrada == ''){
            return prompt('Não há nome digitado!');
        } else{
            listaComNomes.push(entrada);
            limparCampo();
            return mostrarAmigosNaTela('listaAmigos');   
        }
    }
}

//Nesta função usamos o loop for por ter um número limitados de elementos presentes na lista, 
// geramos um número aleatorio com o comprimento da lista
//assim pegando um index aleatorio sendo o sorteado.
function sortearAmigo(){

    for (amigo in listaComNomes){
        
        let indexSorteado = parseInt(Math.random() * listaComNomes.length)
        let sorteado = listaComNomes[indexSorteado]

        let mostrarResultado = document.getElementById('resultado');
        mostrarResultado.innerHTML = '';
        return mostrarResultado.append(sorteado)
    }
}
//Nesta função pegamos os elementos da listaComNomes , iteramos sobre ela criando uma nova variavel 'li', assim adicionando esses
//elementos nessa nova variavel/lista e imprimindo na pagina HTML
function mostrarAmigosNaTela(tag){
    let textoTela = document.getElementById(tag);

        for (amigo in listaComNomes){
            let li = document.createElement('li');
            textoTela.innerHTML = '';
            li.textContent = listaComNomes;
            textoTela.appendChild(li);
        }
}
//Essa função sempre que é chamada limpa o campo
function limparCampo(){
    campoDigitado = document.getElementById('amigo');
    campoDigitado.value = '';
}