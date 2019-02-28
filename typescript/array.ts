let arr: number []
arr = []
arr[0] =10
arr[1] = 2 
console.log(`length of array :${arr.length}`)
console.log(arr[0])
console.log(arr[1])
let val=[
    {
        id:1
    },
    {
        id:2
    }
]
console.log(val[0])
let numbers:number[]=[2,3,10,9,8,16]
let index : number
let min:number=numbers[0]
let i:number
let j:number
//finding maximum value in an array

for(index=1;index<numbers.length;index++)
{
    if( min < numbers[index])
    {
min=numbers[index]
    }
        
    }
    console.log('Largest is ',min)
    for(i=0;i<numbers.length;i++)
    {
        for(j=i+1;j<numbers.length;j++)
        {
            if(numbers[i]<numbers[j])
            {
               numbers[i]=numbers[i]+numbers[j];
                numbers[j]= numbers[i]-numbers[j];
                numbers[i]=numbers[i]-numbers[j];
            }
        }
    }
for( let n=0;n<numbers.length;n++)
{
console.log(numbers[n]);
}
//petfect square root
let arr1:number[]=[]

let k=0
for (let i =0; i <= numbers.length; i++) {
    for(let j=0;j<=numbers.length;j++)
    {
      if(j*j==numbers[i])
        {
              arr1[k]=j;
            

        }
    }
}
    
console.log(arr1)