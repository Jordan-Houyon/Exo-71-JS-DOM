let monDiv = document.createElement('div');

document.getElementById('viewport').appendChild(monDiv);

let secondDiv= document.createElement('div');
document.getElementById('viewport').appendChild(secondDiv);
secondDiv.innerHTML="hello";
monDiv.innerHTML="Ce div a été crée en utilisant Javascript";

secondDiv.style.backgroundColor="red";
secondDiv.style.width="100px";
secondDiv.style.hright="100px";

let aSupprimer = document.getElementById(`aSupprimer`)
aSupprimer.remove();







