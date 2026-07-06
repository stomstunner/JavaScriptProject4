const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((item) => {
    // console.log(item)
    // now we add event listener to the item
    item.addEventListener('click', function(event){
        // console.log(event);
        console.log(event.target);  
        if(event.target.id === 'gray'){
            // body.style.backgroundColor = "#212121"
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'white'){
            // body.style.backgroundColor = "#212121"
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'blue'){
            // body.style.backgroundColor = "#212121"
            body.style.backgroundColor = "#4fc3f7"
        }
        if(event.target.id === 'brown'){
            // body.style.backgroundColor = "#212121"
            body.style.backgroundColor = "#8d6e63"
        }
    });
});
