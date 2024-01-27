import "./Dashboard.css";
import { useState } from "react";
import BarCharts from "./Charts/BarCharts";
import LastOrders from "./clientsDataTable/LastOrders";
import TopPlatform from "./topPlatform/TopPlatform";
import Sidebar from "./sidebar/Sidebar";
import Header from "../../layout/Header";
import Totals from "./totals/Totals";

const Dashboard = () => {
  const [isToggled, setIsToggled] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);
  const [toggleProfileNav, setToggleProfileNav] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [toggleSort, setToggleSort  ] = useState(false);
  const [changeSort, setChangeSort  ] = useState('Weekly');
  const [focused, setFocused] = useState(1)

  const handleToggle = (key: number) => {
    if (toggleProfileNav && key == 1) {
        setToggleProfileNav(false)
    } else if (!toggleProfileNav && key == 1) {
        setToggleProfileNav(true)
        setToggleSideBar(false)
        setToggleSearchBar(false)
        setToggleSort(false)
    } else if (!toggleSort && key == 2) {
      setToggleSort(true)
      setToggleProfileNav(false)
      setToggleSideBar(false)
      setToggleSearchBar(false)
    } else if (toggleSort && key == 2) {
    setToggleSort(false)
    }else if (toggleSearchBar && key ==3) {
      setToggleSearchBar(false)
    }else if (!toggleSearchBar && key ==3) {
      setToggleSearchBar(true)
      setToggleSort(false)
      setToggleProfileNav(false)
      setToggleSideBar(false)
    }else if (toggleSideBar && key ==4) {
      setToggleSideBar(false)
    }else if (!toggleSideBar && key ==4) {
      setToggleSideBar(true)
      setToggleSearchBar(false)
      setToggleSort(false)
      setToggleProfileNav(false)
    }
  }

  const handleSortToggle = (key: string) => {
    if (key == 'monthly') {
      setChangeSort('Monthly')
      setToggleSort(false)
    }else if (key == 'weekly') {
      setChangeSort('Weekly')
      setToggleSort(false)
    }else if (key == '3 days') {
      setChangeSort('3 days')
      setToggleSort(false)
    }else if (key == 'today') {
      setChangeSort('Today')
      setToggleSort(false)
    }
  }

  const handleFocusedPageButton = (key: number) => {
    if(key == 1) {
      setFocused(1)
    } else if(key == 2) {
      setFocused(2)
    } else if(key == 3) {
      setFocused(3)
    } else if(key == 4) {
      setFocused(4)
    } else if(key == 5) {
      setFocused(5)
    } else if(key == 6) {
      setFocused(6)
    }
  } 


  return (
    <div className="dashboard-container">

      <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} handleFocusedPageButton={handleFocusedPageButton} focused={focused}/>

      <div className="analytics-container">
        <Header handleToggle={handleToggle} toggleSearchBar={toggleSearchBar} setTooltipVisible2={setTooltipVisible2} tooltipVisible2={tooltipVisible2} setTooltipVisible={setTooltipVisible} tooltipVisible={tooltipVisible} toggleProfileNav={toggleProfileNav} setToggleProfileNav={setToggleProfileNav}/>
        
        <div className="analytics-container-2">
          <p className="dashboard-2">Dashboard</p>
          <div className="top-charts"> 
            <BarCharts isToggled={isToggled} handleToggle={handleToggle} handleSortToggle={handleSortToggle} toggleSort={toggleSort} changeSort={changeSort}/>
            <Totals/>
          </div>
          <div className="last-orders-top-platform">
            <LastOrders/>
            <TopPlatform/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
