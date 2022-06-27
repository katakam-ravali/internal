var express=require('express');
var app=express()
app.use(express.json())
var fs=require('fs')
app.get('/stddata',function(req,res)
{
    fs.readFile('Student.json',(err,data)=>
    {
        res.send(data);
    })
})
app.post('/addstudent',function(req,res)
{
    console.log(req.body);
    const newstd={
        id:req.body.id,
        name:req.body.name,
        loc:req.body.loc
    }
    fs.readFile('Student.json',function(err,data)
    {
        var sdata=JSON.parse(data);
      sdata.push(newstd);
      fs.writeFile('Student.json',JSON.stringify(sdata),function(err,data)
      {
        console.log("data inserted");
      })
    })
    res.send("Inserted");
})
app.put('/updatestudent/:id',function(req,res)
{
    var id=req.body.id;
    fs.readFile('Student.json"',function(err,data)
    {
        var sdata=JSON.parse(data);
        for(i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata[i]['id']=req.body.id;
                sdata[i]['name']=req.body.name;
                sdata[i]['loc']=req.body.loc;
                fs.writeFile("Student.json",JSON.stringify(sdata),function(err,data)
        {
            res.send("Studen data updated");
        })
            }
        }
        
    })
})
app.delete('/deletestudent/:id',function(req,res)
{
    var id=req.body.id;
    fs.readFile("Student.json",function(err,data)
    {
        var sdata=JSON.parse(data);
        for(i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata.splice(i,1);
                fs.writeFile("Student.json",JSON.stringify(sdata),function(err,data)
                {
                    res.send("Student data deleted");
                })
            }
        }
      
    })
})
app.listen(1286,()=>{
    console.log("Server started")
})