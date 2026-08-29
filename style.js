const serach = document.querySelector('.serach')
const inputClose = document.querySelector('.input-close')
const serachKatta =document.querySelector('.serach-katta')

serach.addEventListener("click", () => {
    serachKatta.classList.add("active")
})
inputClose.addEventListener("click", () => {
    serachKatta.classList.remove("active")
})