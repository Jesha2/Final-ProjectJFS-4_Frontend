window.addEventListener("load", (event) => {
    // API for get requests
    let fetchRes = fetch('http://localhost:8080/item/all');
    // fetchRes is the promise to resolve
    fetchRes.then(res => res.json()).then(d => {
        console.log("START");
        console.log(d);
        localStorage.clear();
        console.log("+++++++");
        console.log(d);
        for (let i = 0; i < d.length; i++) {
            const countryHTML = '<tr>\n' +
                '<th scope="row">' + d[i].id + '</th>\n' +
                '<td>' + d[i].category + '</td>\n' +
                '<td>' + d[i].name + '</td>\n' +
                '<td>' + d[i].description + '</td>\n' +
                '<td>' + d[i].imageUrl + '</td>\n' +
                '<td>' + d[i].size + '</td>\n' +
                '<td>' + d[i].price + '</td>\n' +
                '<td>' + d[i].quantity + '</td>\n' +
                '</tr>\n';
            const countryContainer = document.getElementById('listproducts');
            console.log('code Html Added');
            console.log(countryHTML);
            countryContainer.innerHTML += countryHTML;
            console.log("+++++++");
        }
        console.log("FINISH");

    });

});