export function Stats({ items }) {
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
