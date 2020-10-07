function page(pageOut, pageIn){
    document.getElementById(pageOut).className += "invisible";
    document.getElementById(pageIn).classList.remove("invisible");
    window.scroll(0,document.getElementById(pageIn).scrollTop);
    if(pageOut == "initial-menu"){
        clearInterval(idMenu);
    }else if(pageIn=="initial-menu"){
        idMenu = setInterval("menu()",130);
    }
}