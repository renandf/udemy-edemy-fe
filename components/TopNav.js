import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';

const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        key="/"
        icon={<AppstoreOutlined />}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href="/">
          <a>App</a>
        </Link>
      </Item>

      <Item
        key="/login"
        icon={<LoginOutlined />}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>

      <Item
        key="/register"
        icon={<UserAddOutlined />}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>
    </Menu>
  )
}

export default TopNav;