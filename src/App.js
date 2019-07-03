import React, {Component} from 'react';
import {connect} from "react-redux";
import HeaderAboutMe from './components/headerAboutMe/headerAboutMe'
import Project from "./components/project/project"
import Review from "./components/rewiew/review.js"
import './app.css'

class App extends Component {
    render () {
        return(
            <div className='background'>
                <HeaderAboutMe/>
                { this.props.myProjects.projects.map((project) => {
                    return (
                        <Project
                            key={project.id}
                        name={project.name}
                            description={project.description}
                            color={project.color}
                            leftRight={project.leftRight}
                        stack={project.stack}
                        demo={project.demo}
                        githubLink={project.githubLink}
                            siteLink={project.siteLink}
                        />
                    )
                })
                }

                <Review/>

                <div className='footer'>
                    <a href="https://github.com/nivanavi">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://vk.com/nivanavi">
                        <i className="fa fa-vk" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/nivanavi/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
