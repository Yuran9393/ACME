var swiper = new Swiper(".mySwiper", {});
let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.menu_list');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    
})