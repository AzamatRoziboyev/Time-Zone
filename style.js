const serach = document.querySelector('.serach')
const inputClose = document.querySelector('.input-close')
const serachKatta =document.querySelector('.serach-katta')
// *login
const login = document.querySelector('.login')
const loginKatta = document.querySelector('.login-katta')
const loginClose = document.querySelector('.login-close')

serach.addEventListener("click", () => {
    serachKatta.classList.add("active")
})
inputClose.addEventListener("click", () => {
    serachKatta.classList.remove("active")
})
// * login
login.addEventListener("click", () => {
    loginKatta.classList.add("active")
})
loginClose.addEventListener("click", () => {
    loginKatta.classList.remove("active")
})