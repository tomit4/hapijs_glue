"use strict"

const Confidence = require('@hapipal/confidence')
const path = require('path')
const Inert = require('@hapi/inert')

module.exports = new Confidence.Store({
    server: {
        host: process.env.HOST,
        port: {
            $filter: 'NODE_ENV',
            $default: {
                $param: 'PORT',
                $coerce: 'number',
                $default: process.env.PORT
            },
            test: { $value: undefined }
        },
        debug: {
            $filter: 'NODE_ENV',
            $default: {
                log: ['error', 'start'],
                request: ['error']
            },
            production: {
                request: ['implementation']
            }
        },
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
})