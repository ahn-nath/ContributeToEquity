const express = require('express')
const router = express.Router()

// send GitHub repositories to use by the app
router.get('/', async (req, res) => {
    try {
        const repositories = {
            repos: [
                { "id": 1, "name": "Urbanization Change Detection", "description": "Urbanization detection using computer vision algorithms to reduce the reliance on the data of government surveys, which will speed up the policy making process.", "link": "https://github.com/geekysethi/Urbanization-change-detection" },
                { "id": 2, "name": "ActWorthy", "description": "ctWorthy is social media for social change. We are creating the platform that makes people feel compelled to take action in their community. Action might include donating, volunteering, or any community-oriented action you can think of.", "link": "https://github.com/actworthy/citizen-flutter" },
                { "id": 3, "name": "Pandemic-Produce-Delivery-Project", "description": "An ongoing open-source e-commerce shop using React, Express, Firebase, and MongoDB. Designed for pandemic-relief and social good. New contributors are always, always, welcomed, regardless of where you are 🔥.", "link": "https://github.com/hanseaston/Pandemic-Produce-Delivery-Project" },
                { "id": 4, "name": "OpenPantry", "description": "A management system for pantry programs to help people eat healthy meals with dignity", "link": "https://github.com/openpantry/open_pantry" },
                { "id": 5, "name": "Amplify", "description": "Choose a cause to reach out to your representative for the Climate Can’t Wait Campaign 2022.Choose a cause to reach out to your representative for the Climate Can’t Wait Campaign 2022.", "link": "https://github.com/ProgramEquity/amplify" },
                { "id": 6, "name": "The 'Say Thanks' Project", "description": "saythanks.io will provide a button/link for use by open source projects, to encourage users to send a simple thank you note to the creator (or creators) of that project.", "link": "https://github.com/BlitzKraft/saythanks.io" },
            ]

        }
        console.log(repositories)
        res.send(repositories)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Whoops! We could not get your repositories' })
    }
})

module.exports = router
