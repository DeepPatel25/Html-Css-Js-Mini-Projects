const inputEl = document.querySelector('.input')
const bodyEl = document.querySelector('body')

updateBody()

function updateBody() {
    if(inputEl.checked){
        bodyEl.style.background = 'black'
    } else {
        bodyEl.style.background = 'white'
    }
}

inputEl.addEventListener('input', ()=>{
    updateBody()
})