const express=require('express')
const server=express()
const parser=require('body-parser')
const service=require('./emp-service')
let  edata=require('./empdata').employees
let projects=require('./empdata').projects
server.use(parser.json())
const PORT=1000

server.get('/status',(rq,rs)=>{
    rs.send({ message: 'Server is Up & Runnning'})
})
//fetching all the employees
server.get('/employees',(rq,rs)=>{
    rs.send({data:edata})
})
//fetching employees by id
server.get('/employees/byid/:id',(rq,rs)=>
{
    rs.send({
        
            data : service.byId(edata,parseInt(rq.params.id))
        })
    
})
//fetching employees by project id
server.get('/employees/pid/:pid',(rq,rs)=>{
    rs.send({
        data : service.byProjectId(edata,parseInt(rq.params.pid))
    })
})
//fetching emloyees by designation
server.get('/employees/bydesignation/:designation',(rq,rs)=>{
    rs.send({
        data : service.byDesignation(edata,rq.params.designation)
    })
})
//fetch user by project
server.get('/employees/byproject/:pid',(rq,rs)=>{
    rs.send({
        data : service.byproject(edata,projects,parseInt(rq.params.pid))
    })
})


server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})