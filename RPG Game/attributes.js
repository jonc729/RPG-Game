const player = new Object();

player.vigor = 0;
player.strength = 0;
player.dexterity = 0;
player.intelligence = 0;
player.faith = 0;
player.arcane = 0;

window.onload =function() {

let rebirthBtn = document.getElementById("rebirth")
rebirthBtn.addEventListener("click", event => {
    rebirthfunc();
})

function rebirthfunc ( level ) {
    let count = level;
    
    while (count > 0) {

        // window.onload = function() {

//Vigor

let decArrowVig = document.getElementById("decBtnVigor");
decArrowVig.addEventListener( "click", event => {
    decreasingVigorStat();
});

let incArrowVig = document.getElementById("incBtnVigor");
incArrowVig.addEventListener('click', event => {
    increasingVigorStat();
})

let vigorValue = document.getElementById("spanVigor");
vigorValue.innerHTML = player.vigor;

function decreasingVigorStat() {
    player.vigor -= 1;
    vigorValue.innerHTML = player.vigor;
    count --;
} 

function increasingVigorStat() {
    player.vigor += 1;
    vigorValue.innerHTML = player.vigor;
    count ++;
}

//Strength

let decArrowStr = document.getElementById("decBtnStr");
decArrowStr.addEventListener( "click", event => {
    decreasingStrengthStat();

});

let incArrowStr = document.getElementById("incBtnStr");
incArrowStr.addEventListener('click', event => {
    increasingStrengthStat();
})

let strengthValue = document.getElementById("spanStr");
strengthValue.innerHTML = player.strength;

function decreasingStrengthStat() {
    player.strength -= 1;
    strengthValue.innerHTML = player.strength;
    count --;
} 

function increasingStrengthStat() {
    player.strength += 1;
    strengthValue.innerHTML = player.strength;
    count ++;
}

//Dexterity

let decArrowDex = document.getElementById("decBtnDex");
decArrowDex.addEventListener( "click", event => {
    decreasingDexStat();
});

let incArrowDex = document.getElementById("incBtnDex");
incArrowDex.addEventListener('click', event => {
    increasingDexStat();
})

let dexValue = document.getElementById("spanDex");
dexValue.innerHTML = player.dexterity;

function decreasingDexStat() {
    player.dexterity -= 1;
    dexValue.innerHTML = player.dexterity;
    count --;
} 

function increasingDexStat() {
    player.dexterity += 1;
    dexValue.innerHTML = player.dexterity;
    count ++;
}

//Intelligence

let decArrowInt = document.getElementById("decBtnInt");
decArrowInt.addEventListener( "click", event => {
    decreasingIntStat();
});

let incArrowInt = document.getElementById("incBtnInt");
incArrowInt.addEventListener('click', event => {
    increasingIntStat();
})

let intValue = document.getElementById("spanInt");
intValue.innerHTML = player.intelligence;

function decreasingIntStat() {
    player.intelligence -= 1;
    intValue.innerHTML = player.intelligence;
    count --;
} 

function increasingIntStat() {
    player.intelligence += 1;
    intValue.innerHTML = player.intelligence;
    count ++;
}

//Faith

let decArrowFai = document.getElementById("decBtnFai");
decArrowFai.addEventListener( "click", event => {
    decreasingFaiStat();
});

let incArrowFai = document.getElementById("incBtnFai");
incArrowFai.addEventListener('click', event => {
    increasingFaiStat();
})

let faiValue = document.getElementById("spanFai");
faiValue.innerHTML = player.faith;

function decreasingFaiStat() {
    player.intelligence -= 1;
    faiValue.innerHTML = player.faith;
    count --;
} 

function increasingFaiStat() {
    player.faith += 1;
    faiValue.innerHTML = player.faith;
    count ++;
}

//Arcane

let decArrowArc = document.getElementById("decBtnArc");
decArrowArc.addEventListener( "click", event => {
    decreasingArcStat();
});

let incArrowArc = document.getElementById("incBtnArc");
incArrowArc.addEventListener('click', event => {
    increasingArcStat();
})

let arcValue = document.getElementById("spanArc");
arcValue.innerHTML = player.arcane;

function decreasingArcStat() {
    player.arcane -= 1;
    arcValue.innerHTML = player.arcane;
    count --;
} 

function increasingArcStat() {
    player.arcane += 1;
    arcValue.innerHTML = player.arcane;
    count ++;
}

}

}

function submitfunc() {
    console.log("SubmitFunc")
}

let submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", event => {
    submitfunc()
})

}