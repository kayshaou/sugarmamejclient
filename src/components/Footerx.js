import React, { useState, useEffect } from "react";
import "materialize-css";
import { Footer, TextInput, Button, Modal } from "react-materialize";


var FontAwesome = require("react-fontawesome");
require('dotenv').config();


const Footerx = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [result, setResult] = useState(null);
  const [modalHeader, setModalHeader] = useState(null);

  const url = "https://pre-sugarmamej.herokuapp.com/";

  const doSubscribe = () => {
    setModalHeader(null);
    fetch(url + "subscription/subscribe", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-  With, Content-Type, Accept'
      },
      body: JSON.stringify({ emailAddress })
    }).then((response) => response.json())
      .then((data) => {
        // console.log('This is your data', data);
        if (data.message) {
          setResult("Please check your email to confirm the subscription");
          setModalHeader("Success");
          setEmailAddress("");
        } else {
          setResult(data.error);
          setModalHeader("Oops!");
        }
      })
      .catch((err) => {
        let error = err;
        setResult(error.error);
        setModalHeader("Oops!");
      })
  }

  // useEffect(() => {
  //   return (() => {
  //     fetch(url + "subscription/subscribe", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Headers': 'Origin, X-Requested-  With, Content-Type, Accept'
  //       },
  //       body: JSON.stringify({ emailAddress })
  //     }).then((response) => response.json())
  //       .then((data) => {
  //         console.log('This is your data', data);

  //         if (data.message) {
  //           setResult(data.message);
  //         } else {
  //           setResult(data.error);
  //         }
  //       })
  //       .catch((err) => {
  //         let error = err;
  //         setResult(error.error);
  //       })
  //   });
  // }, [result]);

  return (
    <>
      <Footer
        className='example flex'
        copyrights={"COPYRIGHT © 2021 SUGARMAMEJ "}
        links={
          <ul>
            <li>
              <a className='grey-text text-lighten-3' href='#!'>
                Policy
              </a>
            </li>
            <li>
              <a className='grey-text text-lighten-3' href='#!'>
                Customer Service
              </a>
            </li>
            <li>
              <a className='grey-text text-lighten-3' href='#!'>
                About
              </a>
            </li>
            <li>
              <a className='grey-text text-lighten-3' href='#!'>
                Contact us
              </a>
            </li>
          </ul>
        }
        moreLinks={
          <>

            <a
              className='grey-text text-lighten-4 right'
              href='#!'
              style={{ marginLeft: "0.5rem" }}>
              <FontAwesome
                className='super-crazy-colors'
                name='cc-paypal'
                size='2x'
              />
            </a>
            <a
              className='grey-text text-lighten-4 right'
              href='#!'
              style={{ marginLeft: "0.5rem" }}>
              <FontAwesome
                className='super-crazy-colors'
                name='cc-visa'
                size='2x'
              />
            </a>
            <a
              className='grey-text text-lighten-4 right'
              href='#!'
              style={{ marginLeft: "0.5rem" }}>
              <FontAwesome
                className='super-crazy-colors'
                name='cc-mastercard'
                size='2x'
              />
            </a>
          </>
        }>
        <div className='footercontainer'>
          <div className='left-panel'>
            <h5 className='white-text'>Subscription</h5>
            <div className='subscribe-sec'>
              <TextInput
                id='emailAddress'
                onChange={(e) => setEmailAddress(e.target.value)}
                value={emailAddress}
                placeholder='Email address'
              />
              <Button
                node='button'
                type='submit'
                waves='light' onClick={doSubscribe}
                style={{ paddingLeft: "1rem" }}
                className='#212121 grey darken-4'>
                Subscribe
              </Button>
              {result &&
                <Modal
                  actions={[
                    <Button onClick={() => setResult(null)} flat modal="close" node="button" waves="green">Close</Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header={modalHeader}
                  id="Modal-0"
                  open={true}
                  options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                  }}
                // trigger={result}
                >
                  <p>
                    {result}
                  </p>
                </Modal>}
            </div>
          </div>
          <div className='middle-panel'></div>
          <div className='right-panel'>
            <p className='grey-text text-lighten-4'></p>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footerx;
