const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const imageContainerEl = document.querySelector('.image-container')
let currentImg = 1
const imgsEl = document.querySelectorAll('img')
let timeout

nextEl.addEventListener('click', ()=> {
    currentImg++
    clearTimeout(timeout)
    updateImage()
})

prevEl.addEventListener('click', ()=> {
    currentImg--
    clearTimeout(timeout)
    updateImage()
})

updateImage()

function updateImage() {
    if(currentImg > imgsEl.length) currentImg = 1;
    else if(currentImg < 1) currentImg = imgsEl.length
    imageContainerEl.style.transform = `translateX(-${(currentImg-1) * 500}px)`
    timeout = setTimeout(()=>{
        currentImg++
        updateImage()
    }, 3000)
}