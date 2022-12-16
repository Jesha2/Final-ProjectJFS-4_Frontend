let newProduct = new ProductController(0);

function UpdateProduct(e){
    const id = document.getElementById('id');
    const category = document.getElementById('category');
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const img = document.getElementById('img');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    const size = document.getElementById('size');

    console.log(img.value)
    newProduct.updateItem(id.value,category.value,name.value,description.value,img.value,price.value,size.value,quantity.value);
    newProduct.updateItemInlocalStorage(id.value,category.value,name.value,description.value,img.value,price.value,size.value,quantity.value);
    newProduct.getDataFromDatabase();
    e.preventDefault(); 
    // Clear the form on the product page after onclick
    category.value = '';
    name.value = '';
    description.value = '';
    img.value = '';
    price.value = '';
    size.value = '';
    quantity.value = '';
}
let btn = document.getElementById('btn');
btn.onclick = UpdateProduct;

// export default newProduct


