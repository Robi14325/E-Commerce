const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
  <div class="footer-content">
      <img src="/image/light-logo.png" class="logo" alt="">
      <div class="footer-ul-container">
          <ul class="category">
              <li class="category-title">men</li>
              <li><a href="#" class="footer-link">t-shirts</a></li>
              <li><a href="#" class="footer-link">shirts</a></li>
              <li><a href="#" class="footer-link">jeans</a></li>
              <li><a href="#" class="footer-link">shoes</a></li>
              <li><a href="#" class="footer-link">formals</a></li>
              <li><a href="#" class="footer-link">sports</a></li>
              <li><a href="#" class="footer-link">watch</a></li>
          </ul>
          <ul class="category">
              <li class="category-title">women</li>
              <li><a href="#" class="footer-link">t-shirts</a></li>
              <li><a href="#" class="footer-link">shirts</a></li>
              <li><a href="#" class="footer-link">jeans</a></li>
              <li><a href="#" class="footer-link">shoes</a></li>
              <li><a href="#" class="footer-link">formals</a></li>
              <li><a href="#" class="footer-link">sports</a></li>
              <li><a href="#" class="footer-link">watch</a></li>
          </ul>
      </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">Welcome to our Web page.<br><br>UniQe Shop.com is a One-Stop Tech Shop that offers Tech Enthusiasts authentic Smartphones, Gadgets & Accessories from renowned brands so they can have first-hand experience with the real thing. We aim to achieve the highest customer satisfaction by ensuring top-notch service through Multichannel Shopping Stores, Online Store, EMI Facility, Exchange Offers, Free Home Delivery, Dedicated Service Centers, and many more. We built our business on client's trust and we are committed to do so as long as the clients are with us! We also have the vision to be Bangladesh's largest tech Smartphones, Gadgets & Accessories retailer. In UniQe Shop.com, we are continuously growing ourselves to meet the challenge of a new age and new client base. We know that client satisfaction is a never-ending journey. Also, we have a strong dedicated team that thrust us towards perfection and quality service.</p>
  <p class="info">support emails - robiulislambappycr7@gmail.com, customersupport@clothing.com</p>
  <p class="info">telephone - +88 017 2784 8575</p>
  <div class="footer-social-container">
      <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
      </div>
  </div>
  <p class="footer-credit">© 2024 Thanks From UniQe Shop .com™ Ltd. | All rights reserved</p>
  `;
}

createFooter();