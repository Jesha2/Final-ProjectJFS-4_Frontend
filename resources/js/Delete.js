let newProduct = new ProductController(0);
let btn = document.getElementById('btn');
btn.style.display = 'none';

function lookItem(e) {
    const idHtml = document.getElementById('id');
    let id = idHtml.value;
    let s = 'http://localhost:8080/item/' + id;
    let fetchRes = fetch(s);
    // fetchRes is the promise to resolve
    fetchRes.then(res => res.json()).then(d => {
        console.log("START");
        console.log(d);

        localStorage.clear();
        console.log("+++++++");
        console.log(d);
        const itemHTML =
            '<div class="row row-cols-1 row-cols-md-3 g-4">\n' +
            '<div class="col-md-auto">\n' +
            '  <div class="card h-100">\n' +
            ' <img src="' + d.imageUrl + '" class="card-img-top" alt="..." id="img">\n' +
            '<div class="card-body">\n' +
            '<h5 class="card-title" id="name">' + d.name + '</h5>\n' +
            '<p class="card-text" id="description">' + d.description + '</p>\n' +
            '<p class="card-text" id="size">' + d.size + '</p>\n' +
            '</div>\n' +
            '<div class="card-footer">\n' +
            '<small class="text-muted" id="price"><b>' + d.price + '</b></small>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<br></br>\n';

        const itemsContainer = document.getElementById("product");
        console.log(itemsContainer.innerHTML);
        itemsContainer.innerHTML += itemHTML;
        console.log('codeAdded');
        console.log(itemsContainer.innerHTML);
        console.log("FINISH");

    });
    console.log("FINISH");
    btn.style.display = 'block';
    e.preventDefault();
}


function DeleteProduct(e) {
    const id = document.getElementById('id');
    console.log(id.value);
    
    newProduct.deleteItem(id.value);
    newProduct.deleteItemsFromLocalStorage(id.value);
    newProduct.getDataFromDatabase();

    const itemsContainer = document.getElementById("product");
    itemsContainer.style.display = 'none';
    btn.style.display = 'none';
    e.preventDefault();
    // Clear the form on the product page after onclick
    id.value = '';
    alert("Item deleted");
}

let btn1 = document.getElementById('btnS');

btn1.onclick = lookItem;

btn.onclick = DeleteProduct;

// export default newProduct


