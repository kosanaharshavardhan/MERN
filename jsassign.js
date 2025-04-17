function FormatCurrency(amount,currencyCode){
    amount=String(amount.toFixed(2));
    let array=amount.split('.');
    let realPart=array[0];
    let decimalPart=array[1];
    let comma=',';
    if(currencyCode==='INR'){
        decimalPart=`${'.'}${decimalPart}`;
        let commaCnt=-2;
        for(let i=realPart.length-1;i>-1;i--){
            decimalPart=`${realPart[i]}${decimalPart}`; 
            if(i===realPart.length-3&&i!=0){
                decimalPart=`${comma}${decimalPart}`;
            }
            if(commaCnt===2&&i!=0){
                decimalPart=`${comma}${decimalPart}`;
                commaCnt=0;
            }
            commaCnt++;
        }
        decimalPart=`${'₹'}${decimalPart}`;
        console.log(decimalPart);
    }
    if(currencyCode=='USD'){
        decimalPart=`${'.'}${decimalPart}`;
        let commaCnt=0;
        for(let i=realPart.length-1;i>-1;i--){
            if(commaCnt===3){
                decimalPart=`${comma}${decimalPart}`;
                commaCnt=0;
            }
            decimalPart=`${realPart[i]}${decimalPart}`; 
            commaCnt++;
        }
        decimalPart=`${'$'}${decimalPart}`;
        console.log(decimalPart);
    }
    if(currencyCode=='EUR'){
        decimalPart=`${','}${decimalPart}`;
        let commaCnt=0;
        for(let i=realPart.length-1;i>-1;i--){
            if(commaCnt===3){
                decimalPart=`${'.'}${decimalPart}`;
                commaCnt=0;
            }
            decimalPart=`${realPart[i]}${decimalPart}`; 
            commaCnt++;
        }
        decimalPart=`${'€'}${decimalPart}`;
        console.log(decimalPart);
    }
}
amount=prompt('Enter amount value');
currencyCode=prompt('Enter Currency Code:');
FormatCurrency(Number(amount),currencyCode)
