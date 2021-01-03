import { checkWinner } from './checkWinner.js'

let random
let chances = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let i = 0;
let player = "O"
let canContinue = true

//Get current state of the board
const getFields = () => {
    return $('.field').toArray().map((e) => {
        return $(e).html()
    })
}

// TimeOut between turns.
function autoPlayTheGame() {
    player = (player == "X") ? "O" : "X"
    var loop = setTimeout(() => {
        const step = checkWinner(getFields(), player)
        document.getElementById("result").innerHTML = step.message
        canContinue = step.canContinue
        random = Math.floor((chances.length) * Math.random())
        $('.field').eq(chances[random]).html(player)
        chances.splice(random, 1)
        if (i < 9 && canContinue == true) {
            autoPlayTheGame();
        }
        i++;
    }, 2000)
    if (canContinue == false){clearTimeout(loop)}
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() {
    for (var i = 0; i < 10; i++) {
        const step = checkWinner(getFields(), player)
        canContinue = step.canContinue
        if (canContinue == true) {
            random = Math.floor((chances.length) * Math.random())
            $('.field').eq(chances[random]).html(player)
            chances.splice(random, 1)
            player = (player == "X") ? "O" : "X"
        } else {
            document.getElementById("result").innerHTML = step.message
        }
        
        await timer(2000);
    }
}

// Start the game when the page is loaded.
$(document).ready(() => {
    //load();
    autoPlayTheGame()
})