import React from 'react';

import './aboutMe.css';

const content = require('../../content/content');

class AboutMe extends React.Component {

    createParagraphs = () => {
        return Object.values(content.textContent.aboutMe)
            .map((para, index) => {
                return(
                    <p key={ index }>
                        { para }
                    </p>
                ) 
            })
    }

    render() {
        return(
            <section className='aboutme'>
                
                { this.createParagraphs() }
                
            </section>
        )
    }
}

export default AboutMe