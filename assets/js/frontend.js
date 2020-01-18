// FUNCIONES
// 2.0
// Declaramos "addCar" que recibe un objeto "restaurant" desde la función "renderRestaurants";
const addCard = restaurant => {
    // 2.1
    // Card crea el objeto del DOM "div".
    const card = document.createElement("div");
    // Asignamos un "id" a card
    card.setAttribute('data-id', restaurant.id);
    // Agregamos clases a "card".
    card.classList.add("col-md-4");

    // 2.2
    // Creamos template.
    card.innerHTML = 
    '<div class="card restaurant__card">' +
        '<div class="card-header"><h4 class="card-title">'+ restaurant.name +'</h4></div>' +
        '<div class="card-body">' +
            '<div class="col-12 col-reset restaurant__raiting"><ul class="raiting--list rating-'+ restaurant.rating +'"><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li></ul></div>'+
            '<a href="https://www.facebook.com/sharer/sharer.php?u='+ restaurant.contact.site +'" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn--share">Compartir <i class="fas fa-share-square"></i></a>'+
            '<article class="col-12 col-reset restaurant__info">'+
                '<h5>Datos de contacto</h5>'+
                '<p>Sitio web: <a href="'+ restaurant.contact.site +'">'+ restaurant.contact.site +'</a></p>'+
                '<p>Reservaciones: <a href="mailto:'+ restaurant.contact.email +'">'+ restaurant.contact.email +'</a></p>'+
                '<p>Teléfono: <a href="tel:'+ restaurant.contact.phone +'">'+ restaurant.contact.phone +'</a></p>'+
            '</article><hr>'+
            '<section class="col-12 col-reset restaurant__address">'+
                '<h5>Dirección</h5>'+
                '<p>'+ restaurant.address.street +', '+ restaurant.address.city +', <strong>'+ restaurant.address.state +'</strong></p>'+
            '</section>'+
            '<div class="col-12 col-reset restaurant__action">'+
                '<a href="https://www.google.com.sa/maps/search/'+ restaurant.address.location.lat +','+ restaurant.address.location.lng+'" class="btn btn--type2" target="_blank" rel="noopener noreferrer">Cómo llegar</a>'+
                '<a href="mailto:'+ restaurant.contact.email +'" class="btn btn--type1">Reservar</a>'+
            '</div>'+
        '</div>'+
    '</div>'
    
    var restaurantItem = document.getElementById("js-restaurant-item");
    restaurantItem.appendChild(card);
};

// 3.0
// Ejecutamos nuestro código cuando se termina de cargar la página.
window.addEventListener("load", () => {
    renderRestaurants = json.map(restaurant => {
        addCard(restaurant);
    });
});