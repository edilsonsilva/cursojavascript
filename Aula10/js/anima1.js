// function dizOi() {
//   console.log("Oi");
// }
// window.setInterval(dizOi, 2000);

// window.setInterval(() => {
//   console.log("Oi");
// }, 2000);

// let x = 1;
// window.setInterval(() => {
//   console.log(`Contei ${x}`);
//   x++;
// }, 1000);

const quadro = document.querySelector("#quadro");
// let x = 50;
// let r = 10;
// window.setInterval(() => {
//   //alterar os estilos de largura e altura do quadro
//   x++;
//   quadro.style.width = `${x}px`;
//   quadro.style.height = `${x}px`;
//   quadro.style.transform = `rotate(${r}deg)`;
//   quadro.style.borderRadius = `${r / 2}px`;
//   r++;
// }, 100);

// let pY = -500;

// window.setInterval(() => {
//   console.log(quadro.style.top);
//   quadro.style.top = `${pY}px`;
//   if (pY >= 10) {
//     pY = 10;
//   }
//   pY += 2;
// }, 20);

// let t = -500;
// const quadroA = window.setInterval(() => {
//   console.log(quadro.style.top);
//   quadro.style.top = `${t}px`;
//   if (t >= 10) {
//     window.clearInterval(quadroA);
//   }
//   t += 2;
// }, 20);

// let pX = 0;
// let pY = 0;

document.body.onclick = (event) => {
  quadro.style.top = `${event.pageY}px`;
  quadro.style.left = `${event.pageX}px`;
};

// function relogio() {
//   var tempo = new Date();
//   var hora = tempo.getHours();
//   var minuto = tempo.getMinutes();
//   var segundo = tempo.getSeconds();

//   quadro.innerHTML = `${hora}:${minuto}:${segundo}`;
// }
// window.setInterval(relogio, 1000);
