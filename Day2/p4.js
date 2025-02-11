// const fs = require('fs');

// fs.unlink("./data.txt",(err)=>{
//     if (err)
//         console.log(err);
//     else
//     console.log("File deleted");
// })

//for p6.js
const fs = require('fs');

fs.unlink("./mydir/data.txt",(err)=>{
    if (err)
        console.log(err);
    else
    console.log("File deleted");
})