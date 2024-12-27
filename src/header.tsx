import React from "react";

const Header: React.FC = () => {
  return (
     <div className="header_main">
    <div className="container">
    <div className="header_display">
        <div className="logo">
          <img className = "logo_image" src="/image/bhivelogo.png" alt="logo"></img>
        </div>
        <div className="call_info">
          <img src="/image/call.png" width="24" height="24" alt="call"></img>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Header;
