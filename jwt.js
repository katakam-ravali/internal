var express=require("express")
var jwt=require("jsonwebtoken")
var app=express()
app.get('/api',(req,res)=>{
    res.json({
        message:"Hello"
    })
})
app.post('/api/posts',verifyToken,(req,res)=>
{
    jwt.verify(req.token,'secretkey',(err,data)=>
    {
        if(err)
        {
            res.sendStatus(233);
        }
        else
        {
            res.json({
                message:"PH",
                data
            })
        }
    })
})
app.post('/api/login',(req,res)=>
{
const user={
"name":"ravali",
"email":"shshsh"
}
jwt.sign({user},'secretkey',(err,token)=>{
    res.json({token})
})
}
)
function verifyToken(req,res,next)
{
    const b=req.headers['authorization'];
    if(typeof b!='undefined')
    {
        const t=b.split(" ");
        const to=t[1];
        req.token=to;
        next();
    }
}
app.listen(1286,()=>{
    console.log("Shh")
})