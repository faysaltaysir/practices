let input = document.querySelector(".input");
let searchbtn = document.querySelector(".search");
let link = "";
let url = "http://universities.hipolabs.co2m/search?name="
searchbtn.addEventListener('click',async ()=>{
    let name = input.value.trim();
    console.log(name);
    link = url + name;
    console.log(link);
    // getVersity()
    //     .then((resolve)=>{
    //         for(i of resolve){
    //             console.log(i.name);
    //             let ul = document.querySelector("ul");
    //             ul.append(i.name);
    //         }
    //     })
    let versityArr = await getVersity();
    console.log(versityArr);
    show(versityArr);
});

function show(versityArr){
    let list = document.querySelector(".list");
    list.innerHTML = "";
    for(ver of versityArr){ 
        let li = document.createElement("li");
        li.innerText = ver.name;
        list.appendChild(li);
        console.log(ver.name);
    }
}
async function getVersity(){
    try{
        let config = {headers: {Accept:"Application/json"}};
        let value = await axios.get(link,config);
        console.log(value.data);
        return value.data;
    }
    catch(err){
        console.log("Error: ", e);
        return []
    }
    
}