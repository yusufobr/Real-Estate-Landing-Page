const imgOne = document.getElementById('imgOne')
const imgTwo = document.getElementById('imgTwo')

imgOne.addEventListener('click', () => {
    imgOne.classList.toggle('hidden')
    imgTwo.classList.toggle('hidden')
})

imgTwo.addEventListener('click', () => {
    imgOne.classList.toggle('hidden')
    imgTwo.classList.toggle('hidden')
})

setTimeout(()=>{
    imgOne.classList.toggle('hidden')
    imgTwo.classList.toggle('hidden')
}, 5000)