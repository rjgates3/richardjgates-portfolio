import React from 'react';
import Project from '../../components/Project/Project'

const content = require('../../content/content')
const quizImage = require('../../images/presidentsQuiz.png')

class Quiz extends React.Component {
    render() {
        return(
            <Project 
                content = { content.projects.quiz }
                image   = { quizImage }
            />
        )
    }

}

export default Quiz