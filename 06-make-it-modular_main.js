var filePath = process.argv[2]
var ext = process.argv[3]
var mymodule = require('./mymodule.js')

mymodule(filePath, ext, function(err, data) {
    if (err) throw err
    data.forEach(function (item) {
        console.log(item)
    })
})