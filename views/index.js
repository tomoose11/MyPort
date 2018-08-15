var nav = document.getElementById("nav");
scrollDown = false;

window.addEventListener("scroll",(e)=>{
    if(this.scrollY > 25) {
        nav.style.transition = "500ms";
        nav.style.height = "23%";
        nav.style.fontSize = "54px";
        scrollDown = true;
    }
    if(this.scrollY <=20 && scrollDown && window.innerWidth > 900) {
        nav.style.transition = "500ms";
        nav.style.height = "40%";
        nav.style.fontSize = "100px";
        setTimeout(()=>{
            nav.style.cssText = "";
        },500);
        scrollDown = false;
    }
});