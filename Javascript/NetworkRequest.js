const fetch = require("node-fetch");

// let doPromise=new Promise((resolve,reject)=>{
//     let skills=["HTML","CSS" ,"JS","React"]
//     setTimeout(()=>{
//         if(skills.length>3){
//             resolve(skills)
//         }
//         else{
//             reject("Something went wrong")
//         }
//     },1000);
// })

// doPromise
//     .then(res=>console.log("Resolved",res))
//     .catch(err=>console.log("Rejected",err));


// let dataResponse=[];

// // async function foo(){
// //     await //API
// // }

// // Use async await to pause till the response is fetched

// let xy=async ()=>{
//     await fetch("URL",{
//         method:"POST",
//         body:"name"
//     })
//     .then(res=>dataResponse=res)
//     .then()
//     .then() //....
//     .catch()
//     .finally(()=>{})

//     console.log("Something" , dataResponse);
// }

// // xy()


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(res=>{
        console.log(res.map((obj,idx)=>{
            let  {id:idNumber,title:name}=obj;
            return {idNumber,name}
        }))
        console.log(
            res.filter(obj=>obj.id==1)
        )

        })
    .catch(err=>console.log(err));


fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(res=>{
        console.log(res.map((obj,idx)=>{
            let  {area:idNumber,name:nameOfPlace}=obj;
            return {idNumber,nameOfPlace}
        }))
        let idwith=res.filter(obj=>obj.id==1);
        let asianCountires=res.filter(obj=>obj.region=='Asia');
        console.log(idwith);
        console.log(asianCountires)
        })
    .catch(err=>console.log(err))
    