console.log("*************** ITEM CONTROLLER file connected");
class ProductController {

    constructor(currentId = 0) {

        this.items = [];
        this.currentId = currentId;
    }

    //// Load items from DAtabase to JSON
    getDataFromDatabase() {
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
                for (let i = 0; i < d.length; i++) {
                    let item = {
                        id: d[i].id,
                        category: d[i].category,
                        name: d[i].name,
                        description: d[i].description,
                        imageUrl: d[i].imageUrl,
                        price: d[i].price,
                        size: d[i].size,
                        quantity: d[i].quantity
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

    // Save item to the data base
    saveItem(category, name, description, imageUrl, price, size, quantity) {
        const data = { category, name, description, imageUrl, price, size, quantity };

        fetch('http://localhost:8080/item', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // find  item by id in the data base
    findItemById(id) {
        let s = 'http://localhost:8080/item/' + id;
        alert(s);
        const postMethod = {
            method: 'POST', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
        }   
        // Make the HTTP Delete call using fetch api
        fetch(s, postMethod)
            .then(response => response.json())
            .then(d => {
            alert(d);
            console.log("START");
            for (let i = 0; i < d.length; i++){
                let item = {
                    id: d[i].id,
                    category: d[i].category,
                    name: d[i].name,
                    description: d[i].description,
                    imageUrl: d[i].imageUrl,
                    price: d[i].price,
                    size: d[i].size,
                    quantity: d[i].quantity
                }
                alert(item);
                return(item);}}) 
                // Manipulate the data retrieved back, if we want to do something with it
            .catch(err => console.log(err))
                console.log("FINISH");

    }



    deleteItem(id) {

        let s = 'http://localhost:8080/item/' + id;
        const deleteMethod = {
            method: 'DELETE', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            // No need to have body, because we don't send nothing to the server.
        }
        // Make the HTTP Delete call using fetch api
        fetch(s, deleteMethod)
            .then(response => response.json())
            .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
            .catch(err => console.log(err)) // Do something with the error

    }

    // update item in the data base
    updateItem(id, category, name, description, imageUrl, price, size, quantity) {
        const data = { category, name, description, imageUrl, price, size, quantity };
        const s = 'http://localhost:8080/item/' + id;

        fetch(s, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    //Add an item  at local storage          
    addItem(category, name, description, img, price, size, quantity) {

        let item = {
            id: this.currentId++,
            category: category,
            name: name,
            description: description,
            imageUrl: img,
            price: price,
            size: size,
            quantity: quantity
        }

        this.items.push(item);
        console.log("***************All the product added");
        console.log(this.items);
        console.log(item);
        const keyC = item.category;

        localStorage.setItem(keyC, JSON.stringify(this.items));
    }

    //Add an item  at local storage          
    updateItemInlocalStorage(id, category, name, description, img, price, size, quantity) {

        let item = {
            id: id,
            category: category,
            name: name,
            description: description,
            imageUrl: img,
            price: price,
            size: size,
            quantity: quantity
        }
        const storageItems = localStorage.getItem(id)
        console.log(storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                if (item.id == id) {
                    this.items.updateItem(item);
                    localStorage.updateItem(item);
                }

            }
        }

    }

    //fin item by is from local storage
    // findItemByIdLocalStorage(id){
    //     const storageItems = localStorage.getItem(id);
    //     findItemByIdLocalStorage = storageItems;
    // }


    //delete item from storage
    deleteItemsFromLocalStorage(id) {
        const storageItems = localStorage.getItem(id)
        console.log(storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                if (item.id == id) {
                    this.items.deleteItem(item);
                    localStorage.removeItem(item);
                }

            }
        }
        
    }


    //Load, KeyP: key for kids, women and men
    loadItemsFromLocalStorage(keyP) {
        const storageItems = localStorage.getItem(keyP)
        console.log(storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                if (item.category == keyP) {
                    this.items.push(item);
                }

            }
        }
    }
}


