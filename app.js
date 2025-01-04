const gameScrn = document.getElementsByClassName("gameScrn")[0];
const scoreScrn = document.getElementsByClassName("scoreScrn")[0];
const spaceShip = document.getElementsByClassName("spaceshipImg")[0];

const moveAmount = 20;

function moveSpaceShip(event){
    console.log(event.key);
    let currentLeft = parseInt(spaceShip.style.left) || 0;

    if (event.key === "ArrowLeft"){
        currentLeft -= moveAmount
        if (currentLeft < 0){
            currentLeft = 0
        }

} else if (event.key === "ArrowRight"){
    const gameScrnWidth = gameScrn.offsetWidth
    const spaceShipWidth = spaceShip.offsetWidth

    currentLeft += moveAmount
 
    }

    spaceShip.style.left = currentLeft + "px";

}

window.addEventListener("keydown", moveSpaceShip);


const startBtn = document.getElementById("startBtn");
const alien = document.getElementsByClassName("alienImg")[0];



function startGame(){

    alien.style.visibility = "visible";
    alien.style.top = "0px";

    setInterval(fallAlien, 2000);


}


function fallAlien(){

    let alienTop = parseInt(alien.style.top) || 0;
    alienTop += 10;

    alien.style.top = alienTop + "px";
}


startBtn.addEventListener("click", startGame);