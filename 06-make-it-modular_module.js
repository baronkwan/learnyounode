var fs = require("fs")
var path = require('path')

module.exports = function(filePath, ext, cb) {
    var filteredList = []
    
    fs.readdir(filePath, function(err, list) {
        if (err) return cb(err)
        list.forEach(function(file) {
            if (path.extname(file) === '.' + ext) {
                filteredList.push(file)
            }
        })
        cb(null, filteredList)
    })
}