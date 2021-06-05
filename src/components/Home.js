import React from 'react'
import api from "../api";
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="g-profile g-sm-hidden g-xs-hidden">
          <div className="g-profile-img"/>
        </div>
        <div className="g-profile-container">
          <div className="g-profile-copy">
            <h1>Justine Lileikis</h1>
            <ul className="g-connect">
              <li><a href="mailto:justinelileikis@gmail.com"><i className="fas fa-envelope"/>Email</a></li>
              <li><a href="https://ca.linkedin.com/in/justinelileikis" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"/>LinkedIn</a></li>
            </ul>
            <p>Justine is the type of software developer who not only writes quality code but is also a great collaborator and communicator. With a BA in Visual Arts from Western University in addition to her Graduate Certificate in Interactive Media, Justine has a keen UX and visual design sense that ensures the value of research, strategy and design is carried over into everything she builds.</p>
          </div>
          <div className="g-profile-work">
            <h2 className="g-margin-top">Selected work</h2>
            <div className="row margin-bottom g-margin-top">
              {
                api.getProjects().map((p, index) => (
                  <div className="col-1of4 sm-1of2 xs-1of2" key={p.url}>
                    <div className="animated fadeIn g-featured" style={{ backgroundImage: `url(/img/work/${p.class}/${p.class}.png)`, animationDelay: `${index}`+'00ms' }}>
                      <Link className="g-featured-link" to={p.url}/>
                      <div className="g-text">
                        <h2>View project</h2>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
