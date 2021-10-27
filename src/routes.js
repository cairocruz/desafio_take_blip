const routes = require("express").Router();
const apiGitUrl = require("./api/apiGitUrl")

const LANGUAGE = 'C#'
const INIT_VALUE = 0
const MAX_VALUE = 5
const RETURN_SUCESS = 200

routes.get("/repositoryTake", async (req, res) => {
    try{
        const {data} = await apiGitUrl.get("/orgs/takenet/repos?&sort=created&direction=asc")
        const csharpfil = data.filter(repo => repo.language === LANGUAGE).slice(INIT_VALUE, MAX_VALUE)
        const JsonExit = csharpfil.map(repo => ({
            name: repo.full_name,
            description: repo.description,
            image: repo.owner.avatar_url
        }))

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})

module.exports = routes;