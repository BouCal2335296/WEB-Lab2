$(document).ready(function() {
    let progressBar = $("#progress-bar");  // Sélectionne la barre de progression
    let width = 0;

    function chargerProgression() {
        if (width < 100) {
            width++;
            progressBar.css("width", width + "%");
            setTimeout(chargerProgression, 30);  // Continue l'animation
        }
        else {
            window.location.href = "principale.html";  // Redirige vers la page principale
        }
    }

    chargerProgression();  // Démarre l'animation
});
