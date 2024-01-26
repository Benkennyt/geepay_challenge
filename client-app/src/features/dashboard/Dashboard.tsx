import {
  ArrowRightIcon,
  BearishIcon,
  BearishPercentageIcon,
  BellIcon,
  BoxIcon,
  BoxTickIcon,
  BulkIcon,
  BullishIcon,
  BullishPercentageIcon,
  CalenderIcon,
  DiscountShapeIcon,
  DollarCoinIcon,
  DownToggleIcon,
  InfoCircleIcon,
  ListIcon,
  LogOutIcon,
  Logo,
  Profile2userIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  SettingsIcon2,
  ShoppingCartIcon,
  SignOutIcon,
  ThreeDRotateIcon,
  TrendUpIcon,
  VectorIcon,
} from "../../assets/SVG";
import "./Dashboard.css";
import ProfileImage from "../../assets/images/profile-image.jpeg";
import Tooltip from "../../general/Tooltip";
import { useState } from "react";
import BarCharts from "./Charts/BarCharts";
import { ClientPayment } from "./clientsDataTable/ClientsPaymentData";
import LastOrders from "./clientsDataTable/LastOrders";
import TopPlatform from "./topPlatform/TopPlatform";
import Switch from "../../general/Switch";

const Dashboard = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [toggleProfileNav, setToggleProfileNav] = useState(false);
  const [toggleSort, setToggleSort  ] = useState(false);
  const [changeSort, setChangeSort  ] = useState('Weekly');
  const [focused, setFocused] = useState(1)
  const current = new Date();
  const date = `${current.toLocaleString("default", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

  const handleToggle = (key: number) => {
    if (toggleProfileNav && key == 1) {
        setToggleProfileNav(false)
    } else if (!toggleProfileNav && key == 1) {
        setToggleProfileNav(true)
        setToggleSort(false)
    } else if (!toggleSort && key == 2) {
      setToggleSort(true)
      setToggleProfileNav(false)
    } else if (toggleSort && key == 2) {
    setToggleSort(false)
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
      <div className="sidebar">
        <div className="sidebar-1">
          <div className="logo">
            <button>
              <Logo />
            </button>
          </div>
          <div className="top-icons icons-1">
            <button onClick={() => handleFocusedPageButton(1)} className={focused == 1 ? 'bulk-icon' :"unfocused-btn bulk-icon"}>
              <BulkIcon />
              {focused == 1 && <VectorIcon/>}
            </button>
            <button onClick={() => handleFocusedPageButton(2)} className={focused == 2 ? 'focused-btn' :"unfocused-btn"}>
              <TrendUpIcon />
              {focused == 2 && <VectorIcon/>}
            </button>
            <button onClick={() => handleFocusedPageButton(3)} className={focused == 3 ? 'focused-btn' :"unfocused-btn"}>
              <Profile2userIcon />
              {focused == 3 && <VectorIcon/>}
            </button>
            <button onClick={() => handleFocusedPageButton(4)} className={focused == 4 ? 'focused-btn' :"unfocused-btn"}>
              <BoxIcon />
              {focused == 4 && <VectorIcon/>}
            </button>
            <button onClick={() => handleFocusedPageButton(5)} className={focused == 5 ? 'focused-btn' :"unfocused-btn"}>
              <DiscountShapeIcon />
              {focused == 5 && <VectorIcon/>}
            </button>
            <button onClick={() => handleFocusedPageButton(6)} className={focused == 6 ? 'focused-btn' :"unfocused-btn"}>
              <InfoCircleIcon />
              {focused == 6 && <VectorIcon/>}
            </button>
          </div>
          <Switch/>
          
        </div>
        <div className="sidebar-2 icons-1">
          <button>
            <ArrowRightIcon />
          </button>
          <button>
            <SettingsIcon />
          </button>
          <button>
            <LogOutIcon />
          </button>
        </div>
      </div>
      <div className="analytics-container">
        <header>
          <div className="dashboard-search">
            <p>Dashboard</p>
            <div className="searchbar">
              <SearchIcon />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="date-profile">
            <div className="date">
              <CalenderIcon />
              <p>{date}</p>
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

            <button onClick={() => handleToggle(1)} className="profile">
              <img src={ProfileImage} alt="profile-image" />
              <div className="profile-name-mail">
                <p>Justin Bergson</p>
                <p>Justin@gmail.com</p>
              </div>
              <DownToggleIcon />
            </button>
          </div>
          <div className={ toggleProfileNav ? "profile-nav-1" : 'profile-nav-hide-1'}>
            <div className={ toggleProfileNav ? "profile-nav" : 'profile-nav-hide'}>
              <button onClick={() => setToggleProfileNav(false)} ><ListIcon/><p>Purchases and reviews</p></button>
                <button onClick={() => setToggleProfileNav(false)}><ProfileIcon/><p> View your profile</p></button>
                <button onClick={() => setToggleProfileNav(false)} ><SettingsIcon2/><p>Settings</p></button>
               <button onClick={() => setToggleProfileNav(false)} ><SignOutIcon/><p>Sign out</p></button>
              
            </div>
          </div>
        </header>


        <div className="analytics-container-2">
          <div className="top-charts">
            <div className="barchart-container">
              <div className="barchart-header">
                <p>Sales Trend</p>
                <div className="sortby">
                  <p>Sort by:</p>
                  <button onClick={() => handleToggle(2)} className="weekly">
                    <p>{changeSort }</p>
                    <DownToggleIcon/>
                  </button>
                </div>
                <div className={toggleSort ? "sortby-options" : "sortby-options-hide"}>
                  <div className={toggleSort ? "sortby-options-1" : "sortby-options-hide-1"}>
                    <button onClick={() => handleSortToggle('monthly')}><p>Monthly</p></button>
                    <button onClick={() => handleSortToggle('weekly')}><p>Weekly</p></button>
                    <button onClick={() => handleSortToggle('3 days')}><p>3 days</p></button>
                    <button onClick={() => handleSortToggle('today')}><p>Today</p></button>
                  </div>
                </div>
              </div>
              <BarCharts/>
            </div>
            <div className="totals-chart">
              <div className="total-order totals">
                <div className="total-icons">
                  <div className="total-top-left-icon">
                    <BoxTickIcon/>
                  </div>
                  <BullishIcon/>
                </div>
                <div className="total-figure">
                  <p>Total Order</p>
                  <p>350</p>
                </div>
                <div className="total-bottom-remark">
                  <div className="total-percentage green-percent">
                    <BullishPercentageIcon/>
                    <p>23,5%</p>
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
              <div className="total-refund totals">
                <div className="total-icons">
                    <div className="total-top-left-icon">
                      <ThreeDRotateIcon/>
                    </div>
                    <BearishIcon/>
                  </div>
                  <div className="total-figure">
                    <p>Total Refund</p>
                    <p>270</p>
                  </div>
                  <div className="total-bottom-remark">
                    <div className="total-percentage red-percent">
                      <BearishPercentageIcon/>
                      <p>23,5%</p>
                    </div>
                    <p>vs. previous month</p>
                  </div>
              </div>
              <div className="average-sales totals">
                <div className="total-icons">
                  <div className="total-top-left-icon">
                    <ShoppingCartIcon/>
                  </div>
                  <BearishIcon/>
                </div>
                <div className="total-figure">
                  <p>Average Sales</p>
                  <p>1567</p>
                </div>
                <div className="total-bottom-remark">
                  <div className="total-percentage red-percent">
                    <BearishPercentageIcon/>
                    <p>23,5%</p>
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
              <div className="total-income totals">
                <div className="total-icons">
                  <div className="total-top-left-icon">
                    <DollarCoinIcon/>
                  </div>
                  <BullishIcon/>
                </div>
                <div className="total-figure">
                  <p>Total Income</p>
                  <p>$350.000</p>
                </div>
                <div className="total-bottom-remark">
                  <div className="total-percentage green-percent" >
                    <BullishPercentageIcon/>
                    <p>23,5%</p>
                  </div>
                  <p>vs. previous month</p>
                </div>
              </div>
            </div>
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
