const QueryString = window.location.search; 


$(document).ready(function(){
  // $('.carousel').carousel('cycle');

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
        // Event linstener
        productElement.addEventListener('click',()=>{
          window.location.replace(`/1`);
        })

        //Append to poduct conatiner
        products.appendChild(productElement);
    }
  }

  fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then(res=>res.json())
    .then(res=>{

      clothList=res.slice(0,5);
      watchList=res.slice(5,10);

      products = document.getElementById("clothing_container");
      createCards(clothList);
      products=document.getElementById("Watches_container");
      createCards(watchList);

      const urlParams = new URLSearchParams(QueryString); 
      let keys = urlParams.keys();
      console.log(urlParams,QueryString);
      var productId = window.location.search.split('=')[1];
      console.log(productId);
    });
});