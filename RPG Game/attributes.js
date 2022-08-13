const player = new Object();

player.vigor = 5;
player.strength = 0;
player.dexterity = 0;
player.intelligence = 0;
player.faith = 0;
player.arcane = 0;




//functions

// function rebirth( level ) {
//     let count = level;
//     while (count >= 0) {

//     }

// }

function decreasingStatVig() {
    if (player.vigor > 0) {
        player.vigor--;
    }
}

//event listeners
window.onload=function(){
    let decArrow = document.getElementById("decBtnVigor");
    decArrow.addEventListener( "click", event => {
        decreasingStatVig();
    });
}

window.onload=function(){
    let rebirthButton = document.getElementById("rebirth");
    rebirthButton.addEventListener( "click", event => {
        rebirth();
    });
}