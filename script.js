/*---- INTEGRACAO SITE-----*/
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";

const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
const alexPoints = 75; //vamos usar esse valor depois
const jessiePoints = 99;
const didAlexPass = !false;
//colocando as pontuações
const samPointsDisplay = "Sam earned " + samPoints + " points out of " +
  maxPoints;
const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
const jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of" +
  maxPoints;
//printando na tela
console.log(samPointsDisplay);
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
//Calculo de porcetagens 
const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
//Pontos perdidos 
const samMissedPoints = maxPoints - samPoints;
const samMissedPointsDisplay = "Sam Missed" + samMissedPoints + "points (s).";
console.log(samMissedPointsDisplay);
const alexMissedPoints = maxPoints - alexPoints;
const alexMissedPointsDisplay = "Alex Missed" + alexMissedPoints +
"points (s).";
console.log(alexMissedPointsDisplay);
const jessieMissedPoints = maxPoints - jessiePoints;
const jessieMissedPointsDisplay = "Jessie Missed" + jessieMissedPoints +
  "points (s).";
console.log(jessieMissedPointsDisplay);

//Average
const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = classAveragePoints / maxPoints * 100;
// apllicando uma variavel com a biblioteca toFixed
const classAvgDisplay = "The class average was" + classAveragePoints + classAveragePercent.toFixed;
console.log(classAvgDisplay);

// Atualizando a nota do alex
const alexPointsUpdated = "Alex Failed Initially but did extra credit. Their new score is" + alexPoints + "Out of" + maxPoints;
console.log(alexPointsUpdated);


//Integra com site + os pontinhos e as lacunas :D
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;
/*---------*/
