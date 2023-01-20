function addNumber(a,b){
    let greater = a > b ? a : b;
    let samller = a < b? a : b;
    while(samller > 0){
        greater++;
        samller--;

    }
    return greater;
}
console.log(addNumber(10,20))
