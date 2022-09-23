const express = require('express')
const router = express.Router()
const { Octokit, App } = require("octokit");

// say thanks.io
var axios = require('axios');
var qs = require('qs');

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
                { "id": 1, "owner": "geekysethi", "name": "Urbanization Change Detection", "description": "Urbanization detection using computer vision algorithms to reduce the reliance on the data of government surveys, which will speed up the policy making process.", "link": "https://github.com/geekysethi/Urbanization-change-detection" },
                { "id": 2, "owner": "actworthy", "name": "ActWorthy", "description": "ActWorthy is social media for social change. We are creating the platform that makes people feel compelled to take action in their community. Action might include donating, volunteering, or any community-oriented action you can think of.", "link": "https://github.com/actworthy/citizen-flutter" },
                { "id": 3, "owner": "hanseaston", "name": "Pandemic-Produce-Delivery-Project", "description": "An ongoing open-source e-commerce shop using React, Express, Firebase, and MongoDB. Designed for pandemic-relief and social good. New contributors are always, always, welcomed, regardless of where you are 🔥.", "link": "https://github.com/hanseaston/Pandemic-Produce-Delivery-Project" },
                { "id": 4, "owner": "openpantry", "name": "OpenPantry", "description": "A management system for pantry programs to help people eat healthy meals with dignity", "link": "https://github.com/openpantry/open_pantry" },
                { "id": 5, "owner": "ProgramEquity", "name": "Amplify", "description": "Choose a cause to reach out to your representative for the Climate Can’t Wait Campaign 2022.Choose a cause to reach out to your representative for the Climate Can’t Wait Campaign 2022.", "link": "https://github.com/ProgramEquity/amplify" },
                { "id": 6, "owner": "BlitzKraft", "name": "The 'Say Thanks' Project", "description": "saythanks.io will provide a button/link for use by open source projects, to encourage users to send a simple thank you note to the creator (or creators) of that project.", "link": "https://github.com/BlitzKraft/saythanks.io" },
                { "id": 7, "owner": "ahn-nath", "name": "thanks_for_your_contribution_to_equity", "description": "A web app that allows you to contribute to open source projects of social tech causes as a developer and promote awareness via the representatives involved in the campaigns of the projects.", "link": "https://github.com/ahn-nath/thanks_for_your_contribution_to_equity" },
                { "id": 8, "owner": "ahn-nath", "name": "Railflow command line utility", "description": "The Railflow CLI takes a bunch of arguments and processes/parses JUnit schema files that contain unit test results from the CI system and sends those results to JIRA using its respective REST API.", "link": "https://github.com/ahn-nath/java-command-line-tool" },
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
        if (arr.length > 0) {
            res.send({ hasMadeContribution: true })
        }
        else {
            res.send({ hasMadeContribution: false })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Whoops! We could not verify your contribution' })
    }
})

// send thanks to the owner or the Thanks.io received
router.get('/send-thanks/:repo', async (req, res) => {
    try {
        // args
        const byline = "ThanksContribution team"
        const thanks_url =  "https://saythanks.io/to/ahn-nath"
        const repo = req.params.repo
        const message = `We verified your contribution to ${repo} Thank you for making this world a better place by making contributions to open source. Keep being awesome!`
        
        
        // call
        const response = sayThanksToUser(thanks_url, message, byline)
        // out
        console.log(response)
        res.send({ message: "We successfully sent a thank you message" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Whoops! We could not send your message' })
    }
})

/*** Helper functions ***/
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


// send thanks to user for making a contribution
function sayThanksToUser(sayThanksURL, message, byline) {

    var data = qs.stringify({
        'content-type': 'palintext',
        'Font style': '0',
        'body': message,
        'byline': byline
    });
    var config = {
        method: 'post',
        url: sayThanksURL + '/submit',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("Successfully sent");
            return "Successfully sent";
        })
        .catch(function (error) {
            console.log(error);
            return "There was an error and we could not send the thanks"
        });
}
