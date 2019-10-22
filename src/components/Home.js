import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="g-profile g-sm-hidden g-xs-hidden">
                    <div className="g-profile-img"></div>
                </div>
                <div className="g-profile-copy-container">
                    <div className="g-profile-copy">
                        <h1>Justine Lileikis</h1>
                        <ul className="g-connect">
                            <li><a href="mailto:justinelileikis@gmail.com"><i className="fas fa-envelope"></i>Email</a></li>
                            <li><a href="https://ca.linkedin.com/in/justinelileikis" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i>LinkedIn</a></li> 
                            <li><a href="https://github.com/justinelileikis" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i>Github</a></li>
                            <li><a><i className="fas fa-address-card"></i>Resume</a></li> 
                        </ul>
                        <p>Justine is the type of web developer who not only writes quality code but is also a great collaborator and communicator. With a BA in Visual Arts from Western University in addition to her Graduate Certificate in Interactive Media, Justine has a keen UX and visual design sense that ensures the value of research, strategy and design is carried over into everything she builds.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
