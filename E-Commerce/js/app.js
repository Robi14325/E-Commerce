
$(document).ready(function(){
    // var cart = JSON.parse(localStorage.getItem('cart')) || [];
    // alert("hello app")
    displayCart()
    $.get('/products', function(data) {
        // var products = JSON.parse(data);
        console.log(data)
        var products = data;
        var productsHtml = '';
        products.forEach(function(product) {
            // productsHtml += '<div><h2>' + product.name + '</h2><p>' + product.description + '</p><p>Price: $' + product.price + '</p><button class="addToCart" data-name="' + product.name + '" data-price="' + product.price + '">Add to Cart</button></div>';
            productsHtml += `<div class="food_img col_1">
                            <div class="image">
                    <img src=${product.Images} alt="burger" />
                    </div>
            <div class="details">
              <h3 >${product.price} <i class="fa-solid fa-bangladeshi-taka-sign"></i></h3>
              <p>${product.Name}</p>
              <div class="dtls_btn">
                <a href="/details/${product.Name}"> Details</a>
                <button  onclick="AddToCart('${product.Name}',${product.price})">
                 Add To Cart</button>
              </div>
            </div>
          </div>';`
        });
        $('#fastfood_part').html(productsHtml);

})//get

})//document
function AddToCart(n,p){
    console.log(n)
    console.log(p)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    
                    var price = p;
                    console.log( $(this).data())
                    var existingItem = cart.find(item => item.name === n);
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cart.push({ name: n, price: p, quantity: 1 });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(cart)
}
function displayCart() {
    console.log("here")
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    var cartHtml = ' ';
    cart.forEach(function(item) {
        cartHtml += `<tr><td>  ${item.name} </td><td>${item.quantity} 
        </td><td>${item.price} </td><td>${item.price*item.quantity}
         </td></tr>`;
    });
     
    $('#cart tbody').html(cartHtml);
    console.log(cartHtml)
}
