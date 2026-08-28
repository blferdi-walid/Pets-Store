// start product page
// start filter product page
 const path = location.hash.slice(1) || "/";
const [section, param] = path.split("/").filter(Boolean).map(decodeURIComponent);
const animal = param

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
const LoadMore = document.querySelector("#LoadMore");



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
let NumberLoading = 10;
LoadMore.addEventListener("click", () => {
  NumberLoading += 10;
  GetProductFilter();
});
console.log(NumberLoading);
const GetProductFilter = (categoryProducts = "all") => {
  const productFilterItems = productsDB.filter((item) => {
    if (!categoryProducts || categoryProducts === "all") {
      return item.animal === animal;
    } else {
      return item.animal === animal && item.category === categoryProducts;
    }
  });

  if (sortSelectValue === "increes") {
    productFilterItems.sort((a, b) => a.price - b.price);
  } else if (sortSelectValue === "decrees") {
    productFilterItems.sort((a, b) => b.price - a.price);
  }
  products.innerHTML = "";

  productFilterItems.slice(0, NumberLoading).forEach((item) => {
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




window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
// end product page