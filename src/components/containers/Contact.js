
import './Contact.css';
import React from 'react'
var FontAwesome = require('react-fontawesome')

export default function Contact() {
    return (
        <div className="contact_wrapper" >
            <div className="contact">
                <div className="contact_header" >
                    <h1>We are here for you!</h1>
                    <h6>Feel free if you have any questions!</h6>
                </div>
                <div className="contact_content" >
                    <div className="left">
                        <ul className="contact_subheader"><b>Customer Service &amp; Other</b>
                            <li>
                                eMail: service@sugarmamej.com
                        </li>
                            <li>contact no: +65 1234 5678</li>
                            <li>operating hours: 9-6pm (Mon-Sat)</li>
                        </ul>
                        <ul className="contact_subheader"><b>Sales</b>
                            <li>
                                eMail: sales@sugarmamej.com
                        </li>
                            <li>contact no: +65 1234 5679</li>
                            <li>operating hours: 9-6pm (Mon-Fri)</li>
                        </ul>
                        <div className="social_logo">
                            <a
                                className='black-text text-darken-1 right'
                                href='#!'
                            >
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='instagram'
                                    size='2x'
                                />
                            </a>
                            <a
                                className='black-text text-darken-1 right'
                                href='#!'
                            >
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='facebook'
                                    size='2x'
                                />
                            </a>
                        </div>
                    </div>
                    {/* <div className="right">Right</div> */}

                </div>
            </div>
        </div>
    )
}
