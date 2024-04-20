import LineItem from "./LineItem";

const ItemList = ({ handleCheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map(item => (
        <LineItem 
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}      
    </ul>
  )
}

export default ItemList