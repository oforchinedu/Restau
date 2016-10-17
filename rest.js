class Buy{
	let cart = []
	constructor(cart){
		this.cart = cart;
	}
}

class Customer{
	var cart // making cart editable to add and remove items
	let money;

	addToCart(){
		this.Buy = new Buy([{name: items}])
	}
}

class System{
	// request has reach system
	verifyOrder()
	processPayment()
	MessageCustomer()
	commitUpdate()
}