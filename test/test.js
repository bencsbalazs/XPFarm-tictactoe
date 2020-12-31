import { checkWinner } from '../checkWinner.js'
import assert from 'assert';

describe('Check TicTacToe game', function () {
    describe('Check board', function () {
        it('Field numbers', function () {

        })
    })
    describe('Winning positions', function () {
        it('Player wins with a line', function () {
            assert.equal(checkWinner(["X", "X", "X", "", "", "", "", "", ""], "X").message, "Player X wins with a line.")
        });

        it('Player wins with a row', function () {
            assert.equal(checkWinner(["O", "", "", "O", "", "", "O", "", ""], "O").message, "Player O wins with a row.")
        });

        it('Player wins with a diagonal', function () {
            assert.equal(checkWinner(["O", "", "", "", "O", "", "", "", "O"], "O").message, "Player O wins with a diagonal.")
        });

    });
});