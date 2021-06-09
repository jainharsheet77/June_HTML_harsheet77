let title;
let productElement, imageElement;
const products = document.getElementById("products")
for (let product of productList) {
    const { name, description, preview } = product;
    productElement = document.createElement('div');
    productElement.style.width = '15%';
    productElement.style.color = 'red';
    productElement.textContent = name;
    let button=document.createElement('button');
    button.textContent="Click Me";
    button.addEventListener('click',(event)=>{
        console.log("Event", event);
    })
    productElement.appendChild(button);
    button.addEventListener('click',(event)=>{
        console.log("Event", event);
    })
    // Description
    descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.style.color = 'blue';
    productElement.appendChild(descriptionElement)

    //Image
    imageElement = document.createElement('img');
    imageElement.src = preview;
    imageElement.width = '300';
    productElement.appendChild(imageElement)


    //Append ALL
    products.appendChild(productElement)
}
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = "title"
    title.textContent = i
    title.style.fontSize = '50px';
    title.style.color = 'red';
    document.body.appendChild(title)

}