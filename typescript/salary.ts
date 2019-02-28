interface employee{
    eid:number,
    ename:string,
    esalary:number

}
let employees:employee[]
employees=[
    {
        eid :1,
        ename:'vedavathi',
        esalary:20000

    },
    {
        eid :2,
        ename:'bindhu',
        esalary:10000

    },
    {
        eid :3,
        ename:'divya',
        esalary:15000

    },
    {
        eid :4,
        ename:'sravani',
        esalary:17000

    },
    {
        eid :5,
        ename:'rohitha',
        esalary:7000

    },
    {
        eid :6,
        ename:'samyu',
        esalary:8000

    },
    {
        eid :7,
        ename:'kowshiq',
        esalary:9000

    },

    {
        eid :8,
        ename:'eswar',
        esalary:10000

    },
    {
        eid :9,
        ename:'ravali',
        esalary:7000

    },
    {
        eid :10,
        ename:'jeswanth',
        esalary:5000

    },
]
const getSalary=(employees:employee[])=>{
return employees.filter(emp=>emp.esalary>=10000&&emp.esalary<=20000)
     .map(emp=>{return emp.ename+"=>"+ emp.esalary })
    

}
console.log(getSalary(employees))