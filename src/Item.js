export function Item({ item, onDeleteChange, onCheckedChange }) {
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
