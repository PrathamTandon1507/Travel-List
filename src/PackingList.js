import { useState } from "react";
import { Item } from "./Item.js";

export function PackingList({
  items,
  onDeleteChange,
  onCheckedChange,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "alphabetical")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); //for sorting strings
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
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
