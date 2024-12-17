import { useState } from "react";
import { Logo } from "./Logo.js";
import { Form } from "./Form.js";
import { PackingList } from "./PackingList.js";
import { Stats } from "./Stats.js";
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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items from the list?"
    );
    confirmed ? setItems([]) : setItems(items);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddChange={handleAddItems} />
      <PackingList
        items={items}
        onDeleteChange={handleDeleteItems}
        onCheckedChange={handleCheckedItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
