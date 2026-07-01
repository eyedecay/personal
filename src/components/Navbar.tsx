import React from "react"; 
import "./navbar.css"
import "../globals.css"

export default function NavBar() {
    return (
        <nav className = "navbar">
            <ul className = "links">
                <li> <a href = "#about"> About </a> </li>
                <li> <a href = "#projects"> Projects </a> </li>
                <li> <a href = "#contact"> Contact </a> </li>
            </ul>
        </nav>
    )
}