import React, { useState, useRef } from 'react'
import './Account_landing.css';

import { Button, TextInput, Row, Col, Card, Icon } from "react-materialize";
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'
import Helper from '../../../helpers/Utils'
const Account_landing = () => {
    const [emailAC, setEmailAC] = useState("");
    const [pwdAC, setPwdAC] = useState("");
    const rMsg = useRef(null);
    const url = process.env.REACT_APP_SUGAR_API_ENDPOINT;

    const doLogin = () => {
        rMsg.current.innerHTML = '';
        if (!Helper.isEmailValid(emailAC)) {
            rMsg.current.innerHTML = process.env.REACT_APP_MSG_ERROR_EMAIL_INVALID;
        }

        if (!Helper.isEmailValid(emailAC) && pwdAC != undefined) {
            // const hPassword = await Helper.hashPassword(pwdAC);

            // Helper.hashPassword(pwdAC).then(hPassword => {
            //     console.log(hPassword);
            //     fetch(url + "verify", {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Access-Control-Allow-Origin': '*',
            //             'Access-Control-Allow-Headers': 'Origin, X-Requested-  With, Content-Type, Accept'
            //         },
            //         body: JSON.stringify({ username: emailAC, password: hPassword })
            //     }).then((response) => response.json())
            //         .then((data) => {
            //             console.log(data.token);
            //             console.log(data.purchaser);
            //         })
            // }).catch((err) => console.log(err.message));
        }

    }

    const doContinueAsGuest = () => {

    }

    const doValidate = () => {

    }

    return (
        <div>
            <div className="accountlanding_wrapper">
                <div className="member_login">
                    {/* for member login panel to enter username + password */}

                    <div>
                        <h4>Member Login</h4>
                        <TextInput id="emailAC" label="Email"
                            icon={<Icon>keyboard</Icon>}
                            className="member_login_input"
                            onChange={(e) => setEmailAC(e.target.value)}
                            value={emailAC}
                        />
                        <div className="sub_content" ref={rMsg} >{process.env.REACT_APP_MSG_ENTER_UR_EMAIL}</div>
                        <TextInput id="password" label="Password" type="password"
                            icon={<Icon>lock</Icon>}
                            className="member_login_input"
                            onChange={(e) => setPwdAC(e.target.value)}
                            value={pwdAC}
                        />
                        <div className="sub_content" >Enter the password that accompanies your email address.</div>
                        <Button node="button" waves="light" className='#212121 grey darken-4' onClick={doLogin} >Login</Button>

                        <div className="sub_content_II">
                            <NavLink to={process.env.REACT_APP_LINK_FORGOT_PASSWORD} >Forgot your password?  </NavLink>
                            Not yet member?<br /><NavLink to="/dummy"> Sign up </NavLink>with us!
                        </div>

                    </div>
                </div>
                <div className="alternative_login_options">
                    {/* for alernative login using google, twitter */}
                    <Button node="button" waves="light" className='#212121 grey darken-4' >Continue as a Guest</Button>
                </div>
            </div>
        </div >
    )
}

export default Account_landing;