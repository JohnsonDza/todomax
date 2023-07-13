import React from 'react'

function SearchItems({search,setSearch}:any) {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search"></label>
        <input type="text"
                role="search"
                id="search"
                placeholder="search items "
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                className="text-black"
        />
    </form>
  )
}

export default SearchItems