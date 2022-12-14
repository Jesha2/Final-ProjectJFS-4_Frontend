let newProduct = new ProductController(0);

function addItemCard(item) {
    const itemHTML =
        '<div class="row row-cols-1 row-cols-md-3 g-4">\n' +
        '<div class="col-md-auto">\n' +
        '  <div class="card h-100">\n' +
        ' <img src="' + item.imageUrl + '" class="card-img-top" alt="..." id="img">\n' +
        '<div class="card-body">\n' +
        '<h5 class="card-title" id="name">' + item.name + '</h5>\n' +
        '<p class="card-text" id="description">' + item.description + '</p>\n' +
        '<p class="card-text" id="size">' + item.size + '</p>\n' +
        '</div>\n' +
        '<div class="card-footer">\n' +
        '<small class="text-muted" id="price"><b>' + item.price + '</b></small>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<br></br>\n';
    const itemsContainer = document.getElementById("Men-list");
    console.log(itemsContainer.innerHTML);
    itemsContainer.innerHTML += itemHTML;
    console.log('codeAdded');
    console.log(itemsContainer.innerHTML);

}
pageCat = "Men";
function loadStorageSampleData() {
    if (!localStorage.getItem(pageCat)) {
        const sampleItems = [{
            'name': 'T-shirt',
            'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
            'description': 'tshirt for kids', 'price': '55', 'size': 'LG'
        },
        {
            'name': 'T-shirt',
            'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
            'description': 'tshirt for kids', 'price': '55', 'size': 'LG'
        }];
        localStorage.setItem(pageCat, JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController() {
    for (var i = 0, size = newProduct.items.length; i < size; i++) {
        const item = newProduct.items[i];
        addItemCard(item);
    }
}

newProduct.getDataFromDatabase();// downloading data from database to local storage
loadStorageSampleData();// Creating 2 data entry if the localstorage is empty i.e no data in DB
newProduct.loadItemsFromLocalStorage(pageCat);// Selecting from  the local storage based on category-pageCat 
loadCardsListFromItemsController();//creating HTML Tags for the cards