const categoriesItemDB = [
  {
    id: 1,
    Name: "dogs",
    img: "./images/dogs.png",
    category: "animals",
  },
  {
    id: 2,
    Name: "cats",
    img: "./images/cat.png",
    category: "animals",
  },
  {
    id: 3,
    Name: "fish",
    img: "./images/fish.png",
    category: "animals",
  },
  {
    id: 4,
    Name: "birds",
    img: "./images/bird.png",
    category: "animals",
  },
  {
    id: 5,
    Name: "smal pets",
    img: "./images/smallPet.png",
    category: "animals",
  },
  {
    id: 6,
    Name: "reptiles",
    img: "./images/reptiles.png",
    category: "animals",
  },
  {
    id: 7,
    Name: "reptiles",
    img: "./images/reptiles.png",
    category: "food",
  },
];

const blogs = [
  {
    id: 1,
    title: "10 Things Every New Dog Owner Should Know",
    category: "Dogs",
    author: "Sarah Johnson",
    date: "2026-08-01",
    image: "./images/dogs.png",
    summary:
      "From choosing the right food to setting up a training routine, here's everything you need to know before bringing home your first puppy.",
    content:
      "Bringing a new dog into your home is exciting, but it also comes with responsibility. ",
  },
  {
    id: 2,
    title: "Understanding Your Cat's Body Language",
    category: "Cats",
    author: "Michael Lee",
    date: "2026-08-03",
    image: "./images/cat.png",
    summary:
      "Cats communicate a lot through posture, tail movement, and ear position. Learn how to read the signs to better understand your feline friend.",
    content:
      "Unlike dogs, cats communicate subtly. A slow blink is a sign of trust and affection, while a puffed-up ",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Keeping Reptiles as Pets",
    category: "Reptiles",
    author: "Emma Torres",
    date: "2026-08-05",
    image: "./images/reptiles.png",
    summary:
      "Reptiles make fascinating low-maintenance pets, but they have very specific habitat and temperature needs. Here's what beginners should know.",
    content:
      "Reptiles like bearded dragons, geckos, and turtles require carefully controlled environments to thrive.",
  },
];

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
const footerId = document.querySelector(".footer");

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

// statr categories section

const CatitemsFilter = document.querySelector(".CatitemsFilter");

const catFiltred = categoriesItemDB.filter((Item) => {
  return Item.category === "animals";
});

catFiltred.map((Item) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("catItem");
  cartItem.innerHTML = `<div class="catItem">
              <h3>${Item.Name}</h3>
              <img src="${Item.img}" alt="">
            </div>`;

  CatitemsFilter.appendChild(cartItem);
});

// start blogs
const blogArtic = document.querySelector(".blogArtic");

blogs.map((Item) => {
  const blogsItem = document.createElement("div");
  blogsItem.classList.add("blogsItem");
  blogsItem.innerHTML = `
        <div class="blogsItem">
          <img src="${Item.image}" alt="">
          <div class="blogItem_content">
            <h3>${Item.title}</h3>
            <p>${Item.content}</p>
            <div class="authur">
              <img src="${Item.image}" alt="">
              <span>Dr. ${Item.author}</span>
            </div>
          </div>
        </div>
      `;
  blogArtic.appendChild(blogsItem);
});

// end blogs

// start flach Countdon
function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0",
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function timer(duration) {
  const targetTime = Date.now() + duration * 1000;

  const interval = setInterval(() => {
    const elapsedTime = targetTime - Date.now();
    if (elapsedTime > 0) {
      document.querySelector(".timer").textContent = formatTime(elapsedTime);
    } else {
      clearInterval(interval);
      document.querySelector(".timer").textContent = "00:00:00";
      console.log("Countdown finished!");
    }
  }, 1000); // 1 update per second is fine now, no decimals to show
}

timer(duration);
// end flach Countdon
