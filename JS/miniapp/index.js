let departureDateEntry = prompt("Digite a data de partida (DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chooseOption = prompt(
  "Escolha como gostaria de exibir o tempo de partida \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias"
);

if(chooseOption == 1){
  let secondsOfDeparture = Math.round(dateDiff / 1000);
  alert("Tempo de vôo: " + secondsOfDeparture + " segundos");
} else if (chooseOption == 2){
  let minutesOfDeparture =  Math.round(dateDiff / 1000 / 60);
  alert("Tempo de vôo: " + minutesOfDeparture + " minutos");
} else if (chooseOption == 3){
  let hoursOfDeparture =  Math.round(dateDiff / 1000 / 3600);
  alert("Tempo de vôo: " + hoursOfDeparture + " horas");
} else if (chooseOption == 4){
  let daysOfDeparture =  Math.round(dateDiff / 1000 / 3600 / 24);
  alert("Tempo de vôo: " + daysOfDeparture + " dias");
} else{
  alert("Opção inválida");
}