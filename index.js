const express = require('express')

const app = express()

const port = 8080
app.get('/' ,(request , response)=>{
    response.send("Server is up and running")
})

app.listen(prompt,()=>{
    console.log(`Server is listening on port: ${port}`)
})

