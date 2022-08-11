const server = require("./api/server")
//HEROKU ASSIGNS ITS OWN PORT
//USE ENVIRONMENT VARIABLES, IN BASH -> ENV, IN NODE-> process.env
const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log("Listening on port 9000...")
})