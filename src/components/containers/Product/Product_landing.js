import React from 'react'
import './Product_landing.css';
import logo from '../../../images/5bca5fa6-3a94-4eb0-a700-fabc72a48374_200x200.png'
import { Select, Row } from "react-materialize";
import Product_preview from './Product_preview';
import Product_item from './Product_item';


var FontAwesome = require('react-fontawesome')
export default function Product_landing(category) {
    const items = [];


    const selectedCategory = category.location.pathname;
    const path = selectedCategory.substr(selectedCategory.lastIndexOf('/') + 1, selectedCategory.length);
    console.log('selectedCategory ' + path);
    for (var i = 0; i < 15; i++) {
        let enable = (i % 5) == 0 ? true : false;
        items.push(<Product_preview isEnable={enable} key={i} />);
    }

    return (
        <div>
            <div className="product_wrapper">
                <div className="product">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="breadcrump">
                        <ul>
                            <li>Home ></li>
                            <li>Flavours {path !== 'product' && '>'}</li>
                            {path !== 'product' && <li>{path}</li>}
                        </ul>

                        {path == 'product' &&
                            <div className="sortoption">
                                <Select
                                    id="Select-9"
                                    multiple={false}
                                    onChange={function noRefCheck() { }}
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }
                                    }}
                                    value=""
                                >
                                    <option
                                        disabled
                                        value=""
                                    >
                                        Sort by
  </option>
                                    <option value="1">
                                        Popularity
  </option>
                                    <option value="2">
                                        Price low to high
  </option>
                                    <option value="3">
                                        Price high to low
  </option>
                                </Select>
                            </div>
                        }

                    </div>

                    {path !== 'product' ? <Product_item item={path} /> : <div className="product_listing">
                        <Row>{items}</Row>
                    </div>}




                </div>
            </div>

        </div>
    )
}
