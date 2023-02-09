window.document.head.innerHTML = `<link rel="stylesheet" href="css/styles.css" />`;
const divCard = document.createElement('div');
divCard.setAttribute('class',"divCard");

const imgCard = document.createElement('img');
imgCard.setAttribute('id','imgCard');
divCard.appendChild(imgCard);

const fechar = document.createElement('a');
fechar.setAttribute('href','#');
fechar.innerHTML = "Fechar";
fechar.setAttribute('class',"fechar");
divCard.appendChild(fechar);

fechar.onclick = function(){
    document.getElementsByClassName("divCard")[0].style.height = "0vh";
    document.getElementById("imgCard").style.opacity = "0";
}



const body = window.document.body;
function carregarProdutos(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Galeria de Produtos";
    header.appendChild(h1);

    const main = document.createElement('main');
    var i = 0;
    while(i < listaProdutos.length){

        var divProduto = document.createElement('div');
        var imgProduto = document.createElement('img');
        var h2NomeProduto = document.createElement('h2');
        var h3MarcaProduto = document.createElement('h3');
        var pPreco = document.createElement('p');

        divProduto.setAttribute('class', 'divProduto');
        
        imgProduto.setAttribute("src", listaProdutos[i].thumbnail);
        imgProduto.setAttribute("class", "imgProduto")

        h2NomeProduto.innerHTML = listaProdutos[i].title;
        h3MarcaProduto.innerHTML = listaProdutos[i].brand;
        pPreco.innerHTML = listaProdutos[i].price
       
        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2NomeProduto);
        divProduto.appendChild(h3MarcaProduto);
        divProduto.appendChild(pPreco);
        
        var divMiniatura = document.createElement("div");
        divMiniatura.setAttribute("class", "divMiniatura");
        var x = 0;
        while( x < listaProdutos[i].images.length){
            var imgMiniatura = document.createElement("img");
            imgMiniatura.setAttribute("src",listaProdutos[i].images[x]);
            imgMiniatura.setAttribute("class","imgMiniatura");

            imgMiniatura.addEventListener("click",exibirImagem.bind(this,listaProdutos[i].images[x]));
            
            divMiniatura.appendChild(imgMiniatura);
            x++;
        }
        divProduto.appendChild(divMiniatura);
        main.appendChild(divProduto);
        
        i++;
    }
    body.appendChild(divCard);
    body.appendChild(header);
    body.appendChild(main);
}

body.addEventListener("load", carregarProdutos());


function exibirImagem(foto){
    document.getElementsByClassName("divCard")[0].style.height = "60vh";
    document.getElementById("imgCard").src = foto;
    document.getElementById("imgCard").style.opacity = "1";
    
 
}