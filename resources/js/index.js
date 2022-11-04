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



