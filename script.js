const NavLinks = document.querySelectorAll(".Nav-Links-Left a");
const headerId = document.querySelector("#header");
NavLinks.forEach((link) => {
  link.textContent = link.textContent.toUpperCase();
});
// start import header
const header = `<header>
        <div class="Nav-Left">
          <span class="logo">
            <a href=""><i class="fa-solid fa-paw"></i></a>
          </span>
          <ul class="Nav-Links-Left">
            <a href="">Home</a>
            <a href="">Categories</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </ul>
        </div>

        <div class="Nav-Right">
          <ul class="Nav-links-Right">
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href=""><i class="fa-solid fa-cart-arrow-down"></i></a>
            <a href=""><i class="fa-solid fa-user"></i></a>
          </ul>
        </div>
      </header>`;

headerId.innerHTML = header;

// end import header

// start import footer
const footerId = document.querySelector("#footer");

const footer = `<div class="footer">
        <div class="Footer-Container">
          <div class="footer-content">
            <div>
              <i class="fa-solid fa-paw"></i>
            </div>
            <div>
              <h4>Company</h4>
              <a href="">About Us</a>
              <a href="">FAQ</a>
              <a href="">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="">Privercy Policy</a>
              <a href="">Terms and Condition</a>
              <a href="">Cookie Policy</a>
            </div>
            <div>
              <h4>help</h4>
              <a href="">Shipping and Delivery</a>
              <a href="">Returns Policy </a>
              <a href="">Security and Payment</a>
            </div>
            <div>
              <div>

                <h4>Social</h4>
                <div>
                  <span><a href=""><i class="fa-brands fa-instagram"></i></a></span>
                  <span><a href=""><i class="fa-brands fa-twitter"></i></a></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="copyrightFoot">Copyright Uizard Pet Store 2021</div>
        </div>
      </div>`;
footerId.innerHTML = footer;
// end import footer
