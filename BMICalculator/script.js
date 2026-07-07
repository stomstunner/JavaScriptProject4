const form = document.querySelector("form")
form.addEventListener('submit', function (event) {

    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector(".result")

    // now we add a checkpoint to see that ki user sahi vlaue daal raha hai
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a vlaid height
                            You entered ${height}
        `
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a vlaid weight
                            You entered ${weight}
        `
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if(bmi < 18.6){
            result.innerHTML = `<span>Your BMI: ${bmi} <br> UnderWeight</span>`
            result.style.color = "#e1c01b"
            result.style.textShadow = "2px 2px 5px #3533294b"
            
        }
        else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>Your BMI: ${bmi} <br> Normal</span>`
            result.style.color = "#13ed30"
            result.style.textShadow = "2px 2px 5px #3533294b"
        }
        else {
            result.innerHTML = `<span>Your BMI: ${bmi} <br> Overweight</span>`
            result.style.color = "#be0505"
            result.style.textShadow = "2px 2px 5px #3533294b"
        }
        // result.innerHTML = `<span>${bmi}</span>`
    }
})