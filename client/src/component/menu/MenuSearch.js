import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import {Row, Col, Button, Form} from 'react-bootstrap';
class MenuSearch extends Component {
    render() {
        return (
            <Col className="menu-search">
                <Row>
                    <Col xs={12} lg={1} className="menu-logo">ShelMark</Col>
                    <Col xs={10} lg={10} className="search-container">
                        <Form>
                            <input className="menu-search-box" placeholder="Tìm sản phẩm, thương hiệu,..."/>
                            <Button variant="primary"><FontAwesomeIcon className="search-icon" icon={faSearch} /></Button>
                        </Form>
                    </Col>
                    <Col xs={1} lg={1}className="menu-cart">
                        <FontAwesomeIcon className="cart-shadow" icon={faShoppingCart} />
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default MenuSearch;