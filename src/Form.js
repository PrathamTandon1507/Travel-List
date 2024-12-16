import { useState } from "react";

//Array.from is used to add 'length' no.of options in select here
export function Form({ onAddChange }) {
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
