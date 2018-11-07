import React from "react";
import { translate } from "react-i18next";
import { connectTo } from "../../utils";
import { logout } from "../../actions/auth";

class Header extends React.Component {
  state = {
    collapsed: true
  };

  render() {
    
    return (
      <div className="header">
      
      </div>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {
    logout
  },
  translate("startPage")((Header))
);
