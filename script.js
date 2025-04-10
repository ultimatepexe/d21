const np = document.querySelector("#np")
const button = document.querySelector("button")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function play() {
    button.disabled = true
    log.innerHTML = ""
    let userPoints = 0;
    let computerPoints = 0;
    for (let r=0;r<3;r++) {
        const userNumber = randint(0, 20)
        const computerNumber = randint(0, 20)

        await roll(userNumber)
        await sleep(1000)
        log.innerHTML += `User: ${userNumber}<br>`
        await roll(computerNumber)
        await sleep(1000)
        log.innerHTML += `Computer: ${computerNumber}<br>`

        if (userNumber === 0) {
            log.innerHTML += "User lost!"
            button.disabled = false
            return
        }

        if (computerNumber === 0) {
            log.innerHTML += "Computer lost!"
            button.disabled = false
            return
        }

        userPoints += userNumber
        computerPoints += computerNumber
    }
    await sleep(500)
    log.innerHTML += `User points: ${userPoints}<br>`
    await sleep(500)
    log.innerHTML += `Computer points: ${computerPoints}<br>`
    await sleep(500)
    if (userPoints > computerPoints) {
        log.innerHTML += `<strong>User wins!</strong><br>`
    } else if (userPoints < computerPoints) {
        log.innerHTML += `<strong>Computer wins!</strong><br>`
    } else {
        log.innerHTML += `Tie!`
    }
    button.disabled = false
}

async function roll(fn) {
    for (let r=0;r<100;r++) {
        await sleep(10)
        const randomNumber = randint(0, 20)
        switch (randomNumber) {
            case 0:
                np.textContent = "0"; break
            case 1:
                np.textContent = "1"; break
            case 2:
                np.textContent = "2"; break
            case 3:
                np.textContent = "3"; break
            case 4:
                np.textContent = "4"; break
            case 5:
                np.textContent = "5"; break
            case 6:
                np.textContent = "6"; break
            case 7:
                np.textContent = "7"; break
            case 8:
                np.textContent = "8"; break
            case 9:
                np.textContent = "9"; break
            case 10:
                np.textContent = "10"; break
            case 11:
                np.textContent = "11"; break
            case 12:
                np.textContent = "12"; break
            case 13:
                np.textContent = "13"; break
            case 14:
                np.textContent = "14"; break
            case 15:
                np.textContent = "15"; break
            case 16:
                np.textContent = "16"; break
            case 17:
                np.textContent = "17"; break
            case 18:
                np.textContent = "18"; break
            case 19:
                np.textContent = "19"; break
            case 20:
                np.textContent = "20"; break
            default:
                np.textContent = ""
        }
    }
    switch (fn) {
        case 0:
            np.textContent = "0"; break
        case 1:
            np.textContent = "1"; break
        case 2:
            np.textContent = "2"; break
        case 3:
            np.textContent = "3"; break
        case 4:
            np.textContent = "4"; break
        case 5:
            np.textContent = "5"; break
        case 6:
            np.textContent = "6"; break
        case 7:
            np.textContent = "7"; break
        case 8:
            np.textContent = "8"; break
        case 9:
            np.textContent = "9"; break
        case 10:
            np.textContent = "10"; break
        case 11:
            np.textContent = "11"; break
        case 12:
            np.textContent = "12"; break
        case 13:
            np.textContent = "13"; break
        case 14:
            np.textContent = "14"; break
        case 15:
            np.textContent = "15"; break
        case 16:
            np.textContent = "16"; break
        case 17:
            np.textContent = "17"; break
        case 18:
            np.textContent = "18"; break
        case 19:
            np.textContent = "19"; break
        case 20:
            np.textContent = "20"; break
        default:
            np.textContent = ""
    }
}