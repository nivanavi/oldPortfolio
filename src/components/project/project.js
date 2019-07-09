import React, {Component} from 'react';
import './project.css'

class Project extends Component {
    render() {
        const backColor = {
            background: this.props.color
        };
        const triangleTop = {
            marginBottom: '-5px',
        display: 'inline-block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 0 17vh 100vw',
        borderColor: `transparent transparent ${this.props.color} transparent`
        };

        const triangleBottom = {
            marginTop: '-1px',
            display: 'inline-block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        borderWidth: '17vh 100vw 0 0',
        borderColor: `${this.props.color} transparent transparent transparent`
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
            <div className='project'>
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
                            <div key={one[0]} className='stackLink'>
                            <a href={one[1]}>
                            <img alt={one} src={require(`../../images/stack/${one[0]}.png`)}/>
                            </a>
                            </div>
                        )
                    })}
                </div>

                {
                    (() => {
                            if (this.props.leftRight !== 1) {
                                return (
                                    <div className='demoAndDescription'>
                                        <div className='descriptionProject'>
                                            {this.props.description}
                                        </div>
                                        <div className="demoProject">
                                            <img alt={this.props.name}
                                                 src={require(`../../images/demoProject/${this.props.name}.png`)}/>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='demoAndDescription'>
                                        <div className="demoProject">
                                            <img alt={this.props.name}
                                                 src={require(`../../images/demoProject/${this.props.name}.png`)}/>
                                        </div>
                                        <div className='descriptionProject'>
                                            {this.props.description}
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
