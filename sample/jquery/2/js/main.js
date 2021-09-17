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
];

$(() => {
    var cardCat = $('#card');
    var btn = $('#btn');
    var input = $('#myInput');
    var sameName = (cat, name) => cat.name.toLowerCase() == name.toLowerCase();
    
    btn.click(getCat);

    function getCat() {
        let catFound = cats.find(cat => sameName(cat, input.val()));
        if (catFound) {
            buildCatCard(catFound)
            return
        }
        buildCatCardNotFound();
    }

    function buildCatCard(cat) {
        $(cardCat).find('h1').html(cat.name);
        $(cardCat).find('p').html(cat.description);
        $(cardCat).find('img').attr('src', cat.pathImage);
        $(cardCat).find('.external-link').attr('href', cat.url);
    }
    
    function buildCatCardNotFound() {
        $(cardCat).find('h1').html("Não encontrado");
        $(cardCat).find('p').html("");
        $(cardCat).find('img').attr('src', "images/cat-00.jpg");
        $(cardCat).find('.external-link').attr('href', "#");
    }
});