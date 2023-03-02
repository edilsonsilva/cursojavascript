function abrirJanela(dado) {
  fundo.style.backgroundColor = "rgba(0,0,0,0.5)";
  tela.style.top = "0px";
  tela.innerHTML = `O valor de i é ${dado}`;
}
for (var i = 0; i < 10; i++) {
  var btn = document.createElement("button");
  btn.setAttribute("class", `btn`);
  btn.innerHTML = `Botao ${i}`;
  btn.onclick = () => abrirJanela(btn.outerText);
  document.getElementById("botao").appendChild(btn);
}

// abrir.onclick = () => {
//   fundo.style.backgroundColor = "rgba(0,0,0,0.5)";
//   tela.style.top = "0px";
//   console.log("Tela");
// };

fechar.onclick = () => {
  console.log("fechar");
  fundo.style.backgroundColor = "rgba(0,0,0,0)";
  tela.style.top = "-600px";
};

// console.log(window.screen.width);
