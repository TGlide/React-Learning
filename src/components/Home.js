// React
import React from 'react';
// Ant Design
import { Layout, Menu, Breadcrumb, Icon, Input, Avatar } from 'antd';
// Components
import Saldo from "./Saldo";
import Antecipacao from "./Antecipacao"
// CSS
import "./Home.scss"
import HomeBox from './HomeBox';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      logo_src: "stone_symbol_mini_white.png",
      section: <Saldo />,
      section_name: "saldo"
    };
  }

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
      new_section = <Saldo />
    } else if (sectionName === "antecipacao") {
      new_section = <Antecipacao />
    } else if (sectionName === "credito") {
      new_section = <HomeBox>
        Crédito uou
      </HomeBox>
    }

    this.setState(() => ({
      section_name: sectionName,
      section: new_section
    }))
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* Side Menu */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} trigger={null} theme="dark" style={{ borderRightWidth: 500 }}>
          <div className="logo" onClick={this.toggleSider}>
            <img src={this.state.logo_src} alt="Logo"  style={{width: 35, height: 'auto'}}/>
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
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
          <Header style={{ background: '#fff', padding: 0, boxShadow: '0px 3px 9px 3px rgba(0,0,0,0.1)' }} >
            {/* Navbar */}
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{ height: '100%' }}>
              {/* Navbar Left */}
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Search
                    placeholder="Pesquisa"
                    onSearch={value => console.log(value)}
                    style={{ width: '20vw', marginLeft: '20px' }}
                  />
                </div>
              </div>
              {/* Navbar Right */}
              <div className="navbar-menu">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <span className="subtitle">Thomas &nbsp;</span>
                    <Avatar style={{ backgroundColor: '#22B24C', margin: '0 0 0 auto' }} icon="user" size="large"/>
                  </div>
                </div>
              </div>
            </nav>

          </Header>

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