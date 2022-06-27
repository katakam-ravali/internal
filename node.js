const http=require("http")
const fs=require("fs")
const url=require("url")
let result;
function write(result)
{
    fs.writeFile("Student.json",JSON.stringify(result),function(err)
    {
        console.log(err);
    });
}
var server=http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
       fs.readFile("Student.json",function(err,data)
       {
        res.end(data);
       })
    }
    if(req.method=="POST")
    {
        const newstd=url.parse(req.url,true).query;
        console.log(newstd);
        fs.readFile("Student.json",function(err,data)
        {
            result=JSON.parse(data);
            let index=result.length;
            result[index]=newstd;
            console.log(result);
            write(result);
            res.write("Student data inserted");
            res.end();
        })
    }
    if(req.method=="PUT")
    {
        const upstd=url.parse(req.url,true).query;
        fs.readFile("Student.json",function(err,data)
        {
            result=JSON.parse(data);
            for(i in result)
            {
                if(upstd['id']==result[i]['id'])
                {
                    result[i]['id']=upstd['id'];
                    result[i]['name']=upstd['name'];
                    result[i]['loc']=upstd['loc'];
                    write(result);
                    res.write("Student data is updated");
                    res.end();
                }
            }
           
        })
    }
    if(req.method=="DELETE")
    {
        const delstd=url.parse(req.url,true).query;
        fs.readFile("Student.json",function(err,data)
        {
            result=JSON.parse(data);
            for(i in result)
            {
                if(delstd['id']==result[i]['id'])
                {
                    result.splice(i,1);
                    write(result);
                    res.write("Student data is deleted");
                    res.end();
                }
            }
        });
       
    }
})
server.listen(1286,()=>{
    console.log("Server started");
})