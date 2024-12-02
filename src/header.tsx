import React from "react";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header_display">
        <div className="logo">
          <img src="/image/bhivelogo.png" width="124" height="40" alt="logo"></img>
        </div>
        <div className="call_info">
          <img src="/image/call.png" width="24" height="24" alt="call"></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
