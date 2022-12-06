let p= document.getElementById("foot")
let date=new Date
let year=1900+date.getYear()

p.innerHTML=`Copyright &copy; ${year} - All right reseved. `

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
right = document.querySelector('.right')



burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})