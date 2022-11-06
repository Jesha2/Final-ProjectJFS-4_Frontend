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

        this.items.push(item);
        console.log("***************All the product added" );
        console.log(this.items);
        console.log(item);
        localStorage.setItem("items", JSON.stringify(this.items));
        // localStorage.setItem("items", JSON.stringify(this.item));
    }
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        console.log(storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}


