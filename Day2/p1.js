const fs=require('fs');

const newdata="I am new data";
// const data=fs.readFileSync('./data.txt', 'utf8');

fs.writeFileSync('./mydir/data.txt', newdata);

// console.log(data);
const data = "I am new data"
fs.writeFile("./data.txt",data,(err)=>{
    if (err) throw err;
    console.log("File Created Successfully!");
})