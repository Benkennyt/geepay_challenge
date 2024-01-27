import './Switch.css'
import { BrightIcon, MoonIcon } from '../assets/SVG'
import { useEffect, useState } from 'react'

const Switch = (props : any) => {
    const {isToggled, setIsToggled}= props

    useEffect(() => {
        if (isToggled) {
            document.body.classList.add('dark-mode')
            document.body.classList.remove('light-mode')
        } else {
            document.body.classList.add('light-mode')
            document.body.classList.remove('dark-mode')
        }
    },[isToggled])
    
  return (
    <div className="switch">
        <input checked={isToggled} id='darkmode-toggle' onChange={() => setIsToggled(!isToggled)} type="checkbox" />
        <label htmlFor="darkmode-toggle">
            <div className={isToggled ? "icon-green tg-icon sun-icon-adjust" : 'sun-icon tg-icon sun-icon-adjust'}>
                <BrightIcon/>
            </div>
            <div className={isToggled ? "icon-green tg-icon moon-icon-adjust" : 'moon-icon tg-icon moon-icon-adjust'}>
                <MoonIcon />
            </div>
        </label>
    </div>
  )
}

export default Switch