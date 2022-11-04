// import newProduct from './index.js';

function addItemCard() {
    const itemHTML = 
    '<div class="row row-cols-1 row-cols-md-3 g-4">\n'+
    '<div class="col">\n' +
    '  <div class="card h-100">\n'+
       ' <img src="" class="card-img-top" alt="..." id="img">\n'+
        '<div class="card-body">\n'+
          '<h5 class="card-title" id="name"></h5>\n'+
          '<p class="card-text" id="description"></p>\n'+
          '<p class="card-text" id="size"></p>\n'+
        '</div>\n'+
        '<div class="card-footer">\n'+
        '<small class="text-muted" id="price"></small>\n'+
        '</div>\n'+
      '</div>\n'+
    '</div>\n'+
    '<br></br>\n';

    const itemsContainer = document.getElementById("list");
    itemsContainer.innerHTML += itemHTML;
    console.log('codeAdded')
}

function addItems() {
   // let Products = newProduct.items
    
}
// onload = addItems;
console.log(newProduct.items) 