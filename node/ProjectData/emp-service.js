
const fetchUserById =(employees,id)=>{
    return employees.find(e=> e.id == id)
}
const fetchUserByProjectId =(employees,pid)=>
{
    return employees.filter(e=>e.pid == pid)
}
const fetchuserBydesignation=(employees,designation)=>
{
    return employees.filter(e=>e.designation == designation)
}
const fetchuserbyproject=(employees,projects,pid)=>
{
let project=projects.find(p=>p.pid==pid)
let em=employees.filter(e=>e.pid==pid)
let pname=project.pname
let prid=project.pid
return{
    pname,prid,
    em
}
}

module.exports={
    byProjectId:fetchUserByProjectId,
    byId:fetchUserById,
    byDesignation:fetchuserBydesignation,
    byproject:fetchuserbyproject

}