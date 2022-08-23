// Code your solution here
function findMatching(drivers, string){
    let matching= drivers.filter((value)=>{

      return value.toLowerCase()===string.toLowerCase();
    });
    return matching;
}

function fuzzyMatch(drivers, string){
 let filtered = drivers.filter((value)=>{
    return value.slice(0,2)==string.slice(0,2);
    });
 return filtered;
}

function matchName(drivers,string){
let matching =drivers.filter((item)=>{
    return item.name ===string
})
return matching;
 }