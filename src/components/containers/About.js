import React from 'react'

import './About.css';

import logo from '../../images/5bca5fa6-3a94-4eb0-a700-fabc72a48374_200x200.png'

var FontAwesome = require('react-fontawesome')
export default function About() {
    return (
        <div>
            <div className="about_wrapper">
                <div className="about">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="intro">
                        <ul >
                            <li><b>This is how we started...</b></li>
                            <li>Lorem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit a
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, excepturi rerum aliquid cupiditate tempora quod mollitia iste fugit, impedit quasi doloribus numquam commodi animi ducimus repellendus omnis corrupti dolorum incidunt.

                            </li>

                        </ul>
                    </div>
                    <div className="verse">
                        <ul >
                            <li><b>And we ended up...</b></li>
                            <li>Lorem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a necessitatibus corporis quia at sequi reiciendis non libero rem molestiae, expedita corrupti beatae unde autem quae illum nihil dignissimos eaque tempora vel saepe aperiam possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore repudiandae quisquam delectus, impedit esse vel eius veritatis voluptate mollitia debitis, error laboriosam aut temporibus reprehenderit nihil blanditiis possimus alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat! Inventore nostrum magnam nemo fuga numquam libero deserunt rem atque neque iste, natus odio nihil sit. Excepturi error labore optio.</li>

                        </ul>
                    </div>
                    <div className="verse">
                        <ul >
                            <li><b>That's all folks...</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
