const submit = document.querySelector('#subt')

let randomNumber = parseInt(Math.random() * 100 + 1)
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainning = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultparas")

// we want to create a para leter so we that a para 

const p = document.createElement("p")
// now we make a array jisme ham hamrare previous guess ko store karnege 
let prevGuess = []
// and we store a counter type varibale that start with the 1  and goes till 10 only
let numGuess = 1
// and a basic variable jisse hamre pata chata rahe ki hamre game khelna hai ya nahi 
let playGame = true

// lets try to write a conditional statement
if(playGame){
    submit.addEventListener("click", (event) => {
        event.preventDefault()
        // isse ham bata rahe hai ki haa abhi ruko yaar mujhe kuch kaam hai 
        // now we store the userinput ka vlaue 
        const guess = parseInt(userInput.value)
        // isse hamne user input ko store kar liya pane 
        //now we call the next method and pass this guess 
        validateguess(guess)
    })
}

//  fucntion for validatea guess number ki 
function validateguess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter number greater then 1")
    }
    else if(guess > 100){
        alert("Please enter number lesser then 100")
    }
    else{
        //push the number, check his attemps then display guess, display massage,  and end game
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMassage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
            // and chekc guess me ham diplay kar denge vlaue ko
        }
    }
}
// fucntion for cheking the guess
// ye check karnege ki kahi mera abhi inputed vlaue random(result) ke equal toh nahi hai 
// so we can go to the display method or display massage method ki batao hamra vlaue result ke equal toh nahi ya high ya low hai toh batao 

function checkGuess(guess) {
    // check the random number == gueess 
    if(randomNumber === guess){
        displayMassage(`You guessed it right`)
        endGame()
    }
    else if(randomNumber > guess){
        displayMassage(`Number is Too Low`)
    }
    else if(randomNumber < guess){
        displayMassage(`Number is Too High`)
    }
}
function displayGuess(guess) {
    // so kind of we cleanup the uerinput to empty string 
    userInput.value = ''
    // span tag me ham inputed guess ke vlaue ko add krete rahenge

    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    //  now we display ki hamare pass kitna guess bacha hua hai 
    remainning.innerHTML = `${11 - numGuess}`
}

// a fucntion for dom manupulation jaisse ki naya guess ko page pe add karna then previous ko hatana aur remainning attemept ke vlaue ko hatana 
function displayMassage(guess) {
    // now we add the loworhi to the innerhtml 
    lowOrHi.innerHTML = `<h2>${guess}</h2>`
}
// function for endGame
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    // so we have to pass the diabled in a key value pair 
    // now we add a clisslist ot the paragraph jo banaya tha
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// fucntion for new game
function newGame() {
    //ab hamne jo newGame naam ka id banya tha usse fetch karnege
    const newGameButton = document.querySelector("#newGame")
    // ab hame event listerner lagennege apne new game button pe 
    newGameButton.addEventListener('click', function(event) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess  = 1
        guessSlot.innerHTML = ''
        remainning.innerHTML = `${11 - numGuess}`
        // now we have to remove the diabled attribute 
        userInput.removeAttribute('disabled')
        // remove the startover me se para 
        startOver.removeChild(p)
        
        playGame = true
        lowOrHi.innerHTML = ''
    })


}