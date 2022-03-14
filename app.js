
let division = "./division.json"
let district = "./district.json"
let upazila = "./upazila.json"
let dist_id;
let div_id;

let divisionID = document.getElementById('divisionID')
let districtID = document.getElementById('districtID')
let upazilaID = document.getElementById('upazilaID')
function div(){
    dist(div_id)
    fetch(division)
    .then(res => res.json())
    .then(data=> Object.entries(data).forEach((div, index)=>{
        let result;
        div[1].forEach((item, ind)=>{
         div_id += item.id
         result += `<option value=${item.name}>${item.name}</option>`
        })
        divisionID.innerHTML = result
        console.log(div_id)
    }))
    
}
div()
function dist(){
    upa()
    fetch(district)
    .then(res => res.json())
    .then(data=> Object.entries(data).forEach((dist, index)=>{
        let result;
        dist[1].forEach((item, ind)=>{
           
            result += `<option value=${item.name}>${item.name}</option>`
        })
        districtID.innerHTML = result
    }))
    
}

function upa(){
    fetch(upazila)
    .then(res => res.json())
    .then(data=>  Object.entries(data).forEach((upaZila, index)=>{
        let result;
        upaZila[1].forEach((item, ind)=>{
            result += `<option value=${item.name}>${item.name}</option>`
        })
        upazilaID.innerHTML = result
    }))
}

