import React from "react";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";

import "./scss/RegisterForm.scss";

const RegisterForm = () => {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="E-mail"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Senha"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repita a Senha"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          Li e aceitei a política de privacidade
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Criar Conta
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
