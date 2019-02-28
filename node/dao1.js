const MongoClient = require('mongodb').MongoClient

const _url = 'mongodb://localhost:27017'
const _db = 'organization'

// fetch all employees
const getEmployees = (callback)=>{
    // Step 1: connect to mongo server
    MongoClient.connect(_url,(err,conn)=>{
        console.log('Connected to Mongo Server')
        // Step 2: connect to data base
        // Step 3: fetch all documents from the collections
        conn.db(_db).collection('project').find({},{fields:{ _id:0}}).toArray((err,projects)=>{
            // callback function to handle async flow 
            //toArray is used because find returns the  values in different format inorder to change the format in to mongo understable waay we use toa
            callback(err,projects)
        })
    })
}
// add a new employee
const addproject = (emp)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('project').insertOne(emp,(err)=>{
            console.log('project Added')
        })
    })
}
const addEmployee = (pid,project,callback)=>{
    console.log(project)
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('project').updateOne({
            pid:pid
        },
        {
            $push:{
                emps:project
            }
        },(err,data)=>{
            callback(err,{
                message:'employee updated'
            })
        })
        //close the connnection
        conn.close()


    
    })
}
const delEmployee=(pid,eid,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('project').updateOne({
            pid:pid
        },{
        $pull:{
         emps:{
             id:eid
        }}
    },(err,data)=>{
        callback(err,{
            message:'employee deleted'
        })
    })
    conn.close();
})
    }

        
    


module.exports={
    _all : getEmployees,
    _add : addproject,
    _addemp:addEmployee,
    _delemp:delEmployee
} 