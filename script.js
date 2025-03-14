const img = document.querySelector("#diceImg")
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
                img.src = "images/d20-0.png"; break
            case 1:
                img.src = "images/d20-1.png"; break
            case 2:
                img.src = "images/d20-2.png"; break
            case 3:
                img.src = "images/d20-3.png"; break
            case 4:
                img.src = "images/d20-4.png"; break
            case 5:
                img.src = "images/d20-5.png"; break
            case 6:
                img.src = "images/d20-6.png"; break
            case 7:
                img.src = "images/d20-7.png"; break
            case 8:
                img.src = "images/d20-8.png"; break
            case 9:
                img.src = "images/d20-9.png"; break
            case 10:
                img.src = "images/d20-10.png"; break
            case 11:
                img.src = "images/d20-11.png"; break
            case 12:
                img.src = "images/d20-12.png"; break
            case 13:
                img.src = "images/d20-13.png"; break
            case 14:
                img.src = "images/d20-14.png"; break
            case 15:
                img.src = "images/d20-15.png"; break
            case 16:
                img.src = "images/d20-16.png"; break
            case 17:
                img.src = "images/d20-17.png"; break
            case 18:
                img.src = "images/d20-18.png"; break
            case 19:
                img.src = "images/d20-19.png"; break
            case 20:
                img.src = "images/d20-20.png"; break
            default:
                img.src = "images/d20-template"
        }
    }
    switch (fn) {
        case 0:
            img.src = "images/d20-0.png"; break
        case 1:
            img.src = "images/d20-1.png"; break
        case 2:
            img.src = "images/d20-2.png"; break
        case 3:
            img.src = "images/d20-3.png"; break
        case 4:
            img.src = "images/d20-4.png"; break
        case 5:
            img.src = "images/d20-5.png"; break
        case 6:
            img.src = "images/d20-6.png"; break
        case 7:
            img.src = "images/d20-7.png"; break
        case 8:
            img.src = "images/d20-8.png"; break
        case 9:
            img.src = "images/d20-9.png"; break
        case 10:
            img.src = "images/d20-10.png"; break
        case 11:
            img.src = "images/d20-11.png"; break
        case 12:
            img.src = "images/d20-12.png"; break
        case 13:
            img.src = "images/d20-13.png"; break
        case 14:
            img.src = "images/d20-14.png"; break
        case 15:
            img.src = "images/d20-15.png"; break
        case 16:
            img.src = "images/d20-16.png"; break
        case 17:
            img.src = "images/d20-17.png"; break
        case 18:
            img.src = "images/d20-18.png"; break
        case 19:
            img.src = "images/d20-19.png"; break
        case 20:
            img.src = "images/d20-20.png"; break
        default:
            img.src = "images/d20-template"
    }
}