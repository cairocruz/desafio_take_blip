const axios = require("axios")

const apiGitUrl = axios.create({
    baseURL: "https://api.github.com"
})

module.exports = apiGitUrl;