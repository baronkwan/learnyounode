var fs = require("fs")
var path = require("path")

var dirPath = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dirPath, function(err, list) {
    if (err) throw err
    list.forEach(function(item) {
        if (path.extname(item) === ext) {
            console.log(item)
        }
    })
})