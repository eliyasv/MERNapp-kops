import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("/api/items").then((res) => setItems(res.data));
  }, []);

  const addItem = () => {
    axios.post("/api/items", { name }).then((res) => {
      setItems([...items, res.data]);
      setName("");
    });
  };

  return (
    <div>
    <h1> 3 tier app docker composefile  example</h1>
    <input
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Item name"
    />
    <button onClick={addItem}>Add</button>
    <ul>
    {items.map((item) => (
      <li key={item._id}>{item.name}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;
