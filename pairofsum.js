function getPairOfSum(arr,sum){
    let dictionary ={};
    for(let i= 0;i<arr.length;i++){
        if(dictionary[arr[i]]){
            return {
                a:arr[i],
                b:dictionary[arr[i]]
            }

            }else{
                dictionary[sum -arr[i]] = arr[i]

            }    
        
        }
        return "pair not found"
    }
let arr =[10,23,40,50,60,70]
console.log(getPairOfSum(arr, 70));
console.log(getPairOfSum(arr, 50));