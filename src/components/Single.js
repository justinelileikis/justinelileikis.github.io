import React from 'react'
import api from '../api'
import Slider from 'react-slick'
import {Link} from "react-router-dom";

class Single extends React.Component {

	constructor(props) {
        super(props)
        this.project = api.getProject(props.match.params.url)
        this.state = {
            project: this.project
        }
    }

    componentWillReceiveProps(props) {
        this.project = api.getProject(props.match.params.url)
        this.state = {
            project: this.project
        }
    }

    componentDidMount() {
        //preload first slider image
        new Image().src = '/img/work/'+this.project[0].class+'/1.png';
    }

    render() {
      window.scrollTo(0, 0);
    	const project = this.state.project[0]
        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            fade: true,
            speed: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
          <div>
          <header>
            <nav className="g-clearfix">
              <ul>
                <li><Link className="home" to="/">Home</Link></li>
              </ul>
            </nav>
          </header>
            <div className="animated fadeIn single">
                <div className="g-section-container g-section-container-first" style={{backgroundImage: 'url(/img/work/'+project.class+'/'+project.class+'-bg.png)'}}>
    	            <div className="g-container">
    	                <h1>{project.title}</h1>
                        <ul className="g-connect">
                        {
                            project.case &&
                            <li><a href={project.case} rel="noopener noreferrer" target="_blank"><i className="fas fa-external-link-alt"></i> Case study</a></li>
                        }
                        {
                            project.prototype &&
                            <li><a href={project.prototype} rel="noopener noreferrer" target="_blank"><i className="fas fa-laptop-code"></i> Prototype</a></li>
                        }
                        {
                            project.live &&
                            <li><a href={project.live} rel="noopener noreferrer" target="_blank"><i className="fas fa-desktop"></i> Vist website</a></li>
                        }
                        </ul>
                        <div className="row">
                            <div className="col-4of5">
                                <p className="g-font-size-larger">{project.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g-section-container" style={{backgroundColor: project['color']}}>
                    <div className="g-container-lg">
                        <Slider {...settings} className={project['theme']}>
                        {
                            Array.from({length: project['images']}, (item, index) =>
                              <div key={index}><img src={'/img/work/'+project['class']+'/'+(index+1)+'.png'}/></div>
                            )
                        }
                        </Slider>
                    </div>
                </div>
                <div className="g-section-container">
                    <div className="g-container-lg">
                        <div className="row">
                            <div className="col-1of2 xs-1of2 sm-1of2">
                              <Link to={api.getPreviousProjectUrl(this.project[0].id)}><i className="fas fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;Previous project</Link>
                            </div>
                            <div className="col-1of2 xs-1of2 sm-1of2 g-text-right">
                              <Link to={api.getNextProjectUrl(this.project[0].id)}>Next project&nbsp;&nbsp;<i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Single;
