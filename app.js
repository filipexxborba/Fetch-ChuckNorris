const piada = document.querySelector('#joke');
const loader = '<div class="loader"></div>'

function realizarRequest(){
    piada.innerHTML = loader;
    const request = fetch("https://api.chucknorris.io/jokes/random");
    request
    .then(result => result.json())
    .then(body => {
        piada.innerText = body.value;
    })
}

realizarRequest();