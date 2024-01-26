import { useState } from 'react'
import './TopPlatform.css'

const TopPlatform = () => {
  const [scrolled, setScrolled] = useState(Number)

  const handleScroll = (event: { currentTarget: { scrollTop: any; }; }) => {
    setScrolled(event.currentTarget.scrollTop);
  };
  return (
    <div className='top-platform-container'>
      <div className={scrolled > 0 ? "top-platform-header-1 add-shadow" : "top-platform-header-1"}>
        <div className={"top-platform-header"}>
          <p> Top Platform</p>
          <a>See All</a>
        </div>
      </div>
      <div className="platform-1">
        <div onScroll={handleScroll} className="platforms">
          <div className="platform">
            <p>Book Bazaar</p>
            <div className="progress-bar">
              <div className="progress bazaar"></div>
            </div>
            <div className="amount-percentage">
              <p>$2,500,000</p>
              <p>+15%</p>
            </div>
          </div>

          <div className="platform">
            <p>Artisan Aisle</p>
            <div className="progress-bar">
              <div className="progress aisle"></div>
            </div>
            <div className="amount-percentage">
              <p>$1,800,000</p>
              <p>+10%</p>
            </div>
          </div>

          <div className="platform">
            <p>Toy Troop</p>
            <div className="progress-bar">
              <div className="progress troop"></div>
            </div>
            <div className="amount-percentage">
              <p>$1,200,000</p>
              <p>+8%</p>
            </div>
          </div>

          <div className="platform">
            <p>XStore</p>
            <div className="progress-bar">
              <div className="progress xstore"></div>
            </div>
            <div className="amount-percentage">
              <p>$3,500,000</p>
              <p>+25%</p>
            </div>
          </div>

          <div className="platform">
            <p>GBell</p>
            <div className="progress-bar">
              <div className="progress gbell"></div>
            </div>
            <div className="amount-percentage">
              <p>$400,000</p>
              <p>+5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlatform