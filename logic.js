const phone = "918882461887";
let products = [];

const penBrands = ["Reynolds", "Cello", "Parker", "Linc", "Flair"];
const penTypes = ["Gel", "Ball", "Roller", "Fountain"];

const notebookBrands = ["Classmate", "Navneet", "Paperkraft", "Camlin"];
const pencilBrands = ["Apsara", "Nataraj", "Camlin"];
const sharpenerBrands = ["Nataraj", "Apsara"];
const geometryBrands = ["Camlin", "Classmate"];
const calendarTypes = ["Wall Calendar", "Desk Calendar"];

function generateProducts() {
  products = [];

  penBrands.forEach(b =>
    penTypes.forEach(t =>
      products.push({
        category: "Pens",
        name: `${b} ${t} Pen`,
        brand: b,
        img: "https://via.placeholder.com/300"
      })
    )
  );

  notebookBrands.forEach(b =>
    ["A4", "A5", "Long"].forEach(s =>
      products.push({
        category: "Notebooks",
        name: `${b} ${s} Notebook`,
        brand: b,
        img: "https://via.placeholder.com/300"
      })
    )
  );

  pencilBrands.forEach(b =>
    ["HB", "2B", "4B"].forEach(t =>
      products.push({
        category: "Pencils",
        name: `${b} ${t} Pencil`,
        brand: b,
        img: "https://via.placeholder.com/300"
      })
    )
  );

  sharpenerBrands.forEach(b =>
    products.push({
      category: "Sharpeners",
      name: `${b} Sharpener`,
      brand: b,
      img: "https://via.placeholder.com/300"
    })
  );

  geometryBrands.forEach(b =>
    products.push({
      category: "Geometry",
      name: `${b} Geometry Box`,
      brand: b,
      img: "https://via.placeholder.com/300"
    })
  );

  calendarTypes.forEach(c =>
    products.push({
      category: "Calendars",
      name: c,
      brand: "Generic",
      img: "https://via.placeholder.com/300"
    })
  );
}

function render(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.category} • ${p.brand}</p>
        <button onclick="order('${p.name}')">Order on WhatsApp</button>
      </div>
    `;
  });
}

function filterCategory(cat) {
  if (cat === "All") {
    render(products);
  } else {
    render(products.filter(p => p.category === cat));
  }
}

function order(name) {
  const msg = `Hello Chauhan Brothers 👋
I want to order:
📦 ${name}`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  render(
    products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  );
});

generateProducts();
render(products);
