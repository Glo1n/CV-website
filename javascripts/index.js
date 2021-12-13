

    let geboortejaar = new Date("04/01/1989");   
    let maandverschil = Date.now() - geboortejaar.getTime();  
    let agedate = new Date(maandverschil);   
    let year = agedate.getFullYear();    
    let age = Math.abs(year - 1970);  

    document.getElementById("age").innerHTML = age;
    document.getElementById("year").innerHTML = new Date().getFullYear();
