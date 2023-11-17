import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function Header() {
  return <h1>Pizza Hot!</h1>;
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData[0].photoName} alt={pizzaData[0].name} />
      <h3>{pizzaData[0].name}</h3>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We are currently open!</footer>
  );
}

function App() {
  return (
    <div>
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
