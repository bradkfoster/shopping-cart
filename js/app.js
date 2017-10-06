var items = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var pics = ["images/finger-toothbrush.jpeg", "images/barrys-greatest.jpg", "images/ramen-oreos.jpeg", "images/woofwash.jpg", "images/sauna-pants.jpg", "images/hug-me.jpg"];




//items in cart.

var cartBox = document.createElement('div');
cartBox.id = 'mainContent';
document.body.appendChild(cartBox);









for(var i = 0; i <items.length; i++){
	console.log(items[i].product);
	
	var cartDiv = document.createElement('div');
	cartDiv.className = 'cartDiv';


	var cartPics = document.createElement('div');
	cartPics.classname = 'cartPics';
	daPics = document.createElement('img');
	daPics.classname = 'daPics';
	daPics.src = pics[i];
	daPics.style.height = '60px';
	daPics.style.weight = '50px';
	
	cartPics.appendChild(daPics);
	cartDiv.appendChild(cartPics);

	var product = document.createElement('div');
	product.classname = 'product';

	var productName = document.createElement('div');
	productName.class = 'productName';
	var hName = document.createElement('h2');
	hName.innerHTML = items[i].product;
	var disc = document.createElement('p');
	disc.innerHTML = items[i].description;

	productName.appendChild(hName);
	productName.appendChild(disc);
	product.appendChild(productName);

	cartDiv.appendChild(product);

	var pricediv = document.createElement('div');
	pricediv.className = 'pricediv';
	pricediv.innerHTML = items[i].price;
	pricediv.style.textAlign = 'right';

	cartDiv.appendChild(pricediv);

	cartBox.appendChild(cartDiv);
   
}

var cartSum = 0;

for(var i = 0; i < items.length; i++){
	cartSum += items[i].price;
}


var subtotalDiv = document.createElement('div');

var subName = document.createElement('div');
subName.classname = 'subName';
var subh2 = document.createElement('h2');
subh2.classname = 'subh2';
subh2.innerHTML = "Subtotal";
subName.appendChild(subh2);

var cartTotal = document.createElement('div');
cartTotal.classname = 'cartTotal';
var totalh2 = document.createElement('h2');
totalh2.classname = 'totalh2';
totalh2.innerHTML = cartSum;
totalh2.style.textAlign = 'right';
cartTotal.appendChild(totalh2);


subtotalDiv.appendChild(subName);
subtotalDiv.appendChild(cartTotal);

cartBox.appendChild(subtotalDiv);














 




