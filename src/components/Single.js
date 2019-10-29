import React from 'react'
import api from '../api'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

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
          speed: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }

        return (
            <div className="animated fadeIn">
                <div className="g-section-container g-section-container-first">
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
                         <div className="row">
                            <div className="col-1of4">
                                <p className="g-font-size-largest g-margin-top-sm">Role</p>
                                <p>{project.role}</p>
                            </div>
                            <div className="col-3of4">
                            { 
                                project.toolkit &&
                                <div>
                                    <p className="g-font-size-largest g-margin-top-sm">Dev toolkit</p>
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
                        </div>
                    </div>
                </div>
                <div className="g-section-container g-bg-color-tertiary">
                    <div className="g-container-lg"> 
                        <Slider {...settings}>
                        { 
                            Array.from({length: project['images']}, (item, index) => 
                              <div><img src={'/img/work/'+project['class']+'/'+(index+1)+'.png'}/></div>
                            )
                        }
                        </Slider>
                    </div>
                </div>
                <div className="g-section-container g-section-container-first">
                    <a>Next</a>
                    <a>Previous</a>
                </div>
            </div>
        );
    }
}

export default Single;
