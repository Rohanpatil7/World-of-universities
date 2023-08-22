let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    

    let collage = await getInfo(country);
    show(collage);

});

function show(collage) {
    let list = document.querySelector('ul');
    list.innerText = "";

    for (col of collage) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

   
}

async function getInfo(country) {
    try {
        let res = await axios.get(url+country);
    return res.data;
    } catch (error) {
        console.error("error , ",error);
       return [];    
    }
    
}
