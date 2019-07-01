import React, {Component} from 'react';
import './project.css'

class Project extends Component {
    render() {
        const backColor = {
            background: `linear-gradient(${this.props.color[0]}, ${this.props.color[1]})`
        };
        const triangleTop = {
            marginBottom: '-4px',
        display: 'inline-block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 0 17vh 100vw',
        borderColor: `transparent transparent ${this.props.color[0]} transparent`
        };

        const triangleBottom = {
            display: 'inline-block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        borderWidth: '17vh 100vw 0 0',
        borderColor: `${this.props.color[1]} transparent transparent transparent`
        };

        const linkStyleGit = ['githubLink'];

        const linkStyleSite = ['siteLink'];

        if (this.props.githubLink !== null) {
            linkStyleGit.push('linkStyle')
        }

        if (this.props.siteLink !== null) {
            linkStyleSite.push('linkStyle')
        }
        return (
            <div>
                <div style={triangleTop}></div>
            <div style={backColor}>
                <div className='links'>
                <a className={linkStyleSite.join(" ")} href={this.props.siteLink}>
                <h1>{this.props.name}</h1>
                </a>
                <a className={linkStyleGit.join(" ")} href={this.props.githubLink}>
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                </div>

                <div className='stack'>
                    {this.props.stack.map((one) => {
                        return (
                            <img alt={one} src={require(`../../images/stack/${one}.png`)}/>
                        )
                    })}
                </div>

                {
                    (() => {
                            if (this.props.leftRight === 1) {
                                return (
                                    <div className='demoAndDescription'>
                                        <div className='descriptionProject'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto
                                            labore mollitia non repudiandae. Accusantium molestiae quasi repellat
                                            suscipit totam. Adipisci architecto aut, consectetur laudantium neque quae
                                            quaerat quam?
                                        </div>
                                        <div className="demoProject">
                                            <img alt={this.props.demo}
                                                 src={require(`../../images/demoProject/${this.props.demo}.jpeg`)}/>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='demoAndDescription'>
                                        <div className="demoProject">
                                            <img alt={this.props.demo}
                                                 src={require(`../../images/demoProject/${this.props.demo}.jpeg`)}/>
                                        </div>
                                        <div className='descriptionProject'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto
                                            labore mollitia non repudiandae. Accusantium molestiae quasi repellat
                                            suscipit totam. Adipisci architecto aut, consectetur laudantium neque quae
                                            quaerat quam?
                                        </div>
                                    </div>
                                )
                            }
                        }
                    )()
                }
            </div>
                <div style={triangleBottom}></div>
            </div>
        )
    }
}

export default Project;