document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const urlIdBlog = new URLSearchParams(window.location.search).get('id');
            const blogId = urlIdBlog;
            const dateISO = new Date();
            const date = dateISO.toISOString().split('T')[0];
            const contenu = document.getElementById('commentaire').value;


            fetch('http://localhost:3000/commentaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ blogId, date, contenu})
            })
        });
    }
});