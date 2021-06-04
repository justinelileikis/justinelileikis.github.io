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

    	const project = this.state.project[0]
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            arrows: false,
            speed: 1,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
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
                        {/* <div className="row">*/}
                        {/*    <div className="col-1of4">*/}
                        {/*        <p className="g-font-size-largest g-margin-top-sm">Role</p>*/}
                        {/*        <p>{project.role}</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-3of4">*/}
                        {/*    { */}
                        {/*        project.toolkit &&*/}
                        {/*        <div>*/}
                        {/*            <p className="g-font-size-largest g-margin-top-sm">Dev toolkit</p>*/}
                        {/*            <ul className="g-list-inline">*/}
                        {/*                { */}
                        {/*                    project['toolkit'].map((p, index) => (*/}
                        {/*                        <li><a href={p.url} rel="noopener noreferrer" target="_blank">{p.name}</a></li>*/}
                        {/*                    ))*/}
                        {/*                }*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="g-section-container g-bg-color-tertiary" style={{backgroundColor: project['color']}}>
                    <div className="g-container-lg">
                        <Slider {...settings} className={project['theme']}>
                        {
                            Array.from({length: project['images']}, (item, index) =>
                              <div><img src={'/img/work/'+project['class']+'/'+(index+1)+'.png'}/></div>
                            )
                        }
                        </Slider>
                    </div>
                </div>
                <div className="g-section-container">
                    <div className="g-container-lg"> 
                        <div className="row">
                            <div className="col-1of2 xs-1of2 sm-1of2">
                              <Link to={api.getPreviousProjectUrl(this.project[0].id)}><i className="fas fa-arrow-left" aria-hidden="true"></i> Previous</Link>
                            </div>
                            <div className="col-1of2 xs-1of2 sm-1of2 g-text-right">
                              <Link to={api.getNextProjectUrl(this.project[0].id)}>Next <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single;
