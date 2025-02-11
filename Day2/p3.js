const fs = require('fs');
const newdata="I am append at the end of the file";
fs.appendFile("./data.txt",newdata,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Data appended to the file");
})