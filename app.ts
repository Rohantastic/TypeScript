import { resolve } from "path";

const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;


const numResults : Array<number> = [];
const textResults : string[]  =[];

//const numOrString = number | string;

interface ResultObj {
    val: number,
    timestamp: Date;
}
function add(num1: any , num2: any){
    return num1+num2;
}

function printResult(resultObj:{ val:number; timestamp: Date }){
    console.log(resultObj.val);
};



if(buttonElement){
    buttonElement?.addEventListener('click',()=>{
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2);
        const stringResult = add(num1,num2);
        console.log(result);
        console.log(stringResult);
        printResult({val:result as number,timestamp: new Date});
    });
};


const myPromise = new Promise((result,reject)=>{
    setTimeout(()=>{
        resolve('ot worked');
    },1000);
});

myPromise.then((result)=>{
    console.log(result);
})