import React from 'react'
import Project from '../../components/Project/Project'

const content = require('../../content/content')
const jollylubeImage = require('../../images/jollyLube.png')

class Bookmarks extends React.Component {
    render() {
        return(
            <Project 
                content = { content.projects.jollyLube }
                image   = { jollylubeImage }
            />
        )
    }
}

export default Bookmarks
