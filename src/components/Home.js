// React
import React from 'react';
// Ant Design
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// Components
import Todo from "./Todo";
import Antecipacao from "./Antecipacao"
// CSS
import "./Home.scss"

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
    logo_src: "stone_symbol_mini.png",
    section: null,
    section_name : ""
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    // this.setState(prevState => ({
    //   logo_src: prevState.logo_src == "stone_symbol_mini.png" ? "stone_logo.png" : "stone_symbol_mini.png"
    // }))
  };

  toggleSider = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

  changeSection = (sectionName) => {
    let new_section;
    if (sectionName === "saldo") {
      new_section = <Todo />
    } else if (sectionName === "antecipacao") {
      new_section = <Antecipacao />
    } else if (sectionName === "credito") {
      new_section = <div>
        Crédito uou
      </div>
    }

    this.setState(() => ({
      section_name: sectionName,
      section: new_section
    }))
  };

  render() {
    if (this.state.section == null)
      this.changeSection("antecipacao");
    
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* Side Menu */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} trigger={null} style={{ background: '#fff' }}>
          <div className="logo" onClick={this.toggleSider}>
            <img src={this.state.logo_src} alt="Logo" />
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={(e) => this.changeSection("saldo")}>
              <Icon type="dollar" />
              <span>Saldo Stone</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={(e) => this.changeSection("antecipacao")}>
              <Icon type="calendar" />
              <span>Antecipação</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={(e) => this.changeSection("credito")}>
              <Icon type="bank" />
              <span>Crédito</span>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Layout container */}
        <Layout>
          {/* Header */}
          <Header style={{ background: '#fff', padding: 0 }} />

          {/* Main Content Container */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Apps</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.section_name.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
            {this.state.section}
          </Content>

          <Footer style={{ textAlign: 'center' }}>React Learning App created by Thomas G. Lopes</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;