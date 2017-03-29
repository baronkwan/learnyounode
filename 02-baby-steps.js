var list = process.argv
var total = 0
for (var i = 2; i < list.length; i++) {
    total += +list[i]
}
console.log(total)
