const express = require('express')
const routes = express.Router()
const dao = require('./dao1')

// get all employees
routes.get('/allprojects',(rq,rs)=>{
    dao._all((err,projects)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send({
                project : projects
            })
        }
    })
})

// add a new project
routes.post('/projects/add/',(rq,rs)=>{
    rs.send({
        data: dao._add(rq.body)
    })
})
//add an employee in to project
routes.post('/employee/add/:pid',(rq,rs)=>{
    dao._addemp(parseInt(rq.params.pid),rq.body,(err,data)=>{
            if(err){
                rs.status(500).send({
                    error:"unable to process the request"
                })
            }else{
                rs.status(200).send(data)
            }
        })
    })
    routes.delete('/employee/del/:pid/:eid',(rq,rs)=>{
        dao._delemp(parseInt(rq.params.pid),parseInt(rq.params.eid),(err,data)=>{
                if(err){
                    rs.status(500).send({
                        error:"unable to process the request"
                    })
                }else{
                    rs.status(200).send(data)
                }
            })
        })
    
// edit an employee by id
routes.put('/employees/edit/:id',(rq,rs)=>{

})

// delete an employee
routes.delete('/employees/delete/:id',(rq,rs)=>{

})

// find all employees for a project
routes.post('/employees/find/project/:id',(rq,rs)=>{

})
module.exports={
    routes
} 
 