
let movimentacoes = []

function adicionar(){

let descricao = document.getElementById("descricao").value
let valor = parseFloat(document.getElementById("valor").value)
let tipo = document.getElementById("tipo").value

let mov = {
descricao: descricao,
valor: valor,
tipo: tipo
}

movimentacoes.push(mov)

atualizarTabela()
calcularSaldo()

}

function atualizarTabela(){

let tabela = document.getElementById("tabela")
tabela.innerHTML = ""

movimentacoes.forEach(m => {

let linha = `
<tr>
<td>${m.descricao}</td>
<td>R$ ${m.valor}</td>
<td>${m.tipo}</td>
</tr>
`

tabela.innerHTML += linha

})

}

function calcularSaldo(){

let saldo = 0

movimentacoes.forEach(m => {

if(m.tipo === "entrada"){
saldo += m.valor
}else{
saldo -= m.valor
}

})

document.getElementById("saldo").innerText = "R$ " + saldo

}

