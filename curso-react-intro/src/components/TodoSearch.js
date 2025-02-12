import '../styles/TodoSearch.css'
import { useState } from 'react'

export const TodoSearch = ({searchValue,setSearchValue}) => {


  return (
    <input
      placeholder="Todo search"
      className="TodoSearch"
      value={searchValue}
      onChange={({target}) => setSearchValue(target.value)}
    />
  );
}
