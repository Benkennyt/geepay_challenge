import './Header.css'
import { BellIcon, CalenderIcon, DownToggleIcon, HamburgerIcon, ListIcon, ProfileIcon, SearchIcon, SettingsIcon2, SignOutIcon } from '../assets/SVG'
import Tooltip from '../general/Tooltip';
import ProfileImage from "../../src/assets/images/profile-image.jpeg";
import { useRef } from 'react';
import { useClickOutside } from '../hooks/ClickedOutside';
import MobileSearchBar from '../general/MobileSearchBar';

const Header = (props: any) => {
  const navProfileRef = useRef(null);
  const searchBarRef = useRef(null)
  const {handleToggle, toggleSearchBar,setToggleSearchBar, setTooltipVisible2, tooltipVisible2, setTooltipVisible, tooltipVisible, toggleProfileNav, setToggleProfileNav, } = props;
  const current = new Date();
  const date = `${current.toLocaleString("default", {
      month: "long",
    })} ${current.getDate()}, ${current.getFullYear()}`;

  
  const closeProfile = () => {
    setToggleProfileNav(false) 
  }

  useClickOutside(navProfileRef, closeProfile)


  return (
    <header>
      <button onClick={() => handleToggle(4)} className="hamburger"><HamburgerIcon/></button>
      <div className="dashboard-search">
        <p>Dashboard</p>
        <div className="searchbar">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div  className="date-profile">
        <div ref={searchBarRef} className="search button-container">
          <button onClick={() => handleToggle(3)} className="header-icon"><SearchIcon/></button>
          <MobileSearchBar toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} searchBarRef={searchBarRef}/>
        </div>
        
        <div className="date" onMouseEnter={() => setTooltipVisible2(true)} onMouseLeave={() => setTooltipVisible2(false)}>
          <CalenderIcon />
          <p>{date}</p>
          <Tooltip
            tooltipVisible2={tooltipVisible2}
            text2={date}
          ></Tooltip>
        </div>

        <div className="button-container">
          <button
            className="header-icon"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          >
            <BellIcon />
          </button>
          <Tooltip
            tooltipVisible={tooltipVisible}
            text={"Updates"}
          ></Tooltip>
        </div>

        <div ref={navProfileRef} className="prof-nav">
          <button onClick={() => handleToggle(1)} className="profile">
            <img src={ProfileImage} alt="profile-image" />
            <div className="profile-name-mail">
              <p>Justin Bergson</p>
              <p>Justin@gmail.com</p>
            </div>
            <DownToggleIcon />
          </button>
          <div className={toggleProfileNav ? "profile-nav-1" : 'profile-nav-hide-1'}>
            <div className={ toggleProfileNav ? "profile-nav" : 'profile-nav-hide'}>
              <div className="profile-name-2">
                <p>Justin Bergson</p>
              </div>
              <button onClick={() => setToggleProfileNav(false)} ><ListIcon/><p>Purchases and reviews</p></button>
                <button onClick={() => setToggleProfileNav(false)}><ProfileIcon/><p> View your profile</p></button>
                <button onClick={() => setToggleProfileNav(false)} ><SettingsIcon2/><p>Settings</p></button>
              <button onClick={() => setToggleProfileNav(false)} ><SignOutIcon/><p>Sign out</p></button>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header