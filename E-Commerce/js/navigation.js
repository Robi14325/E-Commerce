const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
      <div class="nav">
          <img src="light-logo.png" class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product">
                  <button class="search-btn">search</button>
              </div>
              <a href="#"><img src="user.png" alt=""></a>
              <a href="#"><img src="cart.png" alt=""></a>
      </div>
      <ul class="links-container">
          <li class="link-item"><a href="Home.html" class="link">Home</a></li>
          <li class="link-item"><a href="product.html" class="link">Products</a></li>
          <li class="link-item"><a href="order.html" class="link">Orders</a></li>
          <li class="link-item"><a href="catagorie.html" class="link">Catagory</a></li>
      </ul>
  `;
}

createNav();
