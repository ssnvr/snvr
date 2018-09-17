import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'
import Logo1 from '../logo1_orig.a866cca3.jpg'
import Logo2 from '../logo1_orig1.jpg'

const Menu = () => {
    return (
        <div className="menu" style={{}}>
            <ul>
                <li><img id ="menulogo1"src= {Logo1} style={{height:100, width:225}}/></li>
                <li style={{ padding:85, paddingBottom: 40, paddingTop:40, verticalAlign:'top'}}><Link to="/home" style={{ textDecoration: 'none' , color:'black'}} className="link1">H O M E</Link></li>
                <li style={{padding:60, paddingBottom: 40, paddingTop:40, verticalAlign:'top'}}><Link to="/" style={{ textDecoration: 'none', color:'black', alignContent: 'center' }}className="link1">W O R K S</Link></li>
                <li style={{padding:60, paddingBottom: 40, paddingTop:40, verticalAlign:'top'}}><Link to="/about" style={{ textDecoration: 'none' , color:'black'}}className="link1">C O N T A C T</Link></li>
                <li><img id="menulogo1"src={Logo2}style={{height:100, width:225, paddingRight:40}}/></li>
            </ul>
        </div>

    )
}

export default Menu