$(document).ready(()=>{
    $("button").click(()=>{
        $("h1").html("Hi H1")
        let para=$("p").append("Hello from paragraph")
        $("h2").prepend(para)
    });
    $.get("URL",()=>{})
    $.ajax({
        type:"PUT",
        url:"URL",
        data:"",
        success:(res)=>{},
        erroe:(err)=>{}
    })
})
