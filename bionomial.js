function bionoimal(num,k){
    if(k > num) return 0;
    if(k==0 || k == num) return 1;
    return bionoimal(num -1 , k-1) + bionoimal(num-1, k)
}
console.log(bionoimal(6,3))