const axios = require("axios")
const baseAPI = "https://api.github.com"
const apiGitUrl = axios.create({
    baseURL: baseAPI
})

module.exports = apiGitUrl;