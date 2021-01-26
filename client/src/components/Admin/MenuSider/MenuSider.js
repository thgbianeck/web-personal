import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import "./scss/MenuSider.scss";

const MenuSider = () => {
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
            <Icon type="menu" />
            <span className="nav-text">Menu</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuSider;
