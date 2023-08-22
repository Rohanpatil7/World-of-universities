// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    
    let state_province = document.querySelector("#input1").value;
    
    console.log(state_province);

    let state = await getstate(state_province);
    show1(state);

});

function show1(state_province) {
   
    let list2 = document.querySelector('.list2');
    list2.innerText = "";

    for (sta of  state_province) {
        console.log(sta.name);

        let li2 = document.createElement("li");
        li2.innerText = sta.name;
        list2.appendChild(li2);
    }
}

async function getstate(stateprovince) {
    try {
        let res = await axios.get(url+stateprovince);
    return res.data;
    } catch (error) {
        console.error("error , ",error);
       return [];    
    }
    
}