import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((items) => [...items, item]); //we cannot mutate the original array so we spread original and add items to it
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddChange={handleItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

//Array.from is used to add 'length' no.of options in select here

function Form({ onAddChange }) {
  let arr = [];
  for (var i = 1; i <= 20; i++) {
    arr[i] = i;
  }

  const [description, setDescription] = useState("");
  const [quant, setQuant] = useState(1);
  //onChnage => brings control back to React from DOM

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity: quant,
      packed: false,
    };
    onAddChange(newItem);
    console.log(newItem);

    setQuant(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quant} onChange={(e) => setQuant(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* {arr.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))} */}
      </select>
      <input
        type="text"
        placeholder="Text.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have packed X items and have X items on the list (X%)</em>
    </footer>
  );
}
