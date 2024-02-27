import React, { useRef } from 'react'
import { useClickOutside } from '../hooks/ClickedOutside'

const MobileSearchBar = (props: any) => {
    const {toggleSearchBar, setToggleSearchBar, searchBarRef} = props
    const closeSearchBar = () => {
        setToggleSearchBar(false) 
      }
    
      useClickOutside(searchBarRef, closeSearchBar)
  return (
    <div className="search">
        {toggleSearchBar && <div className="searchbar-1">
          <div className="searchbar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>}
      </div>
  )
}

export default MobileSearchBar