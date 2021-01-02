import './App.css';
import 'materialize-css';
import { Navbar, NavItem, Icon, Dropdown, Footer, TextInput, Button } from 'react-materialize';

import logo from '../src/images/sugar-logo-cropped.png'
import background from '../src/images/pexels-lisa-fotios-230325.jpg'

var FontAwesome = require('react-fontawesome')

const isOn = false;


function App() {
  return (
    <div className="App">
      <div className="navigator">


        <Navbar style={{ 'backgroundColor': 'transparent' }}
          alignLinks="right"
          brand={<img src={logo} className="brand-logo" />}
          centerChildren

          id="mobile-nav"
          menuIcon={<Icon style={{ 'color': 'black' }}>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
          search={isOn}
        >


          <NavItem href="">Home
          </NavItem>
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'right',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: true,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<a href="#!">Flavours{''}<Icon right>arrow_drop_down</Icon></a>}
          >
            <a href="#">
              Original
    </a>
            <a href="#">
              Hot & spicy
    </a>

          </Dropdown>
          <NavItem href="">Contact
          </NavItem>
          <NavItem href="">About
          </NavItem>


          <NavItem href="">
            <Icon>face</Icon>
            <span className="hide-on-med-and-up">Account</span>
          </NavItem>
          <NavItem href="components.html">
            <Icon>shopping_cart</Icon>
            <span className="hide-on-med-and-up"> Shopping cart</span>
          </NavItem>
        </Navbar>



        <div className="main_container" >
          <div className="left_con" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            color: "#f5f5f5"
          }} ></div>
          <div className="right_con">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iste, unde sunt </h3>
            <small>quasi provident ad molestiae adipisci corrupti numquam modi hic? Delectus veniam minus similique magni temporibus maxime blanditiis. Distinctio.</small>
            <Button
              node="button"
              waves="light" className="btn #212121 grey darken-4"
            >
              Get this flavor</Button>
          </div>
        </div>

        <div className="main_container" >
          <div className="right_con"  >
            <h3>quasi provident ad molestiae adipisci </h3>
            <small>corrupti numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iste, unde sunt </small>
            <Button
              node="button"
              waves="light" className="btn #212121 grey darken-4"
            >
              Get this flavor</Button>
          </div>
          <div className="left_con" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            color: "#f5f5f5"
          }}>

          </div>
        </div>



        <Footer
          className="example flex"
          copyrights={'COPYRIGHT © 2021 SUGARMAMEJ'}
          links={<ul><li><a className="grey-text text-lighten-3" href="#!">Policy</a></li><li><a className="grey-text text-lighten-3" href="#!">Customer Service</a></li><li><a className="grey-text text-lighten-3" href="#!">About</a></li><li><a className="grey-text text-lighten-3" href="#!">Contact us</a></li></ul>}
          moreLinks={
            <>
              <a className="grey-text text-lighten-4 right" href="#!" style={{ 'marginLeft': '0.5rem' }}>
                <FontAwesome
                  className="super-crazy-colors"
                  name="facebook-official"
                  size="2x" /></a>
              <a className="grey-text text-lighten-4 right" href="#!" style={{ 'marginLeft': '0.5rem' }}>
                <FontAwesome
                  className="super-crazy-colors"
                  name="instagram"
                  size="2x" /></a>
              <a className="grey-text text-lighten-4 right" href="#!" style={{ 'marginLeft': '0.5rem' }}>
                <FontAwesome
                  className="super-crazy-colors"
                  name="cc-paypal"
                  size="2x" /></a>
              <a className="grey-text text-lighten-4 right" href="#!" style={{ 'marginLeft': '0.5rem' }}>
                <FontAwesome
                  className="super-crazy-colors"
                  name="cc-visa"
                  size="2x" /></a>
              <a className="grey-text text-lighten-4 right" href="#!" style={{ 'marginLeft': '0.5rem' }}>
                <FontAwesome
                  className="super-crazy-colors"
                  name="cc-mastercard"
                  size="2x" /></a>
            </>}
        >
          <div className="footercontainer">
            <div className="left-panel">
              <h5 className="white-text">
                Subscription
              </h5>
              <div className="subscribe-sec">
                <TextInput
                  id="TextInput-4"
                  placeholder="email address"
                />
                <Button
                  node="button"
                  type="submit" waves="light" style={{ 'paddingLeft': '1rem' }}
                  className="#212121 grey darken-4">Subscribe
                </Button>
              </div>

            </div>
            <div className="middle-panel">

            </div>
            <div className="right-panel">
              <p className="grey-text text-lighten-4">

              </p>
            </div>
          </div>
        </Footer>
      </div>
    </div >
  );
}

export default App;
