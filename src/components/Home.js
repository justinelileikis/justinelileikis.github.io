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
                        <p className="g-font-size-larger"><b>Web developer</b></p>
                        <p>Justine is the type of web developer who not only writes quality code but is also a great collaborator and communicator. With a BA in Visual Arts from Western University in addition to her Graduate Certificate in Interactive Media, Justine has a keen UX and visual design sense that ensures the value of research, strategy and design is carried over into everything she builds.</p>
                        <ul className="g-connect">
                            <li><a href="https://ca.linkedin.com/in/justinelileikis" target="_blank"><i className="fab fa-linkedin-in"></i>LinkedIn</a></li>
                            <li><a href="mailto:justinelileikis@gmail.com"><i className="fas fa-envelope"></i>Email</a></li>
                            <li><a><i className="fas fa-file-alt"></i>Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
