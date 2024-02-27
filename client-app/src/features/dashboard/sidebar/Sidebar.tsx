import {
  ArrowRightIcon,
  BoxIcon,
  BulkIcon,
  CloseIcon,
  DiscountShapeIcon,
  InfoCircleIcon,
  LogOutIcon,
  Logo,
  Profile2userIcon,
  SettingsIcon,
  TrendUpIcon,
  VectorIcon,
} from "../../../assets/SVG";
import Switch from "../../../general/Switch";
import "./Sidebar.css";

const Sidebar = (props: any) => {
  const {
    isToggled,
    setIsToggled,
    toggleSideBar,
    setToggleSideBar,
    handleFocusedPageButton,
    focused,
  } = props;

  
  return (
    <div className={toggleSideBar ? "sidebar" : "sidebar-hide sidebar"}>
        {toggleSideBar && (
          <button
            onClick={() => setToggleSideBar(false)}
            className="close-btn hamburger"
          >
            <CloseIcon />
          </button>
        )}
        <div className="sidebar-b">
          <div className="sidebar-1">
            <div className="logo">
              <button>
                <Logo />
              </button>
            </div>
            <div className="top-icons icons-1">
              <button
                onClick={() => handleFocusedPageButton(1)}
                className={
                  focused == 1
                    ? "focused-btn-bulk-icon"
                    : "unfocused-btn-bulk-icon"
                }
              >
                <BulkIcon />
                {focused == 1 && <VectorIcon />}
              </button>
              <button
                onClick={() => handleFocusedPageButton(2)}
                className={focused == 2 ? "focused-btn" : "unfocused-btn"}
              >
                <TrendUpIcon />
                {focused == 2 && <VectorIcon />}
              </button>
              <button
                onClick={() => handleFocusedPageButton(3)}
                className={focused == 3 ? "focused-btn" : "unfocused-btn"}
              >
                <Profile2userIcon />
                {focused == 3 && <VectorIcon />}
              </button>
              <button
                onClick={() => handleFocusedPageButton(4)}
                className={focused == 4 ? "focused-btn" : "unfocused-btn"}
              >
                <BoxIcon />
                {focused == 4 && <VectorIcon />}
              </button>
              <button
                onClick={() => handleFocusedPageButton(5)}
                className={focused == 5 ? "focused-btn" : "unfocused-btn"}
              >
                <DiscountShapeIcon />
                {focused == 5 && <VectorIcon />}
              </button>
              <button
                onClick={() => handleFocusedPageButton(6)}
                className={focused == 6 ? "focused-btn" : "unfocused-btn"}
              >
                <InfoCircleIcon />
                {focused == 6 && <VectorIcon />}
              </button>
            </div>
            <Switch isToggled={isToggled} setIsToggled={setIsToggled} />
          </div>
          <div className="sidebar-2 icons-1">
            <button>
              <ArrowRightIcon />
            </button>
            <button>
              <SettingsIcon />
            </button>
            <button >
              <LogOutIcon />
            </button>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
