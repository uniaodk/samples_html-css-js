var cats = [
    {
        "id": 1,
        "name": "Chico",
        "description": "Chico is tired to be cat, then turn to dinossaur.",
        "pathImage": "images/cat-01.jpg",
        "url": "https://www.instagram.com/canseidesergato/"
    }, {
        "id": 2,
        "name": "Hamilton",
        "description": "Hamilton is the most hipster cat that you will see today.",
        "pathImage": "images/cat-02.jpg",
        "url": "https://www.instagram.com/hamilton_the_hipster_cat/"
    }, {
        "id": 3,
        "name": "Nala",
        "description": "Nala make the movie The Lion King and shrink after that.",
        "pathImage": "images/cat-03.jpg",
        "url": "https://www.instagram.com/nala_cat/"
    }
]

var cardCat = document.getElementById('card');
var btn = document.getElementById('btn');
var input = document.getElementById('myInput');
var sameName = (cat, name) => cat.name.toLowerCase() == name.toLowerCase();

function getCat() {
    let catFound = cats.find(cat => sameName(cat, input.value));
    if (catFound) {
        buildCatCard(catFound);
        return;
    }
    buildCatCardNotFound();
}

function buildCatCard(cat) {
    cardCat.querySelector('h1').innerHTML = cat.name;
    cardCat.querySelector('p').innerHTML = cat.description;
    cardCat.querySelector('img').src = cat.pathImage;
    cardCat.querySelector('.external-link').href = cat.url;
}

function buildCatCardNotFound() {
    cardCat.querySelector('h1').innerHTML = 'Não encontrado';
    cardCat.querySelector('p').innerHTML = '';
    cardCat.querySelector('img').src = "images/cat-00.jpg";
    cardCat.querySelector('.external-link').href = '#';
}

btn.addEventListener('click', getCat);
