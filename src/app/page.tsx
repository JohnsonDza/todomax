"use client"
import AddItems from "@/components/AddItems";
import Content from "@/components/Content";
import Footer from "@/components/Fotter";
import Header from "@/components/Header";
import SearchItems from "@/components/SearchItems";
import { useState } from "react";

export default function Home() {
  const storedItems = typeof localStorage !== 'undefined' ? localStorage.getItem('shoppinglist') : null;
  const [items, setItems] = useState(storedItems ? JSON.parse(storedItems) : []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems: { id: number; checked: boolean; item: string }[]) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item: { id: number; checked: boolean; item: string }) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item: { id: number; checked: boolean; item: string }) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <Header />
      <AddItems handleSubmit={handleSubmit}
                newItems={newItem}
                setNewItems={setNewItem}
      />
      <br />
      <SearchItems search={search} setSearch={setSearch}/>
      <Content handleClick={handleCheck}
               handleDelete={handleDelete}
               items={items.filter((item:any) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
      />
      <Footer length={items.length} />
    </div>
  );
}
