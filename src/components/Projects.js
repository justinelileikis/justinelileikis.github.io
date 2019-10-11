import React from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class Single extends React.Component {

    constructor(props) {
        super(props)
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
            <div className="animated fadeIn g-container-lg g-section-container g-section-container-first">
                <h1>Selected work</h1>
                <div className="g-text-color-light2 g-margin-bottom">
                {
                    api.allCategories().map(p => (
                        <a onClick={(e) =>this.changeCategory(p.url)} className="g-tag" key={p.url}>#{p.name}</a>
                    ))
                }
                    <a onClick={(e) =>this.clearCategory()} className="g-tag">view all</a>
                </div>
                <div className="row margin-bottom g-margin-top">
                {
                    api.getProjects(category).map((p, index) => (
                        <div className="col-1of4 sm-1of2">
                            <div className="animated fadeIn g-featured" style={{ backgroundImage: `url(${p.image})`, animationDelay: `${index}`+'00ms' }}>
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
        );
    }
}

export default Single;
