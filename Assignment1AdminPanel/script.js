var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
let data=[];
const searchValue=document.getElementById("search-box");
const tableData=document.getElementById("table-data");
const table=document.createElement("table");
const tbody=document.createElement("tbody");
const info=document.getElementById("info-content");
tableData.innerHTML="";

const fetchData=async ()=>{
    let result=await fetch(url)
                    .then((res)=>res.json())
                    .then(res=>{
                        console.log("res", res);
                        data=res;                      
                    })
                    .catch(err=>{alert(err)});

    data.map((item)=>{
        let tr=document.createElement("tr");
        tr.classList.add("data-row");
        let td1=document.createElement("td");
        td1.classList.add("column1");
        td1.textContent=item.id;
        let td2=document.createElement("td");
        td2.classList.add("column2");
        td2.textContent=item.firstName;
        let td3=document.createElement("td");
        td3.classList.add("column3");
        td3.textContent=item.lastName;
        let td4=document.createElement("td");
        td4.classList.add("column4");
        td4.textContent=item.email;
        let td5=document.createElement("td");
        td5.classList.add("column5");
        td5.textContent=item.phone;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.addEventListener("click",()=>{
            info.innerHTML=`
            <div>
                <b>User selected:</b>${item.firstName} ${item.lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                ${item.description}
                </textarea>
            </div>
            <div><b>Address:</b>${item.address.streetAddress}</div>
            <div><b>City:</b>${item.addresscity}</div>
            <div><b>State:</b>${item.address.state}</div>
            <div><b>Zip:</b> ${item.address.zip}</div>`
            
        })
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    tableData.appendChild(table);


}
fetchData();