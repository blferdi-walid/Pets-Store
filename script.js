const categoriesItemDB = [
  {
    id: 1,
    name: "dogs",
    img: "./images/dogs.png",
    category: "animals",
    Dr: "Dogg",
  },
  {
    id: 2,
    name: "cats",
    img: "./images/cat.png",
    category: "animals",
  },
  {
    id: 3,
    name: "fish",
    img: "./images/fish.png",
    category: "animals",
  },
  {
    id: 4,
    name: "birds",
    img: "./images/bird.png",
    category: "animals",
  },
  {
    id: 5,
    name: "smal pets",
    img: "./images/smallPet.png",
    category: "animals",
  },
  {
    id: 6,
    name: "reptiles",
    img: "./images/reptiles.png",
    category: "animals",
  },
  {
    id: 7,
    name: "reptiles",
    img: "./images/reptiles.png",
    category: "food",
  },
];

const SpecialOffersDB_Treats = [
  {
    id: 1,
    name: "dogs",
    img: "./images/dogs.png",
    category: "animals",
    Dr: "Dr. Dogg",
  },
];

const SpecialOffersDB_NewBrands = [
  {
    id: 2,
    name: "cats",
    img: "./images/cat.png",
    category: "animals",
    Dr: "Meet Mr.whiskerr",
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

const productsDB = [
  // ===== Animals (your original 20, unchanged) =====
  {
    id: 1,
    title: "Friendly golden dog",
    name: "Rex",
    animal: "dogs",
    img: "./images/dogs.png",
    price: 149.99,
    category: "animals",
    liked: false,
  },
  {
    id: 2,
    title: "Playful young puppy",
    name: "Max",
    animal: "dogs",
    img: "./images/dogs-1.jpg",
    price: 199.99,
    category: "animals",
    liked: false,
  },
  {
    id: 3,
    title: "Smart family dog",
    name: "Buddy",
    animal: "dogs",
    img: "./images/dogs.png",
    price: 179.99,
    category: "animals",
    liked: true,
  },
  {
    id: 4,
    title: "Loyal guard dog",
    name: "Rocky",
    animal: "dogs",
    img: "./images/dogs-1.jpg",
    price: 219.99,
    category: "animals",
    liked: false,
  },
  {
    id: 5,
    title: "Soft fluffy cat",
    name: "Luna",
    animal: "cats",
    img: "./images/cat.png",
    price: 129.99,
    category: "animals",
    liked: false,
  },
  {
    id: 6,
    title: "Calm indoor cat",
    name: "Milo",
    animal: "cats",
    img: "./images/cat.png",
    price: 119.99,
    category: "animals",
    liked: true,
  },
  {
    id: 7,
    title: "Curious little kitten",
    name: "Simba",
    animal: "cats",
    img: "./images/cat.png",
    price: 139.99,
    category: "animals",
    liked: false,
  },
  {
    id: 8,
    title: "Colorful tropical fish",
    name: "Nemo",
    animal: "fish",
    img: "./images/fish.png",
    price: 9.99,
    category: "animals",
    liked: false,
  },
  {
    id: 9,
    title: "Golden aquarium fish",
    name: "Goldy",
    animal: "fish",
    img: "./images/fish.png",
    price: 7.99,
    category: "animals",
    liked: false,
  },
  {
    id: 10,
    title: "Small blue fish",
    name: "Dory",
    animal: "fish",
    img: "./images/fish.png",
    price: 12.99,
    category: "animals",
    liked: false,
  },
  {
    id: 11,
    title: "Singing canary bird",
    name: "Kiwi",
    animal: "birds",
    img: "./images/bird.png",
    price: 49.99,
    category: "animals",
    liked: false,
  },
  {
    id: 12,
    title: "Talking green parrot",
    name: "Rio",
    animal: "birds",
    img: "./images/bird.png",
    price: 89.99,
    category: "animals",
    liked: true,
  },
  {
    id: 13,
    title: "Small lovebird pair",
    name: "Coco",
    animal: "birds",
    img: "./images/bird.png",
    price: 59.99,
    category: "animals",
    liked: false,
  },
  {
    id: 14,
    title: "Cute dwarf hamster",
    name: "Peanut",
    animal: "small pets",
    img: "./images/smallPet.png",
    price: 19.99,
    category: "animals",
    liked: false,
  },
  {
    id: 15,
    title: "Fluffy white rabbit",
    name: "Snowy",
    animal: "small pets",
    img: "./images/smallPet.png",
    price: 39.99,
    category: "animals",
    liked: false,
  },
  {
    id: 16,
    title: "Friendly guinea pig",
    name: "Oreo",
    animal: "small pets",
    img: "./images/smallPet.png",
    price: 29.99,
    category: "animals",
    liked: false,
  },
  {
    id: 17,
    title: "Green baby gecko",
    name: "Ziggy",
    animal: "reptiles",
    img: "./images/reptiles.png",
    price: 69.99,
    category: "animals",
    liked: false,
  },
  {
    id: 18,
    title: "Calm pet turtle",
    name: "Sheldon",
    animal: "reptiles",
    img: "./images/reptiles.png",
    price: 54.99,
    category: "animals",
    liked: false,
  },
  {
    id: 19,
    title: "Small bearded dragon",
    name: "Spike",
    animal: "reptiles",
    img: "./images/reptiles.png",
    price: 99.99,
    category: "animals",
    liked: true,
  },
  {
    id: 20,
    title: "Young corn snake",
    name: "Noodle",
    animal: "reptiles",
    img: "./images/reptiles.png",
    price: 79.99,
    category: "animals",
    liked: false,
  },

  // ===== Food =====
  {
    id: 21,
    title: "Premium dry dog food 5kg",
    name: "Royal Meal",
    animal: "dogs",
    img: "./images/dogs.png",
    price: 24.99,
    category: "food",
    liked: false,
  },
  {
    id: 22,
    title: "Salmon wet cat food pack",
    name: "Ocean Feast",
    animal: "cats",
    img: "./images/cat.png",
    price: 12.99,
    category: "food",
    liked: true,
  },
  {
    id: 23,
    title: "Tropical fish flakes",
    name: "Aqua Bites",
    animal: "fish",
    img: "./images/fish.png",
    price: 5.99,
    category: "food",
    liked: false,
  },
  {
    id: 24,
    title: "Mixed seed bird food 1kg",
    name: "Seed Feast",
    animal: "birds",
    img: "./images/bird.png",
    price: 7.99,
    category: "food",
    liked: false,
  },

  // ===== Treats =====
  {
    id: 25,
    title: "Chewy bacon dog treats",
    name: "Happy Bites",
    animal: "dogs",
    img: "./images/dogs-1.jpg",
    price: 6.99,
    category: "treats",
    liked: false,
  },
  {
    id: 26,
    title: "Crunchy tuna cat treats",
    name: "Whisker Snacks",
    animal: "cats",
    img: "./images/cat.png",
    price: 4.99,
    category: "treats",
    liked: false,
  },
  {
    id: 27,
    title: "Honey sticks for birds",
    name: "Sweet Perch",
    animal: "birds",
    img: "./images/bird.png",
    price: 3.99,
    category: "treats",
    liked: true,
  },

  // ===== Supplies =====
  {
    id: 28,
    title: "Strong walking leash",
    name: "Safe Walker",
    animal: "dogs",
    img: "./images/dogs.png",
    price: 12.99,
    category: "supplies",
    liked: false,
  },
  {
    id: 29,
    title: "Glass aquarium 40L",
    name: "Blue Home",
    animal: "fish",
    img: "./images/fish.png",
    price: 49.99,
    category: "supplies",
    liked: false,
  },
  {
    id: 30,
    title: "Hamster cage with wheel",
    name: "Cozy Fort",
    animal: "small pets",
    img: "./images/smallPet.png",
    price: 34.99,
    category: "supplies",
    liked: false,
  },

  // ===== Health =====
  {
    id: 31,
    title: "Flea & tick shampoo",
    name: "Clean Coat",
    animal: "dogs",
    img: "./images/dogs-1.jpg",
    price: 9.99,
    category: "health",
    liked: false,
  },
  {
    id: 32,
    title: "Reptile vitamin drops",
    name: "Vita Scale",
    animal: "reptiles",
    img: "./images/reptiles.png",
    price: 11.99,
    category: "health",
    liked: false,
  },
];
// start import header
const headerId = document.querySelector("#header");

const header = `
      <div class="Nav-Left">
        <span class="logo">
          <a href=""><i class="fa-solid fa-paw"></i></a>
        </span>
      </div>
      <div class="Nav-Right">
        <div class="Nav-Right-Links" >
          <ul >
            <a href="index.html">Home</a>
            <a href="categories.html">Categories</a>
            <a href="">Blog</a>
            <a href="Contact.html">Contact</a>
          </ul>
          <ul >
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href=""><i class="fa-solid fa-cart-arrow-down"></i></a>
            <a href=""><i class="fa-solid fa-user"></i></a>
          </ul>
        </div>
      </div>
      <i id="menuIcon" class="fa-solid fa-bars"></i>
    </header>`;

if (headerId) {
  headerId.innerHTML = header;

  // uppercase the nav links, now that the header actually exists in the DOM
  const NavLinks = document.querySelectorAll(".Nav-Right-Links ul a");
  NavLinks.forEach((link) => {
    link.textContent = link.textContent.toUpperCase();
  });
}
// end import header

// start import footer
const footerId = document.querySelector(".footer");

const footer = `<div class="footer">
        <div class="Footer-Container">
          <div class="footer-content">
            <div class="footerItem" >
              <i class="fa-solid fa-paw"></i>
            </div>
            <div class="footerItem">
              <h4>Company</h4>
              <a href="">About Us</a>
              <a href="">FAQ</a>
              <a href="">Contact</a>
            </div>
            <div class="footerItem">
              <h4>Legal</h4>
              <a href="">Privercy Policy</a>
              <a href="">Terms and Condition</a>
              <a href="">Cookie Policy</a>
            </div>
            <div class="footerItem">
              <h4>help</h4>
              <a href="">Shipping and Delivery</a>
              <a href="">Returns Policy </a>
              <a href="">Security and Payment</a>
            </div>
            <div class="footerItem">
              <div class="footerItem">

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

if (footerId) {
  footerId.innerHTML = footer;
}
// end import footer

// start categories section
const CatitemsFilter = document.querySelector(".CatitemsFilter");

if (CatitemsFilter) {
  const catFiltred = categoriesItemDB.filter(
    (Item) => Item.category === "animals",
  );

  catFiltred.forEach((Item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("catItem");
    cartItem.innerHTML = `
      <h3>${Item.name}</h3>
      <div class="ImgConatiner">
        <img src="${Item.img}" alt="${Item.name}">
      </div>
    `;
    CatitemsFilter.appendChild(cartItem);

    cartItem.addEventListener("click", () => {
      window.location.href = `products.html?animalName=${encodeURIComponent(Item.name)}`;
    });
  });
}

// get all categoriesItemDB
const AllCategories = document.querySelector(".AllCategories");

if (categoriesItemDB && AllCategories) {
  categoriesItemDB.forEach((Item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("catItem");

    cartItem.innerHTML = `
      <h3>${Item.name}</h3>
      <div class="ImgConatiner">
      <img src="${Item.img}" alt="${Item.name}">
      </div>
    `;
    AllCategories.appendChild(cartItem);
    cartItem.addEventListener("click", () => {
      window.location.href = `products.html?animalName=${encodeURIComponent(Item.name)}`;
    });
  });
}
// end categories section

// ============================
// start special Offer
// ============================
const specialItemstreats = document.querySelector(".treats");
if (specialItemstreats) {
  SpecialOffersDB_Treats.forEach((item) => {
    const specialOffer = document.createElement("div");
    specialOffer.classList.add("Special_item");
    specialOffer.innerHTML = `
      <div class="Special_item_head">
        <h3>Dog Treats</h3>
        <span>${item.Dr}</span>
      </div>
      <div class="Special_item_Img">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <button>Shop Now</button>
    `;

    specialOffer.style.backgroundColor = "rgb(231, 246, 252)";
    specialOffer.querySelector(".Special_item_Img img").style.backgroundColor =
      "var(--back-color-cover)";

    specialItemstreats.appendChild(specialOffer);
  });
}

const specialItemsNewBrands = document.querySelector(
  ".SpecialItems .NewBrands",
);

if (specialItemsNewBrands) {
  SpecialOffersDB_NewBrands.forEach((item) => {
    const specialOffer = document.createElement("div");
    specialOffer.classList.add("Special_item");
    specialOffer.innerHTML = `
      <div class="Special_item_head">
        <h3>New Brand in!</h3>
        <span>${item.Dr}</span>
      </div>
      <div class="Special_item_Img">
        <img src="${item.img}" alt="${item.animal}">
      </div>
      <button>Shop Now</button>
    `;

    specialOffer.style.backgroundColor = "rgb(249, 231, 252)";
    specialOffer.querySelector(".Special_item_Img img").style.backgroundColor =
      "rgb(0, 118, 198)";
    specialOffer.querySelector("button").style.backgroundColor =
      "rgb(195, 83, 214)";

    specialItemsNewBrands.appendChild(specialOffer);
  });
}
// end special Offer

// start product page
// start filter product page
const filterBtnsDB = [
  { id: 1, label: "All products", category: "all" },
  { id: 2, label: "Food", category: "food" },
  { id: 3, label: "Treats", category: "treats" },
  { id: 4, label: "Supplies", category: "supplies" },
  { id: 5, label: "Health", category: "health" },
];

const FilterBarLeft = document.querySelector(".FilterBar_Left");
if (FilterBarLeft) {
  filterBtnsDB.forEach((btn) => {
    const buttonFil = document.createElement("button");
    buttonFil.type = "button";
    buttonFil.classList.add("filterBtn");
    buttonFil.dataset.category = btn.category;
    buttonFil.textContent = btn.label;

    buttonFil.addEventListener("click", () => {
      const btnFilterLeft = document.querySelectorAll(".filterBtn");
      console.log(btnFilterLeft);

      GetProductFilter(btn.category);
      document
        .querySelectorAll(".filterBtn")
        .forEach((b) => b.classList.remove("active"));
      buttonFil.classList.add("active");
    });

    FilterBarLeft.appendChild(buttonFil);
  });
}

// end filter product page

const products = document.querySelector(".products");
const productsGrid = document.querySelector(".productsGrid");

const params = new URLSearchParams(window.location.search);
const animal = params.get("animalName");

const CatFilter = categoriesItemDB.find((item) => {
  return item.name === animal;
});
products.innerHTML = "";

if (CatFilter) {
  const CatNameProductPage = document.createElement("div");
  CatNameProductPage.classList.add("CatName_ProductPage");
  CatNameProductPage.innerHTML = `
      <div class="CatName_ProductPage_content">
        <img src="${CatFilter.img}" alt="${CatFilter.name}">
        <h3>${CatFilter.name}</h3>
      </div>
    `;
  productsGrid.insertAdjacentElement("beforebegin", CatNameProductPage);
}

const sortSelect = document.querySelector("#sortSelect");
let sortSelectValue = "";

const GetProductFilter = (categoryProducts = "all") => {
  const productFilterItems = productsDB.filter((item) => {
    if (!categoryProducts || categoryProducts === "all") {
      return item.animal === animal;
    } else {
      return item.animal === animal && item.category === categoryProducts;
    }
  });

  if (sortSelectValue  === "increes") {
    productFilterItems.sort((a, b) => a.price - b.price);
  } else if (sortSelectValue  === "decrees") {
    productFilterItems.sort((a, b) => b.price - a.price);
  }
  products.innerHTML = "";

  productFilterItems.forEach((item) => {
    const productItem = document.createElement("div");
    productItem.classList.add("productItem");
    productItem.innerHTML = `
      <div class="img">
                <div class="addTocart">
                  <button>Add to cart</button>
                </div>
                <img src="${item.img}" alt="">
              </div>
              <div class="productItem_header">
                <div class="productItem_title">
                  <p>${item.name}</p>
                  <i class="fa-solid fa-heart"></i>
                </div>
                <span class="price">$ ${item.price}</span>
              </div>
    `;

    products.appendChild(productItem);
  });
};
if (sortSelect)
  sortSelect.addEventListener("change", () => {
    sortSelectValue = sortSelect.value;
    const activeBtn = document.querySelector(".filterBtn.active");
    GetProductFilter(activeBtn ? activeBtn.dataset.category : "all");
  });

if (products) {
  GetProductFilter();
}
// end product page
// start blogs

const blogArtic = document.querySelector(".blogArtic");

if (blogArtic) {
  blogs.forEach((Item) => {
    const blogsItem = document.createElement("div");
    blogsItem.classList.add("blogsItem");
    blogsItem.innerHTML = `
      <img src="${Item.image}" alt="${Item.title}">
      <div class="blogItem_content">
        <h3>${Item.title}</h3>
        <p>${Item.content}</p>
        <div class="authur">
          <img src="${Item.image}" alt="${Item.author}">
          <span>Dr. ${Item.author}</span>
        </div>
      </div>
    `;
    blogArtic.appendChild(blogsItem);
  });
}
// end blogs

function timer(duration) {
  const timerEl = document.querySelector(".timer");
  if (!timerEl) return; // page has no countdown element, skip

  const targetTime = Date.now() + duration * 1000;

  const interval = setInterval(() => {
    const elapsedTime = targetTime - Date.now();
    if (elapsedTime > 0) {
      timerEl.textContent = formatTime(elapsedTime);
    } else {
      clearInterval(interval);
      timerEl.textContent = "00:00:00";
      console.log("Countdown finished!");
    }
  }, 1000);
}

// call timer with your desired duration in seconds, e.g.:
// timer(60 * 60 * 10); // 10 hours
// end flash sale countdown

// ============================
// start responsive header (mobile menu toggle)
// ============================
const menuIcon = document.querySelector("#menuIcon");
const NavRight = document.querySelector(".Nav-Right");

if (menuIcon && NavRight) {
  menuIcon.addEventListener("click", function () {
    NavRight.classList.toggle("active");
  });
}
// end responsive header
