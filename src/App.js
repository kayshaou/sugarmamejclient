import './App.css';
import 'materialize-css';

import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'
import { Footer, TextInput, Button, Modal, Icon, NavItem, Navbar, Dropdown } from "react-materialize";
import Footerx from './components/Footerx'
// import Headerx from './components/Headerx'
import Landing from './components/containers/Landing'
import Product_landing from './components/containers/Product/Product_landing'
import logo from '../src/images/5bca5fa6-3a94-4eb0-a700-fabc72a48374_200x200_2.png'
import Contact from './components/containers/Contact'
import About from './components/containers/About'
import Account from './components/containers/Account/Account_landing'
import Dummy from './components/containers/Dummy'
import ForgotPassword from './components/containers/Account/Forget_password'
//var FontAwesome = require('react-fontawesome')

const isOn = false;
function App() {
  return (
    <div className="App">
      <div className="navigator">
        <Router>
          <div className="annouce_bar">
            Subscribe to our newsletter to get 10% off your first purchase! Free delivery for purchase above $60
          </div>
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
            <NavLink to="/" >Home</NavLink>
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
              trigger={<NavLink to="/product/original">Flavours{''}<Icon right>arrow_drop_down</Icon></NavLink>}
            >
              <NavLink to="/product"  >
                Original</NavLink>
              <a href="#">
                Hot &amp; spicy</a>

            </Dropdown>

            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavItem  >
              <NavLink to="/account" >
                <Icon>face</Icon>
                <span className="hide-on-med-and-up">Account</span>
              </NavLink>
            </NavItem>
            <NavItem href="components.html">
              <Icon>shopping_cart</Icon>
              <span className="hide-on-med-and-up">Shopping cart</span>
            </NavItem>
            <NavItem href="">
              <Icon>favorite_border</Icon>
              <span className="hide-on-med-and-up">Wishlist</span>
            </NavItem>


          </Navbar>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/product" exact component={Product_landing} />
            <Route path="/product/:category" component={Product_landing} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/dummy" component={Dummy} />
            <Route path={process.env.REACT_APP_LINK_FORGOT_PASSWORD} component={ForgotPassword} />
          </Switch>
        </Router>
        {/* <Landing /> */}
        <Footerx />

      </div>
    </div >
  );
}

export default App;
