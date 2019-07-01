import React, {Component} from 'react';
import {connect} from "react-redux";
import HeaderAboutMe from './components/headerAboutMe/headerAboutMe'
import Project from "./components/project/project"
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

                <div className='footer'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <i className="fa fa-vk" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
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
