"use client"
import React, { useRef } from 'react';

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  newItems: string;
  setNewItems: React.Dispatch<React.SetStateAction<string>>;
};

const AddItems: React.FC<Props> = ({ handleSubmit, newItems, setNewItems }) => {
  const inputRef = useRef<HTMLInputElement>(null); // Add the type for inputRef

  return (
    <form className="" onSubmit={handleSubmit}>
      <label htmlFor="addItem">ADD ITEMS</label>
      <br />
      <input
        autoFocus
        ref={inputRef}
        className="text-black"
        id="addItem"
        type="text"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
        placeholder="add "
      />

      {' '}
      <button type="submit"
              onClick={()=>inputRef.current?.focus()}
      >ADD</button>
    </form>
  );
};

export default AddItems;
