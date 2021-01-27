import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";

import "./scss/SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Thiago Moreira Bianeck" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              Componente de LoginForm
            </TabPane>
            <TabPane tab={<span>Novo Usuário</span>} key="2">
              Componente RegisterForm
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
