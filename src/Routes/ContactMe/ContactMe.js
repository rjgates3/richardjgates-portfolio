import React from 'react';

import './contactMe.css';

class ContactMe extends React.Component {

    render() {
        return(
            <section className="contact-me">
                <h2>Contact Me</h2>
                <div className="contact">
                    <i className="far fa-envelope fa-2x"></i>
                    <a href="mailto:Gates.J.Richard@Gmail.com" target="blank">
                        Gates.J.Richard@Gmail.com
                    </a>
                </div>
                <div className="contact">
                    <i className="fab fa-github fa-2x"></i>
                    <a href="http://github.com/rjgates3" target="blank">
                        github.com/rjgates3
                    </a>
                </div>
                <div className="contact">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <a href="https://www.linkedin.com/in/gatesrichard" target="blank">
                        www.linkedin.com/in/gatesrichard
                    </a>
                </div>
                <div className="contact">
                    <i className="fab fa-twitter fa-2x"></i>
                    <a href="https://twitter.com/chem2code" target="blank">
                        twitter.com/chem2code
                    </a>
                </div>
            </section>
        )
    }
}

export default ContactMe