document.addEventListener("DOMContentLoaded", function() {

    const btnSol = document.getElementById("soldes");

    if (btnSol) {
        btnSol.addEventListener("click", function() {
            window.location.href = "soldes-La_Team_Luc.html";
        });
    }


    const btnRSol = document.getElementById("retour-soldes");

    if (btnRSol) {
        btnRSol.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    const btnP = 
document.getElementById("projets");

    if (btnP) {
        btnP.addEventListener("click",function() {
            window.location.href = "projets-La_Team_Luc.html";
        });
    }


    const btnRP = document.getElementById("retour-projets");

    if (btnRP) {
        btnRP.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    
    const btnSou =
document.getElementById("sources")

    if (btnSou) {
        btnSou.addEventListener("click",function() {
            window.location.href = "sources-La_Team_Luc.html";
        });
    }
    
    const btnRSou =
document.getElementById("retour-sources")

    if (btnRSou) {
        btnRSou.addEventListener("click",function() {
            window.location.href = "index.html";
        });
    }
});