import { TfiTrash } from "react-icons/tfi";

const LineItem = ({ handleCheck, handleDelete, item }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : {}}
      >
        {item.item}
      </label>
      <TfiTrash
        role="button"
        onClick={() => handleDelete(item.id)}
        tabIndex="0"
      />
    </li>
  )
}

export default LineItem
