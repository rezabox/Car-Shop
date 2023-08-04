"use client"
import React, { useState } from 'react'
import SearchManufacter from './SearchManufacter'
import Image from 'next/image'
const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
     <Image src="/magnifying-glass.svg" alt="magnify" 
     width={40}
     height={40}
     className="object-contain"
     />
  </button>
)

const SearchBar = ()=> {
  const [manufacturer,setManufacturer] = useState('');
  const [model,setModel] = useState('');
  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <SearchManufacter
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
         <div className="searchbar__item">
            <Image src="/model-icon.png" alt='model' width={30} height={30}
            className="absolute w-[20px] h-[20px] ml-4"/>
            <input type="text" name="model" 
            value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
         </div>
    </form>
  )
}

export default SearchBar;
