import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>Pizza Hot!</h1>
    </header>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>

        <span>{pizza.soldOut ? "SOLD OUT!" : pizza.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzaData.length} creative dishes to
            choose from. All from our stone oven. All organic, all deliciouse!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizza={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later. 😊</p>
      )}
    </main>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const curHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= curHour && curHour <= closeHour;

  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()}. </p>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Sorry, We are closed! We are happy to welcome you between {openHour}
          :00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
