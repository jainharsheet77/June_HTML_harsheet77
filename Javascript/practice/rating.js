import {data} from './data.js';

let directorName="Christopher Nolan";
let average=0,sum=0,count=0;
data.forEach((item,index)=>{
    if(item.Director==directorName){
        sum+=Number(item.imdbRating);
        count++;
    }
})
average=sum/count;
console.log("average= ",average);