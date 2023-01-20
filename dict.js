let arr = [10,11,22,33,44];
let dictionary ={
    "0":0,
    "1":11,
    "2":22
}
for(let i =0; i <arr.length; i++){
    dictionary[i]=arr[i];
    console.log(i)
}
console.log(dictionary)