var toggler =true;

function toggle(){
    if(toggler){
        document.getElementById("nav-toggler").style.backgroundImage= `url()`;
        document.getElementById("nav-toggler").innerHTML='<i class="fa-solid fa-xmark"></i>';
        toggler = false;
    }
    else{
        document.getElementById("nav-toggler").style.backgroundImage= `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
        document.getElementById("nav-toggler").innerHTML=' ';
        toggler = true;

    }
}