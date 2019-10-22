import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="g-container-lg">
                <header className="">
                    <nav className="g-clearfix">
                        <ul>
                            <li><Link className="home" to="/">Home</Link></li>
                            <li><Link className="work" to="/projects">Projects</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;
