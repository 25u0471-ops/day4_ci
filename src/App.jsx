import "./App.css";

function App() {
  const foods = [
    {
      name: "Veg Burger",
      price: "₹120",
      emoji: "🍔",
      description: "Fresh and delicious vegetable burger",
    },
    {
      name: "Pizza",
      price: "₹180",
      emoji: "🍕",
      description: "Hot cheesy pizza with fresh toppings",
    },
    {
      name: "Biryani",
      price: "₹150",
      emoji: "🍛",
      description: "Delicious and aromatic biryani",
    },
    {
      name: "Masala Dosa",
      price: "₹80",
      emoji: "🥞",
      description: "Crispy dosa with tasty masala filling",
    },
    {
      name: "Sandwich",
      price: "₹100",
      emoji: "🥪",
      description: "Fresh sandwich with vegetables and cheese",
    },
    {
      name: "Cold Drink",
      price: "₹50",
      emoji: "🥤",
      description: "Refreshing chilled beverage",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🍴 Food Center</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Food Center</h1>

          <p>
            Fresh, delicious and affordable food for everyone.
          </p>

          <button onClick={() => {
            document.getElementById("menu").scrollIntoView();
          }}>
            View Menu
          </button>
        </div>
      </section>

      {/* Menu */}
      <section className="menu-section" id="menu">
        <h2>Our Popular Menu</h2>

        <p className="section-description">
          Choose your favorite food from our menu
        </p>

        <div className="food-container">
          {foods.map((food, index) => (
            <div className="food-card" key={index}>
              <div className="food-image">{food.emoji}</div>

              <h3>{food.name}</h3>

              <p>{food.description}</p>

              <div className="food-bottom">
                <span className="price">{food.price}</span>

                <button
                  onClick={() =>
                    alert(`${food.name} added to your order!`)
                  }
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>Why Choose Food Center?</h2>

        <div className="features">
          <div>
            <span>🍽️</span>
            <h3>Fresh Food</h3>
            <p>We serve fresh and tasty food.</p>
          </div>

          <div>
            <span>⚡</span>
            <h3>Fast Service</h3>
            <p>Quick preparation and service.</p>
          </div>

          <div>
            <span>💰</span>
            <h3>Affordable</h3>
            <p>Great food at reasonable prices.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Visit Us</h2>
        <p>📍 Food Center, Belagavi</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ foodcenter@example.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Food Center. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;