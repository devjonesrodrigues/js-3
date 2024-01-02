const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const h1 = document.querySelector("h1")
let counter = 0

let cron

function startCounter() {
    cron = setInterval(() => {
        h1.innerHTML = counter++
    }, 1000);
}
start.addEventListener("click", startCounter)

function stopCounter() {
    clearInterval(cron)
}
stop.addEventListener("click", stopCounter)