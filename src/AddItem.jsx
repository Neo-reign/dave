import { useState } from "react";
import { useRef } from "react";
import { MdAdd } from "react-icons/md";

const AddItem = ({ newItem, handleSubmit, handleInputChange }) => {
  const inputRef = useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="AddItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        value={newItem}
        onChange={handleInputChange}
        type="text"
        id="AddItem"
        placeholder="Add Item"
        required
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() =>  inputRef.current.focus()}
      >
        <MdAdd />
      </button>
    </form>
  )
}

export default AddItem