(function(){;
    let ConvertToBinary = (num) =>
    {
        let binaryNum = 0;
        let rem, quotient, i=1, step=1;
        while (num != 0)
        {
            rem = num % 2;
            quotient = parseInt(num/2);
        
    
            num = quotient;
            step++;
    
            binaryNum = binaryNum + rem * i;
            i = i * 10;
        }
        console.log(`Binary number : ${binaryNum}`);
    
    }
    ConvertToBinary(16);
    ConvertToBinary(17);
    })();