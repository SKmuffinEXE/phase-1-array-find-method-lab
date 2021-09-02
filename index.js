
function superbowlWin(record){
    // return record.result === "W";
    const foundWin = record.find((element)=>{
        if (element.result === "W"){
            return element;
            }        
        })
        console.log("Hi")
        console.log(foundWin)
    if(foundWin !== undefined){
        return foundWin.year
    }
    else{
        return foundWin
    }
}

// record.find(superbowlWin)["year"]