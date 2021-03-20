const express = require('express')

const app = express()

app.set('port', process.env.PORT || 3000 ) // settings 

app.use( express.json() ) // middleware : preparate to json 

app.use( require('./routes/users') ) // routes 

app.listen( app.get('port'), () => { 
    console.log("Server port in: " + app.get("port") )
})
