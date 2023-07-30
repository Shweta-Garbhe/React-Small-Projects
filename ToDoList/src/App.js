const { useState } = React;

function TodoApp() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn JavaScript", done: false },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Play around in JSFiddle", done: true },
    { id: 4, text: "Build something awesome", done: true },
  ]);

  const [updatedItem, setUpdatedItem] = useState("");

  const handleChange = (id) => {
    const updatedItems = [...items];

    const updatedIndex = updatedItems.findIndex((item) => item.id === id);
    updatedItems[updatedIndex].done = !updatedItems[updatedIndex].done;
    setItems(updatedItems);
    setUpdatedItem(updatedItems[updatedIndex].text);
  };

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => handleChange(item.id)}
              />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>
      <br />
      <p>
        {updatedItem && "Updated Item: "} <b> {updatedItem}</b>
      </p>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
