// var http = require("http")
// var url = process.argv[2]

// http.get(url, function(response) {
//     response.setEncoding('utf-8')
//     var body = ''
//     response.on("data", function(data) {
//         // sth to do when data is receiving
//         body += data + '\n'
//     })
//     response.on('end', function() {
//         // sth to do when is done receiving data
//         var list = body.split('\n')
//         list.forEach(function(item) {
//             console.log(item)
//         })
//     })
    
var http = require('http')
    
http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)