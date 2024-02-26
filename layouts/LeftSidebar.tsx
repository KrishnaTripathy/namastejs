import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import { getMenuItems} from "../helpers/menu";

// store
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// constants
import { LayoutTypes } from "../constants/layout";

// components
import AppMenu from "./Menu";

import anc_logo from '../assets/images/anc_logo.png';




/* sidebar content */
const SideBarContent = () => {
  return (
    <>

      {/* <div id="sidebar-menu"> */}
      <AppMenu menuItems={getMenuItems()} />          
      {/* </div> */}

      <div className="clearfix" />
    </>
  );
};

interface LeftSidebarProps {
  isCondensed: boolean;
  hideLogo?: boolean;
}

const LeftSidebar = ({ isCondensed, hideLogo }: LeftSidebarProps) => {
  const menuNodeRef: any = useRef(null);

  const { layoutType } = useSelector((state: RootState) => ({
    layoutType: state.Layout.layoutType,
    leftSideBarType: state.Layout.leftSideBarType,
  }));

  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = (e: any) => {
    if (
      menuNodeRef &&
      menuNodeRef.current &&
      menuNodeRef.current.contains(e.target)
    )
      return;
    // else hide the menubar
    if (document.body) {
      document.body.classList.remove("sidebar-enable");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOtherClick, false);

    return () => {
      document.removeEventListener("mousedown", handleOtherClick, false);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="app-menu" ref={menuNodeRef}>
        {!hideLogo && (
          <div className="logo-box" style={{marginTop:"20px"}}>
            <Link to="/" className="logo logo-dark text-center">
              <span className="logo-sm">
                <img src={anc_logo} alt="" height="50" />
              </span>
              <span className="logo-lg">
                <img
                  src={anc_logo}
                  alt="logo"
                  height="50"
                /> 
                <p style={{fontWeight:"700"}}>Asha Neuromodulation Clinic</p>
              </span>
            </Link>
            <Link to="/" className="logo logo-light text-center">
              <span className="logo-sm">
                <img src={anc_logo} alt="" height="50" />
              </span>
              <span className="logo-lg">
                <img
                  src={anc_logo}
                  alt="logo"
                  height="50"
                />
                <p style={{fontWeight:"700"}}>Asha Neauromodulation Clinic</p>
              </span>
            </Link>
          </div>
        )}

        {!isCondensed && (
          <SimpleBar
            className="scrollbar show h-100"
            // style={{ maxHeight: '100%' }}
            // timeout={500}
            scrollbarMaxSize={320}
          >
            <SideBarContent />
          </SimpleBar>
        )}
        {isCondensed && <SideBarContent />}
      </div>
    </React.Fragment>
  );
};

LeftSidebar.defaultProps = {
  isCondensed: false,
};

export default LeftSidebar;
