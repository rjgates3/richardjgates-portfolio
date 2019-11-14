import React from 'react'

class ProjectTech extends React.Component {

    createTechStack = () => {
        return this.props.tech
            .map((techItem, index) => {
                return(
                    <span
                        key = { index }
                        className="tech-item">
                        { techItem }
                    </span>
                )
            })
    }

    render() {
        return(
            <p className="tech">
                { this.createTechStack() }
            </p>
        )
    }
}

export default ProjectTech