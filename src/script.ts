function sleep(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function play(): Promise<void> {
    const resultDisplay = document.querySelector("#result") as HTMLElement;
    const userNumberDisplay = document.querySelector("#userNumber") as HTMLElement;
    const computerNumberDisplay = document.querySelector("#computerNumber") as HTMLElement;
    const button = document.querySelector("button") as HTMLButtonElement;
    const userLog = document.querySelector("#userLog") as HTMLElement;
    const computerLog = document.querySelector("#computerLog") as HTMLElement;

    button.disabled = true;
    resultDisplay.innerHTML = ""
    userLog.innerHTML = "";
    computerLog.innerHTML = "";
    let userPoints: number = 0;
    let computerPoints: number = 0;
    for (let i=0;i<3;i++) {
        const userNumber = await roll(userNumberDisplay)
        userLog.innerHTML += `${userNumber}<br>`
        if (userNumber === 0) {
            resultDisplay.innerHTML = `<strong>User lost.</strong>`
            button.disabled = false;
            return
        }

        const computerNumber = await roll(computerNumberDisplay)
        computerLog.innerHTML += `${computerNumber}<br>`
        if (computerNumber === 0) {
            resultDisplay.innerHTML = `<strong>Computer lost.</strong>`
            button.disabled = false;
            return
        }

        userPoints += userNumber
        computerPoints += computerNumber
    }
    
    await sleep(1000)
    resultDisplay.innerHTML = `User points: ${userPoints}<br>Computer points: ${computerPoints}<br>`
    if (userPoints > computerPoints) {
        resultDisplay.innerHTML += `<strong>User Wins!</strong>`
    } else if (userPoints < computerPoints) {
        resultDisplay.innerHTML += `<strong>Computer Wins!</strong>`
    } else {
        resultDisplay.innerHTML += `<strong>It's a tie!</strong>`
    }
    button.disabled = false;
}

async function roll(numberDisplay: HTMLElement): Promise<number> {
    for (let i=0;i<100;i++) {
        if (i>0) {
            await sleep(10)
        }
        const randomNumber = randint(0, 20)
        numberDisplay.textContent = randomNumber.toString()
    }
    const randomNumber: number = randint(0, 20)
    numberDisplay.textContent = randomNumber.toString()
    return randomNumber
}