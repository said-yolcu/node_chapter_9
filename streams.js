var fs = require('fs')

var reader= fs.createReadStream('input.txt')

reader.on('data', data => {
    console.log(`got this data: ${data}`)
})
