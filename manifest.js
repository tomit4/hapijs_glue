"use strict"

const path = require('path')
const Inert = require('@hapi/inert')

module.exports = {
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