const express = require('express')

require('dotenv').config()

const app = express()




port = process.env.PORT || 5000

const serverStart = async () => {

    try {
        app.listen(port, () => 
        console.log(`server listening on port ${port}`)
        )
    } catch (error) {
        console.log(error)
        
    }
}
serverStart()