import React from "react";
import { Button, Icon } from "antd";
import Logo from "../../../assets/img/png/logo-white.png";

import "./scss/MenuTop.scss";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={Logo}
          alt="Thiago Moreira Bianeck"
        />
        <Button type="link" onClick={() => console.log("Click.")}>
          <Icon type="menu-fold" />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Desconectado.")}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
};

export default MenuTop;
