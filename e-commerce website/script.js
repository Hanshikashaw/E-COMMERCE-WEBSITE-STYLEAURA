const products = [
    {id:1, name: "Black Short Jumpsuit", price: 1000, image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60"},
    {id: 2, name: "Graphic Crop T-Shirt", price: 800, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60"},
    {id: 3, name: "Graphic T-shirt", price: 500, image:"https://images.unsplash.com/photo-1516258454449-64fed1caa732?w=500&auto=format&fit=crop&q=60"}
];

const productsContainer = document.querySelector(".products");
let cartCount = 0;  

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-container");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("picture");
    const img =  document.createElement("img");
    img.classList.add("picture-in-div");
    img.src = product.image;
    imgDiv.appendChild(img);

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("product-detail");
    const title = document.createElement("h3");
    title.textContent = product.name;
    detailDiv.appendChild(title);

    const price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = `₹${product.price}`; 

    const button = document.createElement("button");
    button.classList.add("add");
    button.textContent = "Add To Cart";

    
    button.addEventListener("click", () => {
        
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const cartImg = document.createElement("img");
        cartImg.src = product.image;
        cartImg.style.width = "60px";

        const cartName = document.createElement("p");
        cartName.textContent = product.name;

        const cartPrice = document.createElement("p");
        cartPrice.textContent = `₹${product.price}`;

        cartItem.appendChild(cartImg);
        cartItem.appendChild(cartName);
        cartItem.appendChild(cartPrice);

        document.getElementById("cart").appendChild(cartItem);

    
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;
        document.getElementById("cart-count-display").textContent = cartCount;

        
        const message = document.createElement("p");
        message.textContent = "Added to cart successfully!";
        message.style.color = "green";
        message.style.textAlign = "center";
        message.style.fontWeight = "bold";

        productDiv.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 1500);
    });

    productDiv.appendChild(imgDiv);
    productDiv.appendChild(detailDiv);
    detailDiv.appendChild(price);
    detailDiv.appendChild(button);

    productsContainer.appendChild(productDiv);
    
});
// abhi doubt kya hai ? kii ab aage kya async aur sync wla thora sa dekhe the
// / code suru ki ho ? async wala 
// yeh api testing software hai jis se yeh pata kar sakte ki api sahin hai ki galat