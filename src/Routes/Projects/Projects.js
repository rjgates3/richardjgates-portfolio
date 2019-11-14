import React from 'react'

//import project Components
import Project from '../../components/Project/Project'

import './projects.css'
import './projectsTransitions.css'

const content = require('../../content/content')

class Projects extends React.Component {

    render() {
        return(
            <section className="projects">

                <Project 
                    content = { content.projects.goodMeal }
                    // image   = { goodMealImage }
                />

                <Project 
                    content = { content.projects.jollyLube }
                    // image   = { jollylubeImage }
                />

                <Project
                    content = { content.projects.spaceRep } 
                    // image   = { spacedRepImage }
                />

                <Project 
                    content = { content.projects.bookmarks }
                    // image   = { bookmarksImage }
                />

                <Project 
                    content = { content.projects.quiz }
                    // image   = { quizImage }
                />
                    
            </section>
        )
    }
}

export default Projects