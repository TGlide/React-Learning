// React
import React from 'react';
// Ant Design
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// PropTypes
import PropTypes from "prop-types";
// CSS
import "./HomeBox.scss"

class HomeBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    

    render() {
        return (
            <div className="boxContainer">
                {this.props.children}
            </div>
        )
    }
}

HomeBox.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}


export default HomeBox;