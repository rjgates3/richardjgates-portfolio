import React from 'react'
import Project from '../../components/Project/Project'

const content = require('../../content/content')
const goodMealImage = require('../../images/goodMeal.png')

class GoodMeal extends React.Component {
    render() {
        return(
            <Project 
                content = { content.projects.goodMeal }
                image   = { goodMealImage } 
            />
        )
    }
}

export default GoodMeal