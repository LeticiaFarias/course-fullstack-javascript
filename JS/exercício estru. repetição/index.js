let warpCount = 0;
let chooseOption = "";

let spaceship = prompt("Digite o nome da nave");

chooseOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não");

while (chooseOption == "1") {
  warpCount += 1;
  chooseOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não");
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount);
