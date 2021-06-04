import React from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.category = this.getUrlParameter('category', props.location.search)
        this.state = {
            category: this.category
        }
        this.changeCategory = this.changeCategory.bind(this) 
    }

    componentWillReceiveProps(props) {
        this.category = this.getUrlParameter('category', props.location.search)
        this.state = {
            category: this.category
        }
        this.changeCategory = this.changeCategory.bind(this) 
    }

    getUrlParameter(name, url) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(url);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    changeCategory(category){
        history.push('/projects?category=' + category)
        this.setState({category: 'reset'});
        setTimeout(() => {
            this.setState({category: category});
        }, 300);
    }

    clearCategory(){
        history.push('/projects')
        this.setState({category: null});
    }

    render() {

        const category = this.state.category   

        return (
            <div className="animated fadeIn">
                <div className="g-container-lg">
                    <h1>Projects</h1>
                    <div className="g-text-color-light2 g-margin-top-sm">
                    {
                        api.allCategories().map(p => (
                        <span>
                            <a onClick={(e) =>this.changeCategory(p.url)} className={ category == p.url ? 'g-tag g-active' : 'g-tag' } key={p.url}>{p.name}</a>
                            <span className="g-dot"></span>
                        </span>
                        ))
                    }
                        <a onClick={(e) =>this.clearCategory()} className={ category == null ? 'g-tag g-active' : 'g-tag' }>View all</a>
                    </div>
                </div>
                <div className="g-container-xlg g-section-container">
                    <div className="row margin-bottom">
                    {
                        api.getProjects(category).map((p, index) => (
                            <div className="col-1of4 sm-1of2 xs-1of2" key={p.url}>
                                <div className="animated fadeIn g-featured" style={{ backgroundImage: `url(/img/work/${p.class}/${p.class}.png)`, animationDelay: `${index}`+'00ms' }}>
                                    <Link className="g-featured-link" to={p.url}></Link>
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
        );
    }
}

export default Projects;
