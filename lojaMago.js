function verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada) {
    if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
        return "Erro: Quantidades devem ser numeros inteiros";
    }

    if (quantidadeDisponivel >= quantidadeSolicitada) {
        return "Pedido realizado";
    } else {
        return "Estoque insuficiente";
    }
}

// Lendo as entradas do usuário
let nomeItem = gets();
let quantidadeDisponivel = parseInt(gets());
let quantidadeSolicitada = parseInt(gets());

// Chamando a função e imprimindo o resultado
if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
    console.log("Erro: Quantidades devem ser numeros inteiros");
} else {
    const resultado = verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada);
    console.log(resultado);
}
