let containerTarget=document.getElementById("container");
let submitButton=document.createElement("button");
let quizData=[];
let rating=0;



let loadData=async ()=>{
    await fetch("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
        .then(res=>res.json())
        .then(res=>{
            quizData=res;
            console.log(quizData)
            quizData.forEach((item,index)=>{
                let questionTarget=document.createElement('div');
                questionTarget.textContent=item.question;
                let optionA=document.createElement('radio')
                containerTarget.appendChild(questionTarget);
            })

            containerTarget.appendChild(submitButton);
        })
        .catch(err=>console.log(err));
}

loadData();



