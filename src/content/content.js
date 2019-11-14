
const content = (function() {
    const page='home'

    const goodMealImage = require('../images/goodMeal.png') 
    const jollylubeImage = require('../images/jollyLube.png')
    const spacedRepImage = require('../images/spacedRep.png')
    const bookmarksImage = require('../images/bookmarks.png')
    const quizImage = require('../images/presidentsQuiz.png')

    const textContent = {
        aboutMe: {
            p1: 'I am a full-stack developer, material scientist, and creative problem solver.',
            p2: 'I believe I missed the mark on finding my calling in life by a small degree.',
            p3: 'See, I have always been an engineer at heart.',
            p4: 'As a child, I loved science and mathematics. What I did not discover was how much of a hands-on learner I was. I suppose it should have occurred to me, I was always repairing video game remotes, by taking them apart and sodering the cables back on the breadboard. Or, as a college student, I always received my best grades in lab class. Organic Chemistry lab was my favorite, whereas, Organic Chemistry class was the worst.',
            p5: 'I discovered programming as a hobby when I took a class at Portland Community College. I thought it was going to be about sodering and electronic components, and the first day we did build a blinking LED toy. The magic happened the next time our class met when we learned how to program the circuit in that little toy using an Arduino. Soon after, I purchased a Raspberry Pi. I heard people were programming python on them, and I had also learned years earlier that some scientists used python to analyze data and do computational chemistry. The software engineering bug had bitten and I was hooked on the idea of learning python.',
            p6: 'Years later, I found myself working as a Material Scientist for M-Disc. Because the entire optical disc market was tanking (burning CDs or DVDs was so 1990\'s),  we were burning customers data on archival media and mailing it to them. One of my many responsibilities was to take care of the robots burning our discs, and I had a theory. The disc printers needed less attention if they were used more regularly, so I wrote a simple batch file that did just that. That batch file, turned into a screen full of batch files, and finally into a simple python GUI. I added the ability to send QA/QC burn jobs to the robots. It also had a function that would take an external hard drive, parse the data into 5, 25, 50 or 100 Gb increments and burn the data to a group of discs.',
            p7: 'It was through these experiences, I discovered I not only had a love of learning but a love of applied learning. Building cool stuff, as a software engineer, fulfills my passion for both learning and application.',
        },
    }
    const projects = {
        quiz: {
            title: 'Presidents Quiz',
            live: 'https://thinkful-ei-firefly.github.io/chris_richard_quiz/',
            repo: 'https://github.com/thinkful-ei-firefly/chris_richard_quiz',
            image: quizImage,
            imageAlt: 'Presidents Quiz App',
            desc: 'Examine your familiarity with US presidents! The Presidents Quiz was created for those who would like to test their trivia knowledge of US Presidents. I built this app to help users learn more abstract knowledge of Presidents of the United States.',
            tech: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'jQuerry'
            ],
            background: 'red'
        },
        bookmarks: {
            title: 'My Bookmarks',
            live: 'https://thinkful-ei-firefly.github.io/richard-bookmarks-app/',
            repo: 'https://github.com/thinkful-ei-firefly/richard-bookmarks-app',
            image: bookmarksImage,
            imageAlt: 'Bookmarks App',
            desc: 'My Bookmarks was created for people who like collecting bookmarks of their favorite websites. Users can create, collect and delete their favorite bookmarks.',
            tech: [
                'HTML5', 
                'CSS3', 
                'JavaScript', 
                'jQuery'
            ],
            background: 'green'
        },
        jollyLube: {
            title: 'JollyLube',
            live: 'https://jollylube.gatesjrichard.now.sh/',
            repo: 'https://github.com/rjgates3/jollylube',
            image: jollylubeImage,
            imageAlt: 'Jolly Lube App',
            desc: 'JollyLube, a play on JiffyLube was created as a scheduling app for a oil change company. Users can create an account, schedule appointments by selecting from available days, and times, and delete appointments.',
            tech: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'React.js',
                'Node.js',
                'PostgreSQL',
                'Express',
                "RESTful API's",
                'Heroku',
                'Zeit/now.sh',
                'Knex',
                'Mocha',
                'Chai',
                'SuperTest',
                'XSS',
                'bcrypt',
                'Postgater-cli',
                'JWT',
                'Nodemon'
            ],
            background: 'blue'
        },
        spaceRep: {
            title: 'Spaced Rep - Italian',
            live: 'https://spaced-repetition.gatesjrichard.now.sh/',
            repo: 'https://github.com/thinkful-ei-firefly/SpacedRep-Client-Richard',
            image: spacedRepImage,
            imageAlt: 'Spaced Repetition Italian App',
            desc: 'Space Rep - Italian was built for those interested in learning Italian. Spaced repetition is a learning technique that is based on reviewing material with a gradually increasing time spacing. The spaced repetition algorithm used in the backend utilizes a singly linked list.',
            tech: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'React.js',
                'Node.js',
                'PostgreSQL',
                'Express',
                'Singly Linked List',
                "RESTful API's",
                'Heroku',
                'Zeit/now.sh',
                'Knex',
                'Mocha',
                'Chai',
                'SuperTest',
                'XSS',
                'bcrypt',
                'Postgater-cli',
                'JWT',
                'Nodemon'
            ],
            background: 'purple'
        },
        goodMeal: {
            title: 'Good Meal',
            live: 'https://good-meal-app.now.sh/',
            repo: 'https://github.com/thinkful-ei-firefly/recipe-client',
            image: goodMealImage,
            imageAlt: 'Good Meal App',
            desc: 'Good Meal is for those that continue to save recipes by printing them out, stuffing them in a card file, or clicking save on your browser. Good Meal is your personalized digital recipe book.',
            tech: [
                'HTML5', 
                'CSS3', 
                'JavaScript', 
                'React.js', 
                'Node', 
                'PostgreSQL', 
                'Express',
                'Heroku',
                'Firebase',
                'AWS',
                "RESTful API's",
                'Site Maps',
                'Schema.org',
                'Knex',
                'Mocha',
                'Chai',
                'Supertest',
                'XSS',
                'bcrypt',
                'Axios',
                'Postgrator-cli',
                'JWT',
                'Nodemon'
            ],
            background: 'grey'
        }
    }

    return {
        page,
        textContent,
        projects
    };
})();

module.exports = content;

