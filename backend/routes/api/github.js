const express = require('express')
const router = express.Router()
const { Octokit, App } = require("octokit");

// token we need to make calls to GitHub API
const GITHUB_API_TOKEN = getGitHubApiToken()

// Client API: https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: GITHUB_API_TOKEN
  })
  

// Method: get all GitHub repositories the app uses and promotes
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


// Method: get GitHub repositories the user is associated with
router.get('/:id', async (req, res) => {
    const id = req.params.id
    // TODO: make call to database to match user projects (ids) and compare with JSON object of the repos
    try {
        const repositories = {
            // dummy object for now
            repos: [
                { "id": 1, "name": "Urbanization Change Detection", "description": "Urbanization detection using computer vision algorithms to reduce the reliance on the data of government surveys, which will speed up the policy making process.", "link": "https://github.com/geekysethi/Urbanization-change-detection" },
                { "id": 2, "name": "ActWorthy", "description": "ctWorthy is social media for social change. We are creating the platform that makes people feel compelled to take action in their community. Action might include donating, volunteering, or any community-oriented action you can think of.", "link": "https://github.com/actworthy/citizen-flutter" },
            ]

        }
        console.log(repositories)
        res.send(repositories)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Whoops! We could not get your repositories' })
    }
})

// Method: verify GitHub contribution by author to specific repository
router.get('/:owner/:repo/:username', async (req, res) => {
    const owner = req.params.owner
    const repo_name = req.params.repo
    const github_username = req.params.username

    console.log("github username: " + github_username)
    console.log("repo: " + repo_name)
    // TODO: make call to database to match user projects (ids) and compare with JSON object of the repos
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/commits?author={author}', {
            owner: owner,
            repo: repo_name,
            author: github_username 
          })

        console.log(response.data)
        // validate and send response
        var arr = response.data
        if(arr.length > 0){
          res.send({hasMadeContribution: true})
        }  
        else{
          res.send({hasMadeContribution: false})  
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Whoops! We could not verify your contribution' })
    }
})


// get token needed to use the API
function getGitHubApiToken() {
    const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN

    if (GITHUB_API_TOKEN) {
        console.warn('Using the "GITHUB_API_TOKEN" environment variable.')
    } else {
        console.warn(
            'Expected "GITHUB_API_TOKEN" environment variable was not found.'
        )
    }
    // out
    return GITHUB_API_TOKEN
}

module.exports = router
