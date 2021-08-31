let yearLight = prompt(
  "Qual a distância em anos luz você gostaria de converter?"
);
let menuConvertion = prompt(
  "Escolha uma medida de conversão\n1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilômetros(km)"
);

switch (menuConvertion) {
  case "1":
    chooseOption = "Parsec(pc)";
    newValue = yearLight * 0.366;
    alert("valor da conversão é de " + newValue + " " + chooseOption);
    break;

  case "2":
    chooseOption = "Unidade astronônima(AU)";
    newValue = yearLight * 0.63241;
    alert("valor da conversão é de " + newValue + " " + chooseOption);
    break;

  case "3":
    chooseOption = "Quilômetros(km)";
    newValue = yearLight * (9.5 * Math.pow(10, 12));
    alert("valor da conversão é de " + newValue + " " + chooseOption);
    break;

  default:
    alert(
      "Distância em Anos-luz digitada: " +
        yearLight +
        "\nUnidade não identificada: Conversão fora do escopo"
    );
}

alert(
  " A distância em ano luz é " + yearLight + "\n " + chooseOption + ":" + newValue
);
