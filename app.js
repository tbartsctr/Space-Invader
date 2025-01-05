const gameScrn = document.getElementsByClassName("gameScrn")[0];
const scoreScrn = document.getElementsByClassName("scoreScrn")[0];
const spaceShip = document.getElementsByClassName("spaceshipImg")[0];
let gameOver = false;
let alienIntervals = [];
let lasers = [];

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

    const aliens = document.getElementsByClassName("alienImg");
    for (let i = aliens.length - 1; i >= 0; i--) {
        aliens[i].remove();
    }

    alienIntervals.forEach(interval => clearInterval(interval));
    alienIntervals = [];

    gameOver = false;

    setInterval(createAlien, 2000);


}

startBtn.addEventListener("click", startGame);


function createAlien() {

    if (gameOver) return;

    const alien = document.createElement("img");  
    alien.src = "alien.png";  
    alien.classList.add("alienImg");  
    gameScrn.appendChild(alien);  

    alien.style.visibility = "visible";  
    alien.style.left = Math.random() * (gameScrn.offsetWidth - 70) + "px";  
    alien.style.top = "0px";  

    fallAlien(alien);
}


function fallAlien(alien){

    let alienTop = parseInt(alien.style.top) || 0;

    const fallInterval = setInterval(function(){

        if (gameOver) return;
    
        alienTop += 10;
        alien.style.top = alienTop + "px";

    if (alienTop >= gameScrn.offsetHeight){
        clearInterval(fallInterval)
        alien.remove();

        endGame();
    }
    }, 300);
    alienIntervals.push(fallInterval);
}


startBtn.addEventListener("click", startGame);


function endGame(alienTop){

        alert("Game Over!");
        gameOver = true;

        const aliens = document.getElementsByClassName("alienImg");
        

        for (let i = aliens.length - 1; i >= 0; i--){
            aliens[i].remove()
        }
        alienIntervals.forEach(interval => clearInterval(interval));
        alienIntervals = []
    }

