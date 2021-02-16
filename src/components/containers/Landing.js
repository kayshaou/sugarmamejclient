import React from 'react'
import background from '../../images/pexels-lisa-fotios-230325.jpg'
import { Navbar, NavItem, Icon, Dropdown, Button } from 'react-materialize';
export default function Landing() {
    return (
        <div>
            <div className="main_container" >
                <div className="left_con" style={{
                    backgroundImage: 'url(' + background + ')',
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
        </div>
    )
}
