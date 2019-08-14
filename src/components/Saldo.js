// React
import React from 'react';
// Ant Design
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// Components
import HomeBox from "./HomeBox";
// CSS
import "./Saldo.scss"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Saldo extends React.Component {
  state = {
  };

  render() {
    return (
        <HomeBox>
          Saldo
        </HomeBox>
    );
  }
}

export default Saldo;