const express=require('express')
const cons=require('cors')
const fs=require(fs/promises)
const app=express()
let users=[];
app.use(cors())
app.use(express.json())
const readdata= async ()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'));
}
const writedata=async(data)=>{
    await fs.writeFile('./data.json',JSON.stringify(users));
}
readdata()
app.get('/users',(req,res)=>{
    res.json(users)
})
app.post('/users',(req,res)=>{
    const {name,age} = req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    if(!name || !age){
        res.status(400).json({error:'name and age are required'})
    }
    const newUser={id: newid,name,age};
    users.push(newUser);
    writedata(users);
    res.status(200).json({message: 'user added successfully'});
});

app.listen(9000,()=>{
    console.log('server is running on port 9000')
})