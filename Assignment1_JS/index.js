let productElement, imageElement,nameElement,priceElement,detailsDiv,products;
let createCards=(itemList)=>{

    for (let item of itemList) {
        const { name, brand, preview,price } = item;
        productElement = document.createElement('div');
        productElement.classList.add('card');
        
        //Image
        imageElement = document.createElement('img');
        imageElement.src = preview;
        productElement.appendChild(imageElement);

        // Detail container
        detailsDiv=document.createElement('div');
        detailsDiv.classList.add('details');

        // Name
        nameElement=document.createElement('h3');
        nameElement.textContent=name;
        detailsDiv.appendChild(nameElement);
        // Description
        descriptionElement = document.createElement('h4');
        descriptionElement.textContent = brand;
        detailsDiv.appendChild(descriptionElement);   
        
        // Price
        priceElement=document.createElement('h5');
        priceElement.textContent=`Rs ${price}`;
        detailsDiv.appendChild(priceElement);
        // Append details to product element
        productElement.appendChild(detailsDiv);
        //Append to poduct conatiner
        products.appendChild(productElement);
    }
}

clothList=productList.slice(0,5);
watchList=productList.slice(5,10);

products = document.getElementById("clothing_container");
createCards(clothList);
products=document.getElementById("Watches_container");
createCards(watchList);

