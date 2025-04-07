document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const btnAjouter = document.getElementById('ajouter');
    const btnConfirmer = document.getElementById('confirmer');

    $("#message").dialog({
        closeOnEscape: false,
        autoOpen: false,
        modal: true,  // Empêche l'interaction avec le reste du site
        buttons: {
            "Confirmer": function () {
                ajouterPublication();
                $(this).dialog("close");
            },
            "Annuler": function () {
                $(this).dialog("close");
                $("#ajouter").fadeIn(200); // Réaffiche le bouton Ajouter si l'utilisateur annule
            }
        }
    });

    btnAjouter.addEventListener('click', function (event) {
        event.preventDefault();
        $("#ajouter").fadeOut(200, function () {
            $("#message").dialog("open");
        });
    });

    function ajouterPublication() {
        const titre = document.getElementById('titre').value;
        const auteur = document.getElementById('auteur').value;
        const contenu = document.getElementById('contenu').value;

        fetch('http://localhost:3000/publication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titre, auteur, contenu })
        }).then(response => {
            if (response.ok) {
                window.location.href = "principale.html";
            } else {
                alert("Erreur lors de la publication");
                $("#ajouter").fadeIn(200);
            }
        }).catch(error => {
            console.error('Erreur:', error);
            alert("Impossible de contacter le serveur");
            $("#ajouter").fadeIn(200);
        });
    }
});
