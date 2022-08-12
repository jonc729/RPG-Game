const player = new Object();

player.vigor = 0;
player.strength = 0;
player.dexterity = 0;
player.intelligence = 0;
player.faith = 0;
player.arcane = 0;




//functions

// function rebirth( level ) {
//     while ( level > 0 ) {
//         if addEventListener
//     }
// }

function decreasingStat() {
    console.log(player.strength)
}

//event listeners
window.onload=function(){
let decArrow = document.getElementById("decBtnVigor");
decArrow.addEventListener( "click", event => {
    decreasingStat();
});
}

