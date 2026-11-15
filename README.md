# 🐾 Pets Store

A responsive front-end pet shop website built with plain **HTML, CSS and JavaScript** — no frameworks. Browse pets and pet products by animal and category, read pet-care blog posts, manage a shopping cart, and go through a multi-step checkout.

## ✨ Features

- **Home page** – hero section with search bar, category shortcuts, and *Special Offers* (treats & new brands)
- **Product catalog** – 200+ items covering dogs, cats, fish, birds, small pets and reptiles
- **Filtering & sorting** – filter by category (animals, food, treats, health, supplies), sort results, and "load more" pagination
- **Product details** – size options, ratings breakdown, and a "You might also like" section
- **Hash-based routing** – single-page style navigation between product lists and detail views (`#...`)
- **Blog** – pet-care articles loaded from JSON, with category filters and a detail view
- **Shopping cart & checkout** – cart with quantity controls, then a 3-step flow: shipping info → payment (credit card / PayPal) → order summary
- **Contact page** – contact information and message form
- **Responsive design** – mobile navigation menu and layouts that adapt to small screens

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, layout, responsive design |
| JavaScript (ES6+) | Rendering, routing, filtering, cart & checkout logic |
| JSON | Blog posts, cart and comment data |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Google Fonts](https://fonts.google.com/) | Poppins & Inter Tight |

## 📁 Project Structure

```
Pets-Store/
├── index.html          # Home page
├── products.html       # Product listing & product details
├── categories.html     # All categories
├── blog.html           # Blog list & article view
├── shoppinCard.html    # Shopping cart & checkout
├── Contact.html        # Contact page
├── script.js           # Main logic: product data, header/footer, routing, cart, checkout
├── blogs.js            # Blog loading, filtering and rendering
├── style.css           # Site-wide styles
├── json/
│   ├── blogs.json        # Blog articles
│   ├── ShoppingCard.json # Sample cart items
│   └── comment.json      # Comments data
└── images/             # Pet and product images
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/blferdi-walid/Pets-Store.git
cd Pets-Store
```

### 2. Run a local server

The blog page loads data with `fetch()`, which browsers block when a file is opened directly (`file://`). Serve the folder with any local server, for example:

- **VS Code:** install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then right-click `index.html` → **Open with Live Server**
- **Node.js:**
  ```bash
  npx serve .
  ```
- **Python:**
  ```bash
  python -m http.server 8000
  ```
  then open <http://localhost:8000>

## 🔮 Possible Improvements

- Persist the cart with `localStorage` or a backend
- Make the home page search bar functional
- Form validation for checkout and contact forms
- Move product data from `script.js` into a JSON file or API

## 👤 Author

**Walid Belferdi** – [@blferdi-walid](https://github.com/blferdi-walid)

---

⭐ If you like this project, consider giving it a star!
