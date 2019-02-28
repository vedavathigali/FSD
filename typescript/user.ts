interface User{
    id:number,
    name:string,
    salary:number
}
interface User1{
    name:string,
    email:string,
    salary:number
}

class serviceuser {
    private users:User[]
    constructor(){
        this.users=[
            {
            id :10,
            name:'divya',
            salary:10000
        }
       // {
          //  id :20,
            //name:'bindhu',
           // salary:20000
       // }


        ]
    }
}
class businessuser{
    private users1:User1[]
    constructor(){
        this.users1=[
            {
                name:'vedavathi',
                email:'veda@gmail.com',
                salary:300000
            }
           // {
                //name:'bindhusree',
               // email:'bindhu@gmail.com',
                //salary:200000
           // }

        ]
    }
}
const service=new serviceuser();
const business=new businessuser();
const identifyUser=(obj,obj1)=>{
    if(obj.salary < obj1.salary){
        console.log('this is employee')
    }
    else{
        console.log('this is businessuser')
    }
}
identifyUser(service,business);
