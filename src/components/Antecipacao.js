// React
import React from 'react';
// Ant Design
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// Components

// CSS
import "./Antecipacao.scss"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Antecipacao extends React.Component {
  state = {
  };

  render() {
    return (
        <div className="antp-container" style={{ minWidth: '100%', padding: 12, background: '#fff', minHeight: 360 }}>
          Hey
        </div>
    );
  }
}

export default Antecipacao;