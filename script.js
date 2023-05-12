const catapi = "https://cat-fact.herokuapp.com";
const factapi= "/facts";
async function getcatdata(){
    try{
        const response = await fetch(`${catapi}${factapi}`);
        const result = await response.json();
        if(result.length>0){
            renderlist(result);
        }else{
            hiddeshow('no-data-container',"no facts found");
        }
    }
    catch(error){
            hiddeshow('no-data-container',"Something went wrong");
            console.log(error);
    }
}
getcatdata();

function renderlist(data=[]){
    const ulelement = document.getElementsByClassName("facts-list")[0];
    const lilist=[];
    console.log(ulelement);
    // ulelement.appendChild(createlistitem({}))
    // document.body.appendChild(ulelement);
    if(data.length>0){
        data.forEach((_d)=>{
           ulelement.appendChild(createlistitem(_d));
        })
    }
    console.log(lilist)
  //  ulelement.append(...lilist);
 }

 function createlistitem(item={}){
    
    const liitem=document.createElement("li");
    liitem.className="fact-item";
    liitem.innerHTML=`<li class="fact-item">
    <div class="profile-picture"><img src="./cat.png"></div>
    <div>
        <p>
        ${item.text}</p>
    </div>
</li>`;
    return liitem;
     
 }

 function hiddeshow(classOfElement = "", message=""){
        const element = document.getElementsByClassName(classOfElement)[0];
       // console.log(element.classlist);
        element.className="no-data-container";
        element.querySelector("p").innerText = message;
 }
