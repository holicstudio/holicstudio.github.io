const fetchData = require('./utils/fetchData');
const API = 'https://holicstudio.com/dev/restaurantes/restaurantes.json';

fetchData(API)
    .then(data => {
        console.log(`
                    Id: ${data[0].id},
                    Rating: ${data[0].rating},
                    Name: ${data[0].name},
                    Contacto: ${data[0].contact.site},
                    Dirección: ${data[0].address.street}
                `)
        return fetchData(`${API}${data[0].id}`)
    })
    .catch(err => console.error(err))


    /*'<div class="card restaurant__card">' +
        '<div class="card-header"><h4 class="card-title">'+ restaurant.name +'</h4></div>' +
        '<div class="card-body">' +
            '<div class="col-12 col-reset restaurant__raiting"><ul class="raiting--list rating-'+ restaurant.rating +'"><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li><li><i class="fas fa-star"></i></li></ul></div>'+
            '<a href="https://www.facebook.com/sharer/sharer.php?u='+ restaurant.contact.site +'" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn--share">Compartir en Facebook <i class="fas fa-share-square"></i></a>'+
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
    '</div>'*/