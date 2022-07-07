var fs= require('fs')

var reader= fs.createReadStream('input.txt')

reader.on('data', data => {
    console.log(`got this data: \n${data}`)
})

reader.pause()
reader.resume()

reader.on('end', () => {
    console.log('the stream has ended')
})

var writer= fs.createWriteStream('output.txt')
// => true when buffer was flushed
// => false when buffer was queued
var write_bool= writer.write('The first line in output.txt\n')
console.log(writer.write('7e3e4acde5ad240a8ef5e731e644fbd1', 'base64'))
var buffer= Buffer.from('\nthis is a buffered string')
console.log(writer.write(buffer))

// when all the pending buffers are flushed
writer.on('drain', () => {
    console.log('drain emitted')
})