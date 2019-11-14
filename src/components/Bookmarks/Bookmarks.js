import React from 'react'
import Project from '../../components/Project/Project'

const content = require('../../content/content')
const bookmarksImage = require('../../images/bookmarks.png')

class Bookmarks extends React.Component {
    render() {
        return(
            <Project 
                content = { content.projects.bookmarks }
                image   = { bookmarksImage }
            />
        )
    }
}

export default Bookmarks
