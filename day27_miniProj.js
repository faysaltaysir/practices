let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";
let url3 = "https://icanhazdadjoke.com/"

let parafact = document.querySelector(".parafacts");
let btnfact = document.querySelector(".btnfact");
async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return "Error Found. No fact to show!!";
    }
}



btnfact.addEventListener("click",async ()=>{
    let para = await getFact();
    parafact.innerHTML = para;
});

let parajokes = document.querySelector(".parajokes");
let btnjokes = document.querySelector(".btnjokes");
async function getjokes(){
    try{
        let config = {headers: {Accept:"Application/json"}};
        let res = await axios.get(url3,config);
        console.log(res.data.joke);
        return res.data.joke;
    }
    catch(e){
        return "Error Found. No fact to show!!";
    }
}



btnjokes.addEventListener("click",async ()=>{
    let jokes = await getjokes();
    console.log(jokes);
    parajokes.innerHTML = jokes;
});


let btndog = document.querySelector(".btndog");
let imgdog = document.querySelector(".imgdog");

async function getdog(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
        
    }
    catch(e){
        console.log("Error --", e);
        return "Error found. No image to show";
        
    }
}
async function demo(){
    parafact.innerHTML = await getFact();
    parajokes.innerHTML = await getjokes();
    imgdog.src = await getdog();
}
// demo();

btndog.addEventListener('click',async ()=>{
    let img = await getdog();
    imgdog.src = img;
    imgdog.setAttribute("src",img);
    console.log(img);

})
