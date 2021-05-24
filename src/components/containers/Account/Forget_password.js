
import React, { useState, useRef } from 'react'
import './Forget_password.css';

import { TextInput, Col, Button, Icon, Card } from "react-materialize";
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'
import Helper from '../../../helpers/Utils'
const Forget_password = () => {

    const [emailFP, setEmailFP] = useState("");
    const rMsg = useRef(null);
    const rEmailFP = useRef(null);


    const doResetPassword = () => {
        // to do
        if (!Helper.isEmailValid(emailFP)) {
            rMsg.current.innerHTML = process.env.REACT_APP_MSG_ERROR_EMAIL_INVALID;
        } else {
            rMsg.current.innerHTML = process.env.REACT_APP_MSG_SUCCESS_EMAIL_SENT;
            setEmailFP("");
            rEmailFP.current.focus();
        }
    }



    return (
        <div className="Resetpassword">
            <h4>Reset new password</h4>
            <TextInput id="emailFP" label=""
                icon={<Icon>keyboard</Icon>}
                className="member_login_input"
                onChange={(e) => setEmailFP(e.target.value)}
                value={emailFP} ref={rEmailFP}
            />
            <div className="sub_content" ref={rMsg}>Enter your email address.</div>
            <Button node="button" waves="light" className='#212121 grey darken-4' onClick={doResetPassword} >
                Email new password</Button>


        </div>
    )
}

export default Forget_password;
