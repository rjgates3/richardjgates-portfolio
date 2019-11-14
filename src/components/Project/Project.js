import React from 'react'

import ProjectTitle from './ProjectTitle'
import ProjectLinks from './ProjectLinks'
import ProjectTech from './ProjectTech'

class Project extends React.Component {

    render() {
        return(
            <section className={ 'project ' + this.props.content.background }>

                <ProjectTitle title = { this.props.content.title } />

                <p className="project-description" >
                    { this.props.content.desc }
                </p>
                
                <img
                    className = "project-image" 
                    src = { this.props.content.image } 
                    alt = { this.props.content.alt }>
                </img>

                <ProjectTech tech = { this.props.content.tech } />

                <ProjectLinks 
                    live = { this.props.content.live }
                    repo = { this.props.content.repo }
                />

            </section>
        )
    }
}

export default Project