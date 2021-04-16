import { Button, Input, Space } from 'antd';
import { useStateGlobal } from 'libs/hooks/use-state-global';
import React, { FC } from 'react';

export const App: FC = () => {
  return (
    <div>
      <div>Users #1</div>
      <Form />
      <div>Users #2</div>
      <Form />
    </div>
  );
};

const Form: FC = () => {
  const [login, setLogin] = useStateGlobal("", "login");
  const [pass, setPass] = useStateGlobal("", "password");

  return (
    <Space direction="vertical">
      <Input placeholder="Login" value={login} onChange={(event) => setLogin(event.currentTarget.value)} />
      <Input placeholder="Password" type="password" value={pass} onChange={(event) => setPass(event.currentTarget.value)}  />
      <Button block type="primary">Send</Button>
    </Space>
  );
};
