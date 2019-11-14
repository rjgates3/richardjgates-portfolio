import React from 'react'

class ProjectTitle extends React.Component {

    render() {
        return(
            <h2 
                className="project-title">
                { this.props.title }
            </h2>
        )
    }
}

export default ProjectTitle