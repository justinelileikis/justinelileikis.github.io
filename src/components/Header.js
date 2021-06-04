import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="g-clearfix">
                    <ul>
                        <li><Link className="home" to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
