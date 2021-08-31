"use strict"

module.exports = 
{
    method: 'GET',
    path: '/',
    handler: function (req, h) {
        return h.file("./index.html")
    }
}
