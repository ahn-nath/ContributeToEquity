# Contribute to Equity

A web app that allows you to contribute to open source projects of social tech causes as a developer and promote awareness via the representatives involved in the campaigns of the projects. It lets make an impact through tech by empowering social cause and under represented campaigns. 

## How the idea developed ?

The projects assigned to us were [Program Equity](https://github.com/ProgramEquity) and [SayThanks.io](https://saythanks.io/). SayThanks.io lets you send customized messages to developers and Program Equity focuses on creating awareness about different under-represented campaigns. 

We saw a gap in this, something similar to what Program Equity is trying to fill. Just like there are different social good campaigns that go un-noticed due to unawareness, in the same way there are multiple social good tech projects that need recognition and developers to keep it progressing. Correspondingly, there are developers who are trying to make an impact through code are looking for such projects. 

This project serves as a bridge connecting them. 

## Project Features

## User Flow

## Project Tech Stack

We are using MERN stack for the project. 

- The backend is an express + node app with PostgreSQL as our database.
- The frontend is a React.js app
- We are using Amplify project under Program Equity for Civic APIs and getting representative data.
- We are using SayThanks.io endpoints to send custom "Thank you" to users inboxes


## Installation Instructions 

Make sure you have latest node installed. 

- Clone the project
``` git clone https://github.com/ahn-nath/thanks_for_your_contribution_to_equity.git```

- Setup front end
```
cd frontend && npm i
npm start
```

- Populate the environment variables and setup the server
```
cd server && npm i
npm start
```

## Why it's even more special

This being an orientation hackathon, we were looking for an idea that could use both the projects that were assigned to us under GitHub. This project is build upon the APIs of both [Program Equity](https://github.com/ProgramEquity) and [SayThanks.io](https://saythanks.io/) which made it more special.  


## LICENSE

MIT License

Copyright (c) Nathaly Toledo 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


