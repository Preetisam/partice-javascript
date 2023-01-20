// function nfibb(Nth){
// let previous = 0;
// let current =1;
// let temp;

// if(Nth == 1){
// return previous;
// }else if(Nth == 2){
//     return current;
// }
// else{
//     for(let i =3; i<Nth;i++){
//         temp =previous;
//         previous = current;
//         current +=temp;
        
//     }
//     return current;
   
// }
// }


// let Nth = 5
// console.log(Nth, "fibb number ",  nfibb(1));
function fibonacci(number){
    let previous =0, current =1,output = 0;
    console.log(previous);
    console.log(current)
    for(let i= 3; i <= number;i ++){
        output = previous +current;
        console.log(output);
        previous =current ;
        current =output;
    }
    return current;
}
console.log(fibonacci(5))