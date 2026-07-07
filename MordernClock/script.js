// lets fetch the clock clss
const clock = document.querySelector(".clock")

// now we have to use a method that runs continueous every time 
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)


