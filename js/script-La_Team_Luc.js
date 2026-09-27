document.addEventListener("DOMContentLoaded", function() {

    const boutonS = document.getElementById("soldes");

    if (boutonS) {
        boutonS.addEventListener("click", function() {
            window.location.href = "soldes-La_Team_Luc.html";
        });
    }


    const boutonRS = document.getElementById("retour-soldes");

    if (boutonRS) {
        boutonRS.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});

