'use strict'

const Glue = require('@hapi/glue')
const getRoute = require('./lib/routepaths')
require('dotenv').config()

// Confidence requires this ('/', process.env)
const Manifest = require('./manifest').get('/', process.env) 

const startServer = async function () {
    try {
        const server = await Glue.compose(Manifest, {
            relativeTo: __dirname
        })
        await require('exiting').createManager(server).start()

        // Add HapiJS server side rendered routes here
        server.route(getRoute)

        server.events.on('stop', () => {
            console.log('Server Stopped.')
        })

        await server.start()

        // server.log(`Server running on ${server.info.uri}`)
        console.log(`Server running on ${server.info.uri}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()
