'use strict'

const Glue = require('@hapi/glue')
// const path = require('path')

require('dotenv').config()

const manifest = {
    server: {
        host: process.env.HOST,
        port: process.env.PORT,

        // routes: {
        //     cors: {
        //         origin: ['*'],
        //         additionalHeaders: ['headers']
        //     },
        //     files: {
        //         relativeTo: path.join(__dirname)
        //     },


        // }
    },
    // register: {
    //     plugins: [{
    //         plugin: './plugin',
    //         // routes: {
    //         //     prefix:
    //         // }
    //     }]

    // }
}

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, {
            relativeTo: __dirname
        })

        // Add HapiJS server side rendered routes here
        server.route({
            method: 'GET',
            path: '/',
            handler: function (req, h) {
                return "<h1>You've set up a @hapi/glue server!</h1>"
            }
        })

        await server.start()

        server.log(`Server running on ${server.info.uri}`)
        console.log(`Server running on ${server.info.uri}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()