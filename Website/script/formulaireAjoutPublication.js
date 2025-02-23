document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const btnAjouter = document.getElementById('ajouter');
    const btnConfirmer = document.getElementById('confirmer');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const titre = document.getElementById('titre').value;
            const auteur = document.getElementById('auteur').value;
            const contenu = document.getElementById('contenu').value;

            cacherBoutonAjouter();
            form.addEventListener('click', function () {
                fetch('http://localhost:3000/publication', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ titre, auteur, contenu })
                })
                window.location.href = "principale.html";
            });


        });
});

function cacherBoutonAjouter() {
    $("#ajouter").fadeOut(200, function () {
        $("#ajouter").hide();
        afficherBoutonConfirmer();
    });
}
function afficherBoutonConfirmer() {
    $("#confirmer").removeAttr('hidden').hide().fadeIn(200);
    console.log("test1");
}















// function ajouterPublication()
// {


//     fetch("http://localhost:3000/publication",
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 id: 12,
//                 titre: "blablabla",
//                 auteur: "blablabla",
//                 date: "blablabla",
//                 contenu: "blablabla"
//             })
//         }
//     )
// }
