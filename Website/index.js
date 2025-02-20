$.ajax({
    url: "http://localhost:3000/publication",
    method: "GET",
    datatype: "json",
    success: function(data) {
        let cardContainer = $("#card-container");
        for (let i = 0; i < data.length; i++) {
            let card = 
            `<div class="col-10 col-md-3 pt-5 pt-md-0 pb-md-3">
                <a href="index.html" class="text-decoration-none">
                    <div class="card card-animation bgDarkLight border-dark rounded-4 glow-effect d-flex align-items-center" >
                        <div class="d-flex justify-content-center img-card">
                            <img src="image/logo.PNG" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-white pl-3 lora-font d-flex align-items-center">${data[i].titre}</h5>
                            <p class="card-text text-white Open-Sans-font text-decoration-none">${data[i].contenue}</p>
                        </div>
                    </div>
                </a>
            </div>`;
            cardContainer.append(card);
        }
    }
})