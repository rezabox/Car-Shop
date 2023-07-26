"use client"
import React, { useState } from 'react'
import SearchManufacter from './SearchManufacter'

const SearchBar = ()=> {
  const [manufacturer,setManufacturer] = useState('');
  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <SearchManufacter
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
    </form>
  )
}

export default SearchBar;
