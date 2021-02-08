import React from "react";
import callCenterImage from "./../img/callCenter.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={callCenterImage} alt="Old school switchboard image" />
    </React.Fragment>
  );
}

export default Header;