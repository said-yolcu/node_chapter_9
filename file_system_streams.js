var fs = require('fs')
var rs = fs.createReadStream('input.txt', {start:5, end:18})

// if you already have an open file , can create a readable stream
// like this
/*
fs.open('input.txt', 'r', (err, fd) => {
    var reader= fs.createReadStream(null, {fd: fd, encoding: 'utf8'})
    console.log(fd)
    reader.on('data', console.log)
})
*/

rs.on('data', data => console.log(data.toString()) )

var ws= fs.createWriteStream('output.txt', {flags:'w+'})

ws.write('Write this up ')