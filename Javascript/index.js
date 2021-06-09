let nameTarget=document.getElementById('name');
let ageTarget=document.getElementById('age');
let addressTarget=document.getElementById('address');
let submitTarget=document.getElementById('submit');
let name='',age='',address='';
nameTarget.addEventListener('change',(event)=>{
    console.log(event.target.value);
    name=event.target.value;
});

ageTarget.addEventListener('change',(event)=>{
    console.log(event.target.value);
    age=event.target.value;
});

addressTarget.addEventListener('change',(event)=>{
    console.log(event.target.value);
    address=event.target.value;
});

submitTarget.addEventListener('click',(event)=>{
    alert(`Name:- ${name} Age:-${age} Address:-${address}`);
})


let numberBoxTarget=document.getElementById('numberBox');
let submitNumTarget=document.getElementById('submitNum');
let boxContainerTarget =document.getElementById('box-container');


let number='';
numberBoxTarget.addEventListener('change',(event)=>{
    number=event.target.value;
})
submitNumTarget.addEventListener('click',(event)=>{
    boxContainerTarget.innerHTML='';
    number=parseInt(number);
    console.log(typeof(number));
    for(let i=0;i<number;i++)
    {
        let box=document.createElement('div');
        box.style.width='30px';
        box.style.height='30px';
        box.classList.add('box');
        box.style.backgroundColor=getRandomColor();
        boxContainerTarget.appendChild(box);
        
    }
})

let timerTarget=document.getElementById('timer');
let hours=document.createElement('div');
let minutes=document.createElement('div');
let seconds=document.createElement('div');

setInterval(()=>{
    let date=new Date();
    hours.textContent=`${date.getHours()} : `;
    timerTarget.appendChild(hours);
    minutes.textContent=`${date.getMinutes()} : `;
    timerTarget.appendChild(minutes);
    seconds.textContent=`${date.getSeconds()}`;
    timerTarget.appendChild(seconds);
},1000);


let stopwatchTimerTarget=document.getElementById('stopwatch-timer');
let startTarget=document.getElementById('start');
let stopTarget=document.getElementById('stop');
let resetTarget=document.getElementById('reset')
let stopwatchHours=document.getElementById('hours');
let stopwatchMinutes=document.getElementById('minutes');
let stopwatchSeconds=document.getElementById('seconds');
let stopwatchMilliseconds=document.getElementById('milliseconds');


startTarget.addEventListener('click',()=>{
    startTarget.classList.add('disable');
    startTarget.disabled=true;
    let startDate=Date.now();
    interval=setInterval(()=>{
        let currDate=Date.now();
        let date=currDate-startDate;
        console.log(date);
        setMilliseconds(Math.floor((date%1000)/10));
        date=Math.floor(date/1000);
        setSeconds(date%60);
        date=Math.floor(date/60);
        setMinutes(date%60);
        date=Math.floor(date/60);
        setHours(date%60);        
        
    },10);
});

stopTarget.addEventListener('click',()=>{
    clearInterval(interval);
    startTarget.classList.remove('disable');
    startTarget.disabled=false;
});

resetTarget.addEventListener('click',()=>{
    clearInterval(interval);
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setMilliseconds('00');
});


let inputTodo=document.getElementById('input-todo');
let addNewTarget=document.getElementById('add-new');
let todoListTarget=document.getElementById('todo-list');

let todoItem=''
let todoList=[];

inputTodo.addEventListener('change',(event)=>{
    todoItem=event.target.value;

});

addNewTarget.addEventListener('click',()=>{
    
    todoList.push(todoItem);
    todoListTarget.innerHTML='';
    console.log(todoList);
    updateDOM();
});




deleteTodo=(index)=>{
    todoList=todoList.filter((item,idx)=>idx!==index);
    todoListTarget.innerHTML='';
    updateDOM();
}

updateDOM=()=>{
    todoList.map((todo,idx)=>{
        let item=document.createElement('div');
        let button=document.createElement('button');
        item.setAttribute('id',Math.floor(Math.random() * 10000) + 1);
        item.classList.add('todo');
        item.textContent=todo;
        button.addEventListener(('click'),(event)=>{
            deleteTodo(idx);
        });
        button.setAttribute('id',Math.floor(Math.random() * 10000) + 1);
        button.textContent="Delete";
        item.appendChild(button);
        todoListTarget.appendChild(item);       

    });
}

getRandomColor=()=> {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
setHours=(hrs)=>{
    stopwatchHours.textContent=`${hrs} : `;
}
setMinutes=(min)=>{
    stopwatchMinutes.textContent=`${min} : `;
}
setSeconds=(sec)=>{
    stopwatchSeconds.textContent=`${sec} : `;
}
setMilliseconds=(milsec)=>{
    stopwatchMilliseconds.textContent=`${milsec}`;
}
