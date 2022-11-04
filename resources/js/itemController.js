console.log("*************** ITEM CONTROLLER file connected");
class ProductController {

    constructor(currentId=0){
    
        this.items = [];
        this.currentId = currentId;
    }

    addItem(category, name, description, img, price, size, quantity){
        
        let item = {
            id: this.currentId++,
            category: category,
            name: name,
            description: description,
            img : img,
            price :price,
            size :size,
            quantity : quantity
        }
        console.log("*******Adding this item");
        console.log(item);
        this.items.push(item);
        console.log("***************All the product added" );
        console.log(this.items);
    }

}

