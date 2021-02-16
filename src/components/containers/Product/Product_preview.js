import React from 'react'
import { Row, Col, CardTitle, Icon, Card } from "react-materialize";
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'
import Product_item from './Product_item';

const Product_preview = ({ isEnable }, key) => {
    return (
        <div>
            {isEnable && <br />}
            <Col m={4} s={12} l={15} >
                <Card actions={[
                    <NavLink to="/product/original">item</NavLink>]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>} >
                    Here is the standard card with an image thumbnail.
                </Card>
            </Col>

        </div>
    )
}

export default Product_preview;