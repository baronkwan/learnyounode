var http = require("http")
var url = process.argv[2]

http.get(url, (res) => {
    res.setEncoding('utf-8')
    var body =''
    res.on('data', (data) => {
        body += data
    })
    res.on('error', (err) => {
        console.log(err)
    })
    res.on('end', () => {
        console.log(body.length)
        console.log(body)
    })
})