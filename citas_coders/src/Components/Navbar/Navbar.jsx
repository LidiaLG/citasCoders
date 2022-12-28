import React from 'react'
import '../../Scss/variables.scss';
import {FaRebel} from "react-icons/fa"
import './../Navbar/NavbarStyle.scss'

const Navbar = () => {
    return (
        <>
            <div className = "NavbarContainer">
                <div className = "Logo">
                    <FaRebel className = "imgLogo"></FaRebel>
                </div>
                <div className = "NavbarWrapper">
                    <a href = "/">Home</a>
                    <a href = "/create">Create</a>
                    <a href = "/profile">Profile</a>
                </div>
            </div>
        </>
    )
}

export default Navbar

