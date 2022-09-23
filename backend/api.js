// We need to require this here (AGAIN) to ensure it works with the Vue CLI loader
require('dotenv').config()

const express = require('express')
const rateLimit = require('express-rate-limit')

// Require routes
const representatives = require('./routes/api/representatives')
const testAPIRouter = require("./routes/api/testAPI");
const github = require("./routes/api/github");

// Created a nested router
const apiRouter = express.Router()

// Middleware
apiRouter.use(express.json())

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 100000 // to unblock for now, let's use a high number
})
apiRouter.use(apiLimiter)

// Routes
apiRouter.use('/representatives', representatives)
apiRouter.use('/testAPI', testAPIRouter);
apiRouter.use('/github', github);


module.exports = apiRouter
