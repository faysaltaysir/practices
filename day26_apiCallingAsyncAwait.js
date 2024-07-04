let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";

// async function getFact(){
//     try{
//         let res = await fetch(url);
//         console.log(res);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch(err){
//         console.log("Error:", err);
//     }
//     console.log("Bye");
// }
let parafact = document.querySelector(".parafacts");
let btnfact = document.querySelector(".btnfact");
async function getFact2(){
    try{
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    }
    catch(e){
        // console.log("error: ", e);
        return "Error Found. No fact to show!!";
    }
}



btnfact.addEventListener("click",async ()=>{
    let para = await getFact2();
    parafact.innerHTML = para;
});

let btndog = document.querySelector(".btndog");
let imgdog = document.querySelector(".imgdog");

async function getdog(){
    try{
        let res = await axios.get(url2);
        // console.dir(imgdog);
        return res.data.message;
        
    }
    catch(e){
        return "Error found. No image to show";
    }
}

btndog.addEventListener('click',async ()=>{
    let img = await getdog();
    imgdog.src = img;
    console.log(img);

})

// getFact();
// getFact2();
