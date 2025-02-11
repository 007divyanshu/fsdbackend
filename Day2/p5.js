const fs = require('fs');
fs.mkdir('mydir',(err)=>{
    if(err) console.log(err);
    else console.log('Directory created');
})