import React from 'react'
import Project from '../Project/Project'

const content = require('../../content/content')
const spacedRepImage = require('../../images/spacedRep.png')

class SpacedRep extends React.Component {
    render() {
        return(
            <Project 
                content = { content.projects.spaceRep } 
                image = { spacedRepImage } 
            />
        )
    }
}

export default SpacedRep