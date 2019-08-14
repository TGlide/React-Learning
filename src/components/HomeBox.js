// React
import React from 'react';
// Ant Design
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// PropTypes
import PropTypes from "prop-types";
// CSS
import "./HomeBox.scss"

class HomeBox extends React.Component {
    state = {

    };

    render() {
        return (
            <div className="boxContainer">
                {this.props.children}
            </div>
        )
    }
}

HomeBox.propTypes = {
    children: PropTypes.oneOf([PropTypes.string, PropTypes.node])
}


export default HomeBox;