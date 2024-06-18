window.addEventListener("scroll" , function(){
    const menu = document.querySelector('.header')
    menu.classList.toggle('rolagem' , window.scrollY > 0);
})