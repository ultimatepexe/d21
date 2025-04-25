"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function play() {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDisplay = document.querySelector("#result");
        const userNumberDisplay = document.querySelector("#userNumber");
        const computerNumberDisplay = document.querySelector("#computerNumber");
        const button = document.querySelector("button");
        const userLog = document.querySelector("#userLog");
        const computerLog = document.querySelector("#computerLog");
        button.disabled = true;
        resultDisplay.innerHTML = "";
        userLog.innerHTML = "";
        computerLog.innerHTML = "";
        let userPoints = 0;
        let computerPoints = 0;
        for (let i = 0; i < 3; i++) {
            const userNumber = yield roll(userNumberDisplay);
            userLog.innerHTML += `${userNumber}<br>`;
            if (userNumber === 0) {
                resultDisplay.innerHTML = `<strong>User lost.</strong>`;
                button.disabled = false;
                return;
            }
            const computerNumber = yield roll(computerNumberDisplay);
            computerLog.innerHTML += `${computerNumber}<br>`;
            if (computerNumber === 0) {
                resultDisplay.innerHTML = `<strong>Computer lost.</strong>`;
                button.disabled = false;
                return;
            }
            userPoints += userNumber;
            computerPoints += computerNumber;
        }
        yield sleep(1000);
        resultDisplay.innerHTML = `User points: ${userPoints}<br>Computer points: ${computerPoints}<br>`;
        if (userPoints > computerPoints) {
            resultDisplay.innerHTML += `<strong>User Wins!</strong>`;
        }
        else if (userPoints < computerPoints) {
            resultDisplay.innerHTML += `<strong>Computer Wins!</strong>`;
        }
        else {
            resultDisplay.innerHTML += `<strong>It's a tie!</strong>`;
        }
        button.disabled = false;
    });
}
function roll(numberDisplay) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 100; i++) {
            if (i > 0) {
                yield sleep(10);
            }
            const randomNumber = randint(0, 20);
            numberDisplay.textContent = randomNumber.toString();
        }
        const randomNumber = randint(0, 20);
        numberDisplay.textContent = randomNumber.toString();
        return randomNumber;
    });
}
