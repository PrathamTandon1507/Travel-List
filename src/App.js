import { useState } from "react";
import "./index.css";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]); //we cannot mutate the original array so we spread original and add items to it
  }

  function handleDeleteItems(id) {
    //note that the function is actually being called from the Item object and not fromn here, so dont worry about valid/invalid parameters here because they are being passed down there
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddChange={handleAddItems} />
      <PackingList
        items={items}
        onDeleteChange={handleDeleteItems}
        onCheckedChange={handleCheckedItems}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 ADIOS 👜</h1>;
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
        placeholder="Enter your  items.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
function Item({ item, onDeleteChange, onCheckedChange }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed} //for checkbox its checked and not value
        onChange={() => onCheckedChange(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteChange(item.id)}>❌</button>
    </li>
  );
}

function PackingList({ items, onDeleteChange, onCheckedChange }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "alphabetical")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "checked")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteChange={onDeleteChange}
            onCheckedChange={onCheckedChange}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="alphabetical">Sort by alphabetical order</option>
          <option value="checked">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Add the items that you wish to pack!</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <em>
        {totalItems !== checkedItems
          ? `You have packed ${checkedItems} items out of ${totalItems} items 
        (${Math.round((checkedItems * 100) / totalItems)}%)`
          : "Congratulations! You have succesfully packed your stuff 🎉"}
      </em>
    </footer>
  );
}
