import {  Link } from "react-router-dom";
import "../App.css";

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {  FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineTeam } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";



export const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? " " : "Dashboard"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<RiCustomerService2Fill />}><Link to="/impiegati"> Impiegati</Link></MenuItem>
              <MenuItem active={true} icon={< AiOutlineTeam/>} ><Link to="/clienti">Clienti</Link></MenuItem>
              <MenuItem active={true} icon={<AiOutlineShoppingCart />}><Link to="/noleggi">Noleggi</Link></MenuItem>
              <MenuItem active={true} icon={<BsBoxSeam />}><Link to="/inventario">Prodotti</Link></MenuItem>
              <MenuItem active={true} icon={<HiPlus />}><Link to="/aggiungiImpiegato">Aggiungi <br></br>Impiegato</Link></MenuItem>
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
  );
};




