let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: "Hawks Muscala Jersey",
		tag: "Jersey",
		price: 49.99,
		inCart: 0
	},
	{
		name: "Hawks Sweatshirt",
		tag: "Sweatshirt",
		price: 29.99,
		inCart: 0
	},
	{
		name: "Hawks Hat",
		tag: "Hawks_Cap",
		price: 19.99,
		inCart: 0
	},
	{
		name: "Hawks Laptop Backpack",
		tag: "Hawks Backpack",
		price: 75.99,
		inCart: 0
	},
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "49ers beanie",
		tag: "49ers beanie",
		price: 19.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}
	{
		name: "Hawks Basketball",
		tag: "Hawks Basketball",
		price: 12.99,
		inCart: 0
	}

];


for (let i=0; i< carts.length; i++){
	carts[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		document.querySelector('.cart_image span').textContent = productNumbers;
	}
}



function cartNumbers(product){
	
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);
	
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.cart_image span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart_image span').textContent = 1;
	}
	
	setItems(product);
	
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null){
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]:product
			}
		}
		cartItems[product.tag].inCart += 1; 
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]:product
		}
	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
	let cartCost = localStorage.getItem("totalCost");
	
	if (cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost');
	
	
	if(cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => 
		{productContainer.innerHTML += `
		<div class="product"><center>
			<span>${item.name}</span></cetner>
		</div>
		<div class ="quantity"><center>
		<span>${item.inCart}</span></center>
		</div>
		<div class ="price">$${item.price}</div>
		`;
		});
		
		productContainer.innerHTML += `
			<div class="basketTotalContainer">
				<h4 class="basketTotalTitle"><center>
					Basket Total:   $${cartCost} </center>
				</h4>
		`
	}
}



onLoadCartNumbers();
displayCart();























