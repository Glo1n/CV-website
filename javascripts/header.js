 
    const mainMenu = document.querySelector(".mainMenu");
    const closeMenu = document.querySelector(".closeMenu");
    const openMenu = document.querySelector(".openMenu");
    const icons = document.querySelector('.material-icons');

    openMenu.addEventListener('click',show);
    closeMenu.addEventListener('click',close);
  
    function show() {
        mainMenu.style.display = "flex";
        mainMenu.style.top = "0";
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
    }
    function close() {
        mainMenu.style.top = "-100%"
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    }
    
    document.getElementById("year").innerHTML = new Date().getFullYear();