import React, { useState } from 'react'
import './Product_item.css';
import { MediaBox, Select, Button } from "react-materialize";
var FontAwesome = require('react-fontawesome')
export default function Product_item(item) {
    const oriPrice = 5.90;
    const [price, setPrice] = useState(oriPrice);


    const calculatePrice = (e) => {
        // alert(e.target.value);
        let unitPrice = oriPrice;
        let qty = parseInt(e.target.value);
        let saneUnitPrice = unitPrice.toString().replace(/,/g, '');
        let calculatedPrice = qty * parseFloat(saneUnitPrice);
        setPrice(calculatedPrice);
    }

    const prelistItem = [];
    for (let i = 0; i < 10; i++) {
        let qty = i + 1;
        prelistItem.push(<option value={qty}>{qty}</option>);
    }

    return (
        <div>
            <div className="productitem_wrapper">
                <div className="productitem_image">
                    <MediaBox
                        id="MediaBox_7"
                        options={{
                            inDuration: 275,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200
                        }} >
                        <img
                            alt=""
                            src="https://materializecss.com/images/sample-1.jpg"
                            width="650" />
                    </MediaBox>
                </div>
                <div className="productitem_detail">
                    <div className="product_title">
                        <div className="title">Lorem ipsum dolor sit amet</div>
                        <div className="wishlist">
                            <FontAwesome
                                className='super-crazy-colors'
                                name='heart-o'
                                size='2x' />
                        </div>
                    </div>
                    <div className="product_sku">SKU202100001</div>
                    <div className="product_brief_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, facere.
                    </div>
                    <div className="buyingoption">
                        <Select
                            id="Select-9"
                            multiple={false}
                            onChange={calculatePrice}
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
                            >Please select an option</option>
                            {prelistItem}
                        </Select>
                    </div>
                    <div className="product_price">S${parseFloat(price).toFixed(2)}</div>
                    <div className="action_buttons">
                        <Button
                            node='button'
                            type='submit'
                            waves='light'
                            style={{ marginRight: "0.5rem" }}
                            className='#212121 grey darken-4'>
                            Add to cart</Button>
                        <Button
                            node='button'
                            type='submit'
                            waves='light'

                            className='#212121 grey darken-4'>
                            Buy now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
