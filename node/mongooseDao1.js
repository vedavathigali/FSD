const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoose')
const projectschema=new mongoose.Schema({
    pid : mongoose.SchemaTypes.Number,
    pname : mongoose.SchemaTypes.String,
    emps :[
        {
            id : mongoose.SchemaTypes.Number,
            name :mongoose.SchemaTypes.String,
            email :mongoose.SchemaTypes.String,
            salary : mongoose.SchemaTypes.Number,
            designation : mongoose.SchemaTypes.String
        }
    ]

})
//to get all the projects
const project=mongoose.model('project',projectschema)
const getProjects=(callback)=>{
    project.find({},(err,data)=>{
        callback(err,data)
    })
}
//to add the projects
const addProject=(data,callback)=>{
    const pro = new project({
        pid:data.pid,
        pname:data.pname,
        emps:data.emps
    })
    project.create(emp,(err)=>{
        callback(err,{
            message :"project added sucessfully"
        })
    })
}
module.exports={
    getProjects,
    addProject
    
}



