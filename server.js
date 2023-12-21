const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log("Up on 4000"))



var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '767502d0abd146449360ddc790aabaed',
    captureUncaught: true,
    captureUnhandledRejections: true,

})
rollbar.log('hello World!')