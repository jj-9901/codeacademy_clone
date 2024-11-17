const navbar=document.querySelector("nav");
window.addEventListener('scroll',function(){
    if(this.window.scrollY>10){
        navbar.classList.add("nav-scrolled");
    }
    else
        navbar.classList.remove("nav-scrolled");
});