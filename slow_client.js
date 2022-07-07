// The code below can lead to the slow client problem. If the read
// stream is much faster than write stream, the excess data will
// be stored up in buffers. This buffers will take up memory
/*
var fs = require('fs')
require('http').createServer((req, res) => {
    var rs = fs.createReadStream('input.txt')

    rs.on('data', data => {
        res.write(data.toString())
    })

    rs.on('end', () => {
        res.end()
    })
}).listen(8080)
*/

// Solution to the the slow client problem
/*
var fs = require('fs')
require('http').createServer((req,res) => {
    var rs= fs.createReadStream('input.txt')

    rs.on('data', data => {
        if(!res.write(data)){
            rs.pause()
        }
    })

    res.on('drain', () => {
        rs.resume()
    })

    rs.on('end', () => {
        res.end()
    })
}).listen(8080)
*/

// Using stream.pipe()

let fs= require('fs')
require('http').createServer((req,res) => {
    let rs= fs.createReadStream('input.txt')

    // Normally when rs ends, the pipe connection makes sure
    // that the res also ends. But we will make the ending 
    // connection manually
    rs.pipe(res, {end: false})

    rs.on('end', () => {
        res.write('See you later coder!')
        res.end()
    })
}).listen(8080)