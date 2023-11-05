//https://octoshop.sfo2.digitaloceanspaces.com/lojas/gergastronomia/uploads_produto/arroz-branco-1-5f3ab18673542.jpg

let line1 = [document.getElementById("1x1"), document.getElementById("1x2"), document.getElementById("1x3"), document.getElementById("1x4"), document.getElementById("1x5")]

let line2 = [document.getElementById("2x1"), document.getElementById("2x2"), document.getElementById("2x3"), document.getElementById("2x4"), document.getElementById("2x5")]

let line3 = [document.getElementById("3x1"), document.getElementById("3x2"), document.getElementById("3x3"), document.getElementById("3x4"), document.getElementById("3x5")]

let inventario = [line1, line2, line3]

let itens = []

function createIten() {

    let nome = document.getElementById("inpNomeItem").value
    let id = document.getElementById("inpIdItem").value
    let imagem = document.getElementById("inpURL").value
    let valor = document.getElementById("inpValor").value

    let novoItem = {
        nome: nome,
        id: id,
        img: imagem,
        valor: valor
    }

    itens.push(novoItem)
    console.log(itens)
}



function addLista() {

    let pos1 = parseInt(document.getElementById("inpPos1").value)
    let pos2 = parseInt(document.getElementById("inpPos2").value)
    let nomeItem = document.getElementById("inpItem").value

    const indiceItens = itens.map(row => row.nome).indexOf(nomeItem);

    inventario[pos1][pos2].innerHTML = `<img width="60px" height="60px" src="${itens[indiceItens].img}">`

}