const fs = require('fs');
fs.readfile("./data.txt",isUtf8,(err,data)=>{
    if (err) throw err;
    console.log("Data read fro file:",data);
})