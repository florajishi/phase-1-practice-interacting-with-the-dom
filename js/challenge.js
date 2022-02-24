/* TIMER */
const counter = document.getElementById(`counter`)
let timer = setInterval(incrementCounter, 1000)
let i = 0
function incrementCounter(){
    i++
    counter.innerHTML = i
}
/* INCREMENT BUTTON */
const increment = document.getElementById(`plus`)
increment.addEventListener(`click`, incrementCounter)


/* DECREMENT BUTTON */
const decrement = document.getElementById(`minus`)
decrement.addEventListener(`click`, decrementCounter)
function decrementCounter(){
    i--
    counter.innerHTML = i
}

/* PAUSE FUNCTIONALITY */
const pause = document.getElementById(`pause`)
pause.addEventListener(`click`, pauseTimer)
function pauseTimer(){
    if(pause.innerText === `pause`){
        pause.innerText = `resume`
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        clearInterval(timer)
    }
    else {
        pause.innerText = `pause`
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        timer = setInterval(incrementCounter, 1000)
    }
}

/* LIKE BUTTON */
const heart = document.getElementById(`heart`)
heart.addEventListener(`click`, trackLikes)

/* LIKE FUNCTIONALITY */
const ul = document.querySelector(`ul`)
const likesList = []
function trackLikes(){
    let likeNum = counter.innerText
    likesList[likeNum] = likesList[likeNum] || 0
    likesList[likeNum] += 1
    addLikes()
}
function addLikes(){
    ul.innerHTML = ""
    for(let num in likesList){
        const li = document.createElement(`li`)
        if(likesList[num] === 1){
            li.innerText = `${num} has been liked ${likesList[num]} time`
        }
        else {
            li.innerText = `${num} has been liked ${likesList[num]} times`
        }
        ul.append(li)
    }
}

/* COMMENT FUNCTIONALITY */
const commentBox = document.getElementById(`comment-form`)
const userInput = document.getElementById(`comment-input`)
const displayComments = document.querySelector(`.comments`)
commentBox.addEventListener(`submit`, e =>{
    e.preventDefault()
    const p = document.createElement(`p`)
    p.textContent = userInput.value
    displayComments.append(p)
    commentBox.reset()

})
