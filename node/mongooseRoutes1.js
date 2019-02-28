
const express = require('express')
const routes = express.Router()
const dao = require('./mongooseDao1')

//get all projects
routes.get('/allprojects',(rq,rs)=>{
    dao.getProjects((err,data)=>{
        if(err){
            rs.status(402).send({
                error:"unable to load data"
            })
         } else{
                rs.status(200).send(data)
            }
        
    })

})
//add the projects
routes.post('/addproject',(rq,rs)=>{
    dao._addProject(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request ",
                trace: err
            })
        }else{
            rs.status(201).send(data)
        }
    })
})
module.exports={
    routes
}


