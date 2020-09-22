let XMLHttpRequest = require('XMLhttprequest').XMLHttpRequest;
let API = 'https://holicstudio.com/dev/restaurantes/restaurantes.json'

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText ))
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1)
    console.log(`
        Id: ${data1[0].id},
        Rating: ${data1[0].rating},
        Name: ${data1[0].name},
        Contacto: ${data1[0].contact.site},
        Dirección: ${data1[0].address.street},
    `)
})