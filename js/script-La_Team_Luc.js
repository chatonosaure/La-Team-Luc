document.addEventListener("DOMContentLoaded", function() {

    const btnS = document.getElementById("soldes");

    if (btnS) {
        btnS.addEventListener("click", function() {
            window.location.href = "soldes-La_Team_Luc.html";
        });
    }


    const btnRS = document.getElementById("retour-soldes");

    if (btnRS) {
        btnRS.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});

