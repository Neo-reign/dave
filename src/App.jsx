import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from './SearchItem'
//import {data} from "./utils";

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("Shopping List")));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("")
  
  const addItem = (newItemText) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItemText };
    const updatedItems = [...items, myNewItem];
    setItems(updatedItems);
    localStorage.setItem("Shopping List", JSON.stringify(updatedItems));
  };
  
  const handleInputChange = (event) => { 
    setNewItem(event.target.value)
  };
  
  const handleCheck = (id) => {
    const updatedItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(updatedItems)
    localStorage.setItem("Shopping List", JSON.stringify(updatedItems))
  };
  
  const handleDelete = (id) => { 
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem("Shopping List", JSON.stringify(updatedItems))
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem); // Pass newItem as an argument
    setNewItem("");
  };
  
  return (
    <div className="App">
     <Header />
     <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
     />
     <SearchItem 
      search={search}
      setSearch={setSearch}
     />
     <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLocaleLowerCase()))}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
     />
     <Footer itemslength={items.length} />
    </div>
    )
}

export default App