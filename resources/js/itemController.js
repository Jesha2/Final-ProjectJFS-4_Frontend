console.log("*************** ITEM CONTROLLER file connected");
class ProductController {

    constructor(currentId=0){
    
        this.items = [];
        this.currentId = currentId;
    }

    //// Load items from DAtabase to JSON
    getDataFromDatabase(){
    // API for get requests
    //localStorage.clear();
    let fetchRes = fetch(
        'http://localhost:8080/item/all');
                // fetchRes is the promise to resolve
                // it by using.then() method
                fetchRes.then(res =>
                    res.json()).then(d => {
                        console.log(d);
                        console.log("START");
                        localStorage.clear();
                        for(let i=0; i< d.length; i++)
                    {
                        let item = {
                            id: d[i].id,
                            category: d[i].category,
                            name: d[i].name,
                            description: d[i].description,
                            imageUrl : d[i].imageUrl,
                            price :d[i].price,
                            size :d[i].size,
                            quantity : d[i].quantity
                        }
                        this.items.push(item);
                        console.log(d[i].category);
                        const keyC = item.category;
                        localStorage.setItem(keyC, JSON.stringify(this.items));
                        console.log(item);
                    }
                    console.log("FINISH");
                        
                    });
                
                }
                selectKids(){}
      //Add an item           
    addItem(category, name, description, img, price, size, quantity){
        
        let item = {
            id: this.currentId++,
            category: category,
            name: name,
            description: description,
            imageUrl : img,
            price :price,
            size :size,
            quantity : quantity
        }

        this.items.push(item);
        console.log("***************All the product added" );
        console.log(this.items);
        console.log(item);
        const keyC = item.category;
        
        localStorage.setItem(keyC, JSON.stringify(this.items));
        // localStorage.setItem("items", JSON.stringify(this.item));
    }

// Save
saveItem(category, name, description, imageUrl, price, size, quantity){
            const data = { category, name, description, imageUrl, price, size, quantity};
    
            fetch('http://localhost:8080/item', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:',data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }

        


//Load, KeyP: key for kids, women and men
    loadItemsFromLocalStorage(keyP) {
        const storageItems = localStorage.getItem(keyP)
        console.log(storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                if (item.category == keyP){
                    this.items.push(item);
                }
                
            }
        }
    }
}


