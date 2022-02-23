    let min = 0;
    let max = 100;
    
    let midde = Math.floor((min + max)/2);
    let stage = 1;

function start(){

    document.getElementById("startText").classList.add("hideBlock");
    document.getElementById("startButton").classList.add("hideBlock");

    document.getElementById("question").classList.remove("hideBlock");
    document.getElementById("question").innerHTML = "попытка" + stage + ": " + middle;
    
    document.getElementById("small").classList.remove("hideBlock");
    document.getElementById("bingo").classList.remove("hideBlock");
    document.getElementById("big").classList.remove("hideBlock");

}
function smallClick(){
    max = middle;
    middle=math.floor((min + max)/2);

    if (max == middle) {
        middle -= 1;
    }
    checkGame();
}
function bigClick(){
    min = middle;
    middle = Math.floor((min + max)/2);
    if (min == middle){
        middle += 1;
    }
    checkGame();
}
function bingoClick() {
    max = middle;
    min = middle;
    checkGame();
}

function checkGame() {
if (min == max){
    document.getElementById("question").innerHTML = "Вы загадали число " + min;

    document.getElementById("small").classList.add("hideBlock");
    document.getElementById("bingo").classList.add("hideBlock");
    document.getElementById("big").classList.add("hideBlock");

    return;
}
stage += 1;
if(stage == 8){
    document.getElementById("question").innerHTML = "Жульничать-нехорошо!";
}
document.getElementById("question").innerHTML = "Попытка " + stage + "; " + middle;

}
