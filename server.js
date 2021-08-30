'use strict'

const Glue = require('@hapi/glue')
const Inert = require('@hapi/inert')
const path = require('path')

require('dotenv').config()

const manifest = {
    server: {
        host: process.env.HOST,
        port: process.env.PORT,

        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['headers']
            },
            files: {
                relativeTo: path.join(__dirname, "./routes")
            },
        }
    },
    register: {
        plugins: [
            Inert,
            // {
            // plugin: 
            // }
            ]

    }
}

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, {
            relativeTo: __dirname
        })
        await require('exiting').createManager(server).start()

        // Add HapiJS server side rendered routes here
        server.route({
            method: 'GET',
            path: '/',
            handler: function (req, h) {
                return h.file("./index.html")
            }
        })

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