var addToDoButton = document.getElementById('addTodo');
var toDocontainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
   //verifie si l input n'est pas vide
   if(inputField.value !=""){
    //si l'input n'est pas  vide , créer un paragraphe
    var paragraphe = document.createElement('p')
   }
   //insere uncontenue dans le paragraphe
   paragraphe.innerText = inputField.value;

   //inserer le paragraphe dans l'element todolist
   toDocontainer.appendChild(paragraphe);
}