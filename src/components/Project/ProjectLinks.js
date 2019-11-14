import React from 'react'

class ProjectLinks extends React.Component {

    render() {
        return(
            <p className="project-links">
                <a 
                    href={ this.props.live } 
                    target="blank"
                    rel="noopener noreferrer"
                    className="live-link">
                    Live
                </a>
                <a 
                    href={ this.props.repo }
                    target='blank'
                    rel="noopener noreferrer"
                    className="client-link">
                    Repo
                </a>
            </p>
        )
    }
}

export default ProjectLinks