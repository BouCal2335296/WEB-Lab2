function getBlogId()
{
    const urlIdBlog = new URLSearchParams(window.location.search);
    return urlIdBlog.get("id");
}

function afficherCommentaire()
{
    fetch("http://localhost:3000/commentaire")
    .then(response => response.json())
    // permet de récupérer les commentaire associé au blog
    .then(data =>
            {
                let idBlog = getBlogId();

                let filtreCommentaire = data.filter(commentaire => commentaire.blogId == idBlog);
                return filtreCommentaire;                
            }
        )
    .then(data => 
            {
                let commentaireContainer = $("#contenu");
                commentaireContainer.empty();
                let commentaire;
                data.forEach(comment => {
                    commentaire = `
                    <div class="row pt-4">
                        <div class="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle border-dark rounded-4 glow-effect bgBlue" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </div>
                        <div class="col-11">
                            <p class="Open-Sans-font text-white">${comment.contenu}</p>
                        </div>
                    </div>`;
                    commentaireContainer.append(commentaire);
                });
            }
        );
}
afficherCommentaire();
