/* Réflexion 
# lancer le jeu et pouvoir mettre des X ou des O
On choisit qui joue en premier
On a besoin d'un event handler pour le hover des cases et d'un event handler pour le click sur les cases
On utilise l'unique event listener pour définir si c'est un x ou un o (il y a max 9 coups à jouer)
On crée 9 const pour les coups à jouer
on peut mettre un ID de 1 à 9 aux divs qui correspondra à la var

# savoir qui doit jouer
on défini avec le modulo qui doit jouer. Si modulo = 0 c'est un O, si modulo = 1 c'est un X

# savoir qui gagne

on défini les conditions de victoires: si enchainement de 3 X sur 123 ou 147 ou 159 ou 357


*/


// variables globales
let nbTour = 0;
let playerClass = "circle"
let isPlayerOTurn;
const changeUser = () => {
    playerClass = (playerClass === "circle") ? "x" : "circle";
    console.log(playerClass);
    $board.classList.remove("circle");
        $board.classList.remove("x");
        $board.classList.add(playerClass);
}

// on défini les querySelector
const $board = document.querySelector(".board"); 
const $cell = document.querySelectorAll(".cell");





// on défini les eventListener



// on autorise les cellules à être remplie, mais juste une fois
$cell.forEach(cell => {
    cell.addEventListener(
        "click", 
        cellElement => {
            nbTour++;
            console.log(`tours joués ${nbTour}`);
            console.log(nbTour%2); 
            cellElement.target.classList.add(playerClass);
           changeUser ();                   
        },
        {once : true});
})

$cell.forEach(cell => {
    $board.classList.add(playerClass);
})

// on (essaie)  de récupèrer l'id de l'élément cliqué
/*
const getDataAttribute = () => {
    $board(document).on("click", ".cell", function () {
        let varID = $(this).attr('data-cell');
        console.log(varID);
    })
}*/
