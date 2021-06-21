let rightPaneTarget=document.getElementsByClassName("right-pane")[0];
let videoIFrame=document.getElementById("video-player");
let viewsTarget=document.getElementById("views");
let divId=document.getElementById("divId");
let description=document.getElementById("description");
let rightPaneList=[];


fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
.then(res=>res.json())
.then(res=>{
    rightPaneList=res;
    console.log(rightPaneList);
    rightPaneList.forEach((item,index)=>{
        let figureTarget=document.createElement('figure');
        figureTarget.classList.add('items');
        let imageTarget=document.createElement('img');
        imageTarget.classList.add('thumbnail');
        imageTarget.src=item.thumbnail;
        let figCaption=document.createElement('figcaption');
        figCaption.classList.add("caption");
        figCaption.textContent=item.title;
        figureTarget.appendChild(imageTarget);
        figureTarget.appendChild(figCaption);
        figureTarget.addEventListener('click',()=>{
            fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/video")
            .then(res=>res.json())
            .then(res=>{
                let requiredVideo=res.filter((vid)=>vid.id==item.id);
                viewsTarget.textContent=`${requiredVideo[0].views} views`;
                divId.textContent=requiredVideo[0].title;
                description.textContent=requiredVideo[0].description;
                videoIFrame.src=`https://player.vimeo.com/video/${requiredVideo[0].vimeoId}`;

            })
            .catch(err=>console.log(err))
        })
        rightPaneTarget.appendChild(figureTarget);
    })
    
})
.catch(err=>console.log(err));
