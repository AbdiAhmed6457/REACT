import './List.css';

function List({ items, catagory = "catagory" }) {
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-catag">{catagory}</h3>
      <ul className="item-list">{listItems}</ul>
    </>
  );
}

export default List;