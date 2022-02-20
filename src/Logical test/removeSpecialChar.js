let str = "SBS ,Clifton $ and Finosys Development Application ! development"

let marker = ["$", "and", "!", "Finosys"];


let removeMarker = (arr, str) => {
  let split = str.split(" ")
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < split.length; j++){
      if(arr[i] === split[j]){
        split.splice(j, 1)
        console.log(split)

        
        str = split.join(" ")
      }
      
    }
  }
  
  
  return str
}
  


console.log(removeMarker(marker, str))