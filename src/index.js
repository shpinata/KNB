const kamen = "src/stone.svg";
const nozh = "src/sewing-scissors.svg";
const bumaga = "src/paper-plane.svg";
const knb = [kamen, nozh, bumaga]; //массив: камень = 0, ножницы = 1, бумага = 2

function computerPlay() {
    const random = Math.floor(Math.random() * 3); //Комьютер рандомно выдает параметр
    return knb[random];
}

let tt = 0; // Победа
let ff = 0; // Поражение

function game(playerSelection, computerSelection) {

    const result = document.getElementById("textResult");
    const score = document.getElementById("textScore");
    const choiceComputer = document.getElementById("textChoiceComputer");
    const imgComp = document.getElementById("imageComp");

    imgComp.src = computerSelection;
    if (playerSelection == kamen) {
        if (computerSelection == kamen) {
            result.innerText = "Ничья!";
        }
        if (computerSelection == nozh) {

            result.innerText = "Победа!";
            tt++;
        }
        if (computerSelection == bumaga) {

            result.innerText = "Поражение!";
            ff++;
        }
    }
    if (playerSelection == nozh) {
        if (computerSelection == kamen) {
            result.innerText = "Поражение!";
            ff++;
        }
        if (computerSelection == nozh) {
            result.innerText = "Ничья!";
        }
        if (computerSelection == bumaga) {
            result.innerText = "Победа!";
            tt++;
        }
    }
    if (playerSelection == bumaga) {
        if (computerSelection == kamen) {
            result.innerText = "Победа!";
            tt++;
        }
        if (computerSelection == nozh) {
            result.innerText = "Поражение!";
            ff++;
        }
        if (computerSelection == bumaga) {
            result.innerText = "Ничья!";
        }

    }

    score.innerText = tt + " : " + ff;

    const end = document.getElementById("theEnd");
    if (tt == 5) {
        end.innerText = "ВЫ ПОБЕДИЛИ!"
    }
    else {
        end.innerText = " "
    }
    if (ff == 5) {
        end.innerText = "ВЫ ПРОИГРАЛИ!"
    }
    else if (tt != 5) {
        end.innerText = " "
    }

    if ((tt == 5) || (ff == 5)) {

        tt = 0;
        ff = 0;
    }
    if ((tt == 0) && (ff == 0) && (result.innerText != "Ничья!")) {
        result.innerText = " ";
        choiceComputer.innerText = "Выбор соперника:"
    }
}