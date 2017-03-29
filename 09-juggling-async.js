var http = require("http")
var urls = [process.argv[2], process.argv[3], process.argv[4]]
    
for (var i in urls) {
    http.get(urls[i], function(res) {
        var body = ''
        res.on('data', function(data) {
            body += data
        })
        res.on('end', function() {
            console.log(body)
        })
    })
}