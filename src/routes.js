const routes = require("express").Router();
const apiGitUrl = require("./api/apiGitUrl")

routes.get("/repositoryTake", async (req, res) => {
    try{
       const {data} = await apiGitUrl.get("/orgs/takenet/repos?&sort=created&direction=asc")
        const csharpfil = data.filter(repo => repo.language === 'C#').slice(0, 5)
         const JsonExit = csharpfil.map(repo => ({
             name: repo.full_name,
            description: repo.description,
             image: repo.owner.avatar_url
         }))

         res.status(200).json(JsonExit)

    } catch(err)
    {
        res.send({ err: err.message})
    }
})

module.exports = routes;