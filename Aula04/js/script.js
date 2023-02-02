/*
Comparação entre variável e array. Como obter dados
de uma variável	e um array
*/
var nome = "Pedro,Paulo";
console.log(nome);
//exibir apenas o Paulo
console.log(nome.substring(6,11));

//Criando um array para os nomes
const nomes = ["Pedro","Paulo"];
console.log(nomes);
//exibir apenas o Paulo
console.log(nomes[1]);
//Vamos adicionar mais nomes ao array
//usaremos o comando push
nomes.push("Roberto");
console.log(nomes);
//exibir o último nome
console.log(nomes[nomes.length-1]);
//adicionar mais um nome 
nomes.push("Vanessa");
console.log(nomes);
console.log("------------------------");
//vamos criar 2 objetos de produto de infomática
prod1 = {
    nome:"Mouse",
    marca:"Microsoft",
    preco:150.00
};
prod2 = {
    nome:"Teclado",
    marca:"Microsoft",
    preco:180.00
};
//vamos criar um array de produtos
const produtos = [prod1,prod2];
console.log(produtos);
//exibir o produto1 prod1
console.log(produtos[0]);
//exibir a marca do produto1
console.log(produtos[0].marca);
console.log("-----------------------------------");
//criar um array de objetos cliente
const clientes = [
    {
        nome:"Tadeu",
        idade:25,
        cidade:"Leme"
    },
    {
        nome:"Fernanda",
        idade:38,
        cidade:"Guarulhos"
    }
];
console.log(clientes);
//vamos adicionar um novo cliente
clientes.push({
    nome:"Gustavo",
    idade:30,
    cidade:"São Paulo"
});
console.log(clientes);

//****************************************************** */

//exibir os produtos nas div no navegador
var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preco;

// document.getElementById("produto1").innerHTML = pnome;
// document.getElementById("produto1").innerHTML += pmarca;
// document.getElementById("produto1").innerHTML += ppreco;

//criar uma constante para exibir os dados do produto na div
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";
document.getElementById("produto1").innerHTML = saida;

//exibir os dados do produto2
 //vamos montar os dados de saida em uma constante 
 //usando template string

 const saida2 = `<h2>${produtos[1].nome}</h2>
                <p class='m'>${produtos[1].marca}</p>
                <p class='p'>${produtos[1].preco}</p>`;

document.getElementById("produto2").innerHTML = saida2;

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let bt = 1 ; bt <= 10; bt++){
    document.getElementById("caixa").innerHTML += `<button> Botão ${bt}</button>`;
}