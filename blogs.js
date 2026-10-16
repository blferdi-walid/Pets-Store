const filterBlogsBtnsDB = [
  { id: 1, label: "All articles", category: "all" },
  { id: 2, label: "Dog care", category: "dog" },
  { id: 3, label: "Cat care", category: "cat" },
  { id: 4, label: "Other pets", category: "otherPets" },
  { id: 5, label: "General tips", category: "generalTips" },
];

const FEATURED_COUNT = 3; // cards in the top section
const PAGE_SIZE = 6; // cards added by each "Load more"

let blogsDB = [];
let NumberLoading = PAGE_SIZE;
let currentCategory = "all";

const blogsPage = document.querySelector("#blogsPage");

async function loadBlogs() {
  const res = await fetch("./json/blogs.json");
  blogsDB = await res.json();
}

/* ---------- list page ---------- */
function blogListHTML() {
  return `
    <p class="UrlCON"></p>
    <div class="FilterBarBlogs">
      <div class="FilterBarBlogs_Left"></div>
    </div>
    <div class="blogs">
      <div class="blogArtic"></div>
    </div>
    <div class="LearnMoreBlogs" id="LearnMoreBlogs"></div>`;
}

function blogCardHTML(item) {
  return `<div class="blogsItem" data-id="${item.id}">
    <img src="${item.img}" alt="${item.title}">
    <div class="blogItem_content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="authur">
        <img src="${item.authorImg}" alt="${item.authorName}">
        <span>${item.authorName}</span>
      </div>
    </div>
  </div>`;
}

function LearnBlogCardHTML(item) {
  return `<div class="LearnMoreblogsItem" data-id="${item.id}">
    <img src="${item.img}" alt="${item.title}">
    <div class="LearnMoreblogsItem_content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="authur">
        <img src="${item.authorImg}" alt="${item.authorName}">
        <span>${item.authorName}</span>
      </div>
    </div>
  </div>`;
}

function renderUrl() {
  const urlHtml = document.querySelector(".UrlCON");
  if (!urlHtml) return;

  const path = location.hash.slice(1) || "/";
  const segments = path.split("/").filter(Boolean).map(decodeURIComponent);
  urlHtml.innerHTML = segments
    .map((seg) => `<span class="lastSegmentURL">${seg}</span>`)
    .join(`<span class="sep"> / </span>`);
}

/* banner at the top of the blog page (reuses the category banner CSS) */
function renderBlogHeader() {
  const page = document.querySelector("#blogsPage");
  if (!page || page.querySelector(".CatName_ProductPage")) return;

  const head = document.createElement("div");
  head.classList.add("CatName_ProductPage");
  head.innerHTML = `
    <div class="CatName_ProductPage_content">
      <img src="./images/blog.png" alt="Blog">
      <h3>Our Blog</h3>
    </div>`;

  const filterBar = page.querySelector(".FilterBarBlogs");
  if (filterBar) filterBar.insertAdjacentElement("beforebegin", head);
}

function buildFilterButtons() {
  const bar = document.querySelector(".FilterBarBlogs_Left");
  if (!bar) return;

  bar.innerHTML = filterBlogsBtnsDB
    .map(
      (btn) =>
        `<button type="button" class="filterBlogsBtn${
          btn.category === currentCategory ? " active" : ""
        }" data-category="${btn.category}">${btn.label}</button>`,
    )
    .join("");
}

function getFilteredBlogs() {
  return blogsDB.filter(
    (b) => currentCategory === "all" || b.category === currentCategory,
  );
}

/* top section: first 3 cards */
function renderBlogGrid() {
  const grid = document.querySelector(".blogArtic");
  if (!grid) return;

  const items = getFilteredBlogs();

  grid.innerHTML = items.length
    ? items.slice(0, FEATURED_COUNT).map(blogCardHTML).join("")
    : `<p>No blogs in this category.</p>`;
}

/* learn more section: title + grid + button (button is a sibling of the grid) */
function renderLearnMoreBlogs() {
  const container = document.querySelector("#LearnMoreBlogs");
  if (!container) return;

  container.innerHTML = `
    <h3 class="learnMoreTitle">Learn more!</h3>
    <div class="learnMoreGrid"></div>
    <div class="LoadMoreSection">
      <button id="LoadMore" class="LoadMore">Load more</button>
    </div>`;
}

/* learn more section: cards after the first 3 */
function renderLearnBlogGrid() {
  const grid = document.querySelector(".learnMoreGrid");
  if (!grid) return;

  const rest = getFilteredBlogs().slice(FEATURED_COUNT);

  grid.innerHTML = rest.slice(0, NumberLoading).map(LearnBlogCardHTML).join("");

  const loadMore = document.querySelector(".LoadMoreSection");
  if (loadMore)
    loadMore.style.display = rest.length > NumberLoading ? "" : "none";
}

function renderBlogsPage() {
  if (!blogsPage) return;
  currentCategory = "all";
  NumberLoading = PAGE_SIZE;

  blogsPage.innerHTML = blogListHTML();
  renderUrl();
  renderBlogHeader();
  buildFilterButtons();
  renderBlogGrid();
  renderLearnMoreBlogs();
  renderLearnBlogGrid();
}

/* ---------- detail page ---------- */
function renderBlogDetail(id) {
  const blog = blogsDB.find((b) => b.id === Number(id));
  if (!blog) {
    blogsPage.innerHTML = `<p>Blog not found</p>`;
    return;
  }

  blogsPage.innerHTML = `
    <p class="UrlCON"></p>
    <article class="blogDetail">
      <img src="${blog.img}" alt="${blog.title}">
      <h2>${blog.title}</h2>
      <div class="authur">
        <img src="${blog.authorImg}" alt="${blog.authorName}">
        <span>${blog.authorName}</span>
      </div>
      <p>${blog.description}</p>
    </article>`;
  renderUrl();
}

/* ---------- events (one listener, using delegation) ---------- */
document.addEventListener("click", (e) => {
  // filter buttons
  const filterBtn = e.target.closest(".filterBlogsBtn");
  if (filterBtn) {
    currentCategory = filterBtn.dataset.category;
    NumberLoading = PAGE_SIZE;
    buildFilterButtons();
    renderBlogGrid();
    renderLearnBlogGrid();
    return;
  }

  // load more
  if (e.target.id === "LoadMore") {
    NumberLoading += PAGE_SIZE;
    renderLearnBlogGrid();
    return;
  }

  // open a blog (featured or learn-more card)
  const card = e.target.closest(".blogsItem, .LearnMoreblogsItem");
  if (card) {
    location.hash = `#/blogs/${card.dataset.id}`;
  }
});

/* ---------- router ---------- */
async function blogsRouter() {
  if (!blogsPage) return;
  if (!blogsDB.length) await loadBlogs();

  const [section, id] = (location.hash.slice(1) || "/")
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);

  if (section === "blogs" && id) renderBlogDetail(id);
  else renderBlogsPage();
}

window.addEventListener("hashchange", blogsRouter);
window.addEventListener("DOMContentLoaded", blogsRouter);