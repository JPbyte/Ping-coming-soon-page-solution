const button = document.querySelector(".btn-submit")

const inputText = document.querySelector("#input-text")

const text = document.querySelector(".error")

button.addEventListener('click', (e) => {
    let ren = /\S+@\S+\.\S+/;

    let validate = ren.test(inputText.value);

    if (!validate === true){
        inputText.style.border = "2px solid red"
        text.classList.add('active')
    } else{
        location.reload()
    }

})

