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

   //style du paragraphe
   paragraphe.classList.add("paragraphe_style");

   //inserer le paragraphe dans l'element todolist
   toDocontainer.appendChild(paragraphe);

   //vide l'input apres insertion
   inputField.value="";

   //barrer losrqu'on clicque dessus
   paragraphe.addEventListener('click',function(){
    paragraphe.classList.add('paragraphe_click');
   })

   //suppression au double clique
   paragraphe.addEventListener('dblclick',function(){
    toDocontainer.removeChild(paragraphe);
   })

}