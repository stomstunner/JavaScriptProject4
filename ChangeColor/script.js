const start = document.querySelector(".start")
const stop = document.querySelector(".stop")

// lets do the calculation so we can generate a random color everytime 
// random color start hoga hash se aur usme ham naya koi bhi vlaue ko dalte rhaege random number by adding the number  

// so random color will be a fucntion that generate a random color everytime it is called  
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"

    // run the loop
    for (let i = 0; i < 8; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        // it will generate a random color and everytime it generate a random color 0 to 16
        // console.log(color);
    }
    return color;
}
// console.log(randomColor());
let intervel;
const startChangingColor = function () {
    //we make a varibale that holds the id of the setIntervarl method so leter we can use for clear intervel 
    // we see that ki hamne intervel ke vlaue ko null kar diya hai toh uske liye ham start wlae ko tabhi chalenge jab intervel ke ander null naa ho
    // intervel = setInterval(function () {
    //     document.body.style.backgroundColor = randomColor()
    // }, 1000)

    if (!intervel) {
        intervel = setInterval(function () {
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
}

const stopChangingColor = function () {
    clearInterval(intervel)
    // nowe we null the intevel vlaue so it can clear its vlaue after stop 
    intervel = null
}



start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangingColor)