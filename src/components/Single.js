import React from 'react'
import api from '../api'
import Slider from "react-slick"

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

    render() {

    	const project = this.state.project[0]
        const settings = {
          dots: true,
          infinite: true,
          fade: true,
          arrow: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }

        return (
            <div className="animated fadeIn g-container-lg g-section-container g-section-container-first">
	            <div className="row g-padding-top">
		            <div className="col-2of5">
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
		                <p>{project.text}</p>
                        { 
                            project.toolkit &&
                            <div>
                                <h2>Dev toolkit</h2>
                                <ul className="g-list-inline">
                                    { 
                                        project['toolkit'].map((p, index) => (
                                            <li><a href={p.url} rel="noopener noreferrer" target="_blank">{p.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
	                </div>
                    <div className="col-3of5 g-margin-top">
                        <Slider {...settings}>
                        { 
                            project['images'].map((p, index) => (
                                <div><img src={p.src}/></div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single;
