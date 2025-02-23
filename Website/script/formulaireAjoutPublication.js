document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const titre = document.getElementById('titre').value;
            const auteur = document.getElementById('auteur').value;
            const contenu = document.getElementById('contenu').value;


            fetch('http://localhost:3000/publication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titre, auteur, contenu })
            })
        });
        window.location.href = "principale.html";
    }
});















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
