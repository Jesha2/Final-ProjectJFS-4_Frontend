

let newProduct = new ProductController(0);

function addProduct(e){
    const category = document.getElementById('category');
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const img = document.getElementById('img');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    const size = document.getElementById('size');

    newProduct.addItem(category.value,name.value,description.value,img.value,price.value,size.value,quantity.value);
    e.preventDefault();
}
let btn = document.getElementById('btn');
btn.onclick = addProduct;

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'T-shirt',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'tshirt for kids', 'price': '55', 'size': 'LG'},
        {'name':'T-shirt',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'tshirt for kids', 'price': '55', 'size': 'LG'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = newProduct.items.length; i < size ; i++){
        const item = newProduct.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
newProduct.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
// export default newProduct


