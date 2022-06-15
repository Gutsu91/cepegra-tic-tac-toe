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
let isPlayerOTurn = false;

// querySelector
const $board = document.querySelector(".board"); 
const $cell = document.querySelectorAll(".cell");
const $entry = document.querySelector(".entry");
const $joueur1 = document.querySelector("#joueur1");
const $joueur2 = document.querySelector("#joueur2");
const $jouer = document.querySelector("#jouer");

/* Partie 1: gestion de l'affichage */
// fonctions globales
const definitionHover = () => {
    $cell.forEach(cell => {
        $board.classList.add(playerClass);
    })
}
const changeUser = () => {
    playerClass = (playerClass === "circle") ? "x" : "circle";
    console.log(playerClass);
    $board.classList.remove("circle");
    $board.classList.remove("x");
    $entry.innerHTML = `C'est à ${isPlayerOTurn === true ? joueur1 : joueur2} de jouer.`;
    definitionHover();
    isPlayerOTurn = (isPlayerOTurn === true) ? false: true;

}


// on autorise les cellules à être remplie, mais juste une fois
$cell.forEach(cell => {
    cell.addEventListener(
        "click", 
        cellElement => {
            nbTour++;
            console.log(`tours joués ${nbTour}`);
            cellElement.target.classList.add(playerClass);
           changeUser ();                   
        },
        {once : true});
})


/* partie 2: récupération du nom des joueurs */
// on crée un tableau avec l'id des joueurs mais le nom est vide
let joueur1 = "";
let joueur2 = "";

/*
//on désactive le bouton, on le réactivera si les deux input sont remplis
$jouer.disabled = true;

const activateButton = () => {
        $jouer.removeAttribute("disabled");
}*/


$jouer.addEventListener("click", () => {
    if ($joueur1.value.trim() === "") return;
    if ($joueur2.value.trim() === "") return;
    joueur1 = $joueur1.value;
    joueur2 = $joueur2.value;
    $joueur1.value = "";
    $joueur2.value = "";
    removeInput();
})


removeInput = () => {
    if (joueur1 !== "" && joueur2 !== "") {
        $entry.innerHTML = `C'est à ${joueur1} de jouer.`;
        definitionHover();
    } 
}



