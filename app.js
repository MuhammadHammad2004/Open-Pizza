const pizzaMenu = [
  {
    name: "Margherita Classic",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "$14.99",
  },
  {
    name: "Pepperoni Supreme",
    description: "Pepperoni, extra cheese, Italian herbs",
    price: "$16.99",
  },
  {
    name: "Vegetarian Delight",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "$15.99",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "$17.99",
  },
  {
    name: "Margherita Classic",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "$14.99",
  },
  {
    name: "Pepperoni Supreme",
    description: "Pepperoni, extra cheese, Italian herbs",
    price: "$16.99",
  },
  {
    name: "Vegetarian Delight",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "$15.99",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "$17.99",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "$17.99",
  },
];

// Populate menu items
function populateMenu() {
  const menuGrid = document.getElementById("menu-grid");

  pizzaMenu.forEach((pizza) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
        <h3>${pizza.name}</h3>
        <p>${pizza.description}</p>
        <p class="price">${pizza.price}</p>
      `;
    menuGrid.appendChild(menuItem);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  populateMenu();
});
