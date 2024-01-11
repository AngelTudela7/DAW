let div = document.querySelector('.zona');

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=151",
        data: "data",
        dataType: "JSON",
        success: function (response) {
            for (let i = 0; i < 151; i++) {
                let pokeURL = response.results[i].url;
                console.log(i)
                $.ajax({
                    type: "GET",
                    url: pokeURL,
                    data: "data",
                    dataType: "JSON",
                    success: function (pokefoto) {
                        let imagen = pokefoto.sprites.front_default;
                        let cardHTML = `<div class="card"><h1>${response.results[i].name}</h1><img src="${imagen}" alt="${response.results[i].name}"></div>`;
                        div.innerHTML += cardHTML;
                        
                    }
                });
            }
        }
    });
});
