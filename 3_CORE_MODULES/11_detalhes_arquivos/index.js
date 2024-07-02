const fs = require ('fs')


fs.stat('index.js', function (err, stts) {
    if(err){
        console.log(err)
        return
    }

    console.log(stts.isFile())
    console.log(stts.isDirectory())
    console.log(stts.isSymbolicLink())
    console.log(stts.ctime)
    console.log(stts.size)

})
