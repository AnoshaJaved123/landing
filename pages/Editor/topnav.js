import React from 'react'
// import { toggleSidebar } from "./grapesUtils";

const Topnav = () => {
  // const [dropdownToggled, toggleDropdown] = useState(false);

  // const handleClick = () => {
  //   toggleSidebar(!dropdownToggled);
  // };
 
  return (
    <nav className="navbar navbar-light">
    <div className="container">
        <div className="panel__devices"></div>
      <div className="panel__editor"></div>
      <div className="panel__basic-actions"></div>
    </div>
  </nav>
//   <nav className="navbar navbar-light">
//   <div className="container">
//     <button
//       className="btn btn-sm btn-outline-primary"
//       onClick={handleClick}
//     >
//       <i className="fa fa-bars"></i>
//     </button>
//     <div className="panel__devices"></div>
//     <div className="panel__editor"></div>
//     <div className="panel__basic-actions"></div>
//   </div>
// </nav>
  )
}

export default Topnav