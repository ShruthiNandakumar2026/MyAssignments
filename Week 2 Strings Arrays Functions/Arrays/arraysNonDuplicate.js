let value=[23,78,76,89,78,90,67,56,90]
let duplicate=[]

for (let i=0;i<value.length;i++){
    let count=0  //reset count for each loop
    for(let j=0;j<value.length;j++){
        if(value[i]===value[j]){
            count++
        }
    }
    if(count===1){  //to check the repetition
        duplicate.push(value[i])
    }
}
console.log("non-matching",duplicate);