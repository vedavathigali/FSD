const execute=(action: string, x:number, y:number)=>
{
    let result:number;
    switch(action){
        case 'add':
        result = _add(x,y)
        break
        case 'diff':
        result = _diff(x,y)
        break
        case 'mul':
        result = _mul(x,y)
    }
    return result
}
const _add =(x:number,y:number)=>{
    return  x + y
}
const _diff =(x:number,y:number)=>{
    return x - y
}
const _mul =(x:number,y:number)=>{
    return x * y
}
console.log(execute("add",5,10));
console.log(execute("diff",5,10));
console.log(execute("mul",5,10));
