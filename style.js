const serach = document.querySelector('.serach')
const inputClose = document.querySelector('.input-close')
const serachKatta =document.querySelector('.serach-katta')
// *login
const login = document.querySelector('.login')
const loginKatta = document.querySelector('.login-katta')
const loginClose = document.querySelector('.login-close')
// * btn
const btn = document.getElementById('btn')

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
// * btn
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        btn.textContent = "🌑"
    }
    else {
        btn.textContent = "☀️"
    }
})