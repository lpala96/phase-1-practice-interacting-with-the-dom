

timer = function () {
    return setInterval (addCounter, 1000)
}

const addCounter = function () {
    const counter = document.getElementById('counter') 
    counter.textContent = parseInt(counter.textContent) + 1
}

timer()

const plus = document.getElementById('plus')
plus.addEventListener('click', addCounter)

//minus button

const minusCounter = function () {
    const counter = document.getElementById('counter') 
    counter.textContent = parseInt(counter.textContent) - 1
}

const minus = document.getElementById('minus')
minus.addEventListener('click', minusCounter)

//pause button !!

let interval = setInterval(timer, 1000)
let paused = false

const clickPause = function () {
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pause.innerText = "resume"  
    }
    else {
        interval = setInterval
        pause.innerText = "pause"    
    }

}
const pause = document.getElementById('pause')
pause.addEventListener('click', clickPause)

//Leave comment
let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.getElementById('comment-input')
    buildToDo(input.value)
    form.reset()
  })

function buildToDo(todo) {
   let p = document.createElement('p')
   p.textContent = `${todo}`
    console.log(p)
    document.querySelector("#list").appendChild(p)
}

//Like

const likeTimer = function () {

}

const heart = document.getElementById('heart')
heart.addEventListener('click', )