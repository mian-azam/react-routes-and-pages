/*
Using React Router library in our app alllows us to navigate betwwen different pages or components in React, 
and actually makes these changes to URL of each page or componenet.

React Router need to be installed 
to intsall: npm i react-router-dom

Link: use to navigate the different routes on the site.
NavLiNK: use to add styles to active routes
*/
import { NavLink, Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="header container">
                <div className="title">
                    <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"></img>
                    <h1>My Tours</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/documentation">Documentation</Link></li>
                        <li><NavLink 
                        className={navData => (navData.isActive? "active" : "")}
                        to="/tutorials">Tutorials</NavLink></li>
                        <li><NavLink 
                        className={(isActive) => (isActive? "active" : "")}
                        to="/about-us">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header