function getUniqueElement(arr){
    let dictionary ={};
    for(let i =0; i<arr.length;i++){
        if(dictionary[arr[i]] == undefined){
            dictionary[arr[i]] = 1;

        }else{
            dictionary[arr[i]] +=1
        }
       
    }
    console.log(dictionary)
}

function getUniqueByBitwise(arr){
    let output = arr[0];
    for(let i= 1; i<arr.length; i++){
        output = output ^ arr[i];
    }
    return output
}

let arr=[12,33,45,23,23,45,12]
getUniqueElement(arr);
console.log(getUniqueByBitwise(arr));