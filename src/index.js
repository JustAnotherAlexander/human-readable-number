module.exports = function toReadable (number) {

  let result=[];
  number+='';
  number=number.split('');
  number=number.reverse();

        if (number.length==1) {
            result.push(digits(number,result,0));    
        }

        if (number.length==2) {
            if (number[1]>1 && number[0]!=0) {
                result.push(decimals(number,result,1));
                result.push(digits(number,result,0));
            } else if (number[1]>1 && number[0]==0) {
                result.push(decimals(number,result,1));
            } else if (number[1]==1) {
                if (number[0]==0) {
                    result.push('ten');
                } else if (number[0]==1) {
                    result.push('eleven');
                } else if (number[0]==2) {
                    result.push('twelve');
                } else if (number[0]==3) {
                    result.push('thirteen');
                } else if (number[0]==4) {
                    result.push('fourteen');
                } else if (number[0]==5) {
                    result.push('fifteen');
                } else if (number[0]==6) {
                    result.push('sixteen');
                } else if (number[0]==7) {
                    result.push('seventeen');
                } else if (number[0]==8) {
                    result.push('eighteen');
                } else if (number[0]==9) {
                    result.push('nineteen');
                }
            }
        }

        if (number.length==3) {
            if (number[2]!=0 && number[1]>1 && number[0]!=0){
                result.push(hundreeds(number,result,2));
                result.push(decimals(number,result,1));
                result.push(digits(number,result,0));
            } else if (number[2]!=0 && number[1]==1) {
                result.push(hundreeds(number,result,2));
                if (number[0]==0) {
                    result.push('ten');
                } else if (number[0]==1) {
                    result.push('eleven');
                } else if (number[0]==2) {
                    result.push('twelve');
                } else if (number[0]==3) {
                    result.push('thirteen');
                } else if (number[0]==4) {
                    result.push('fourteen');
                } else if (number[0]==5) {
                    result.push('fifteen');
                } else if (number[0]==6) {
                    result.push('sixteen');
                } else if (number[0]==7) {
                    result.push('seventeen');
                } else if (number[0]==8) {
                    result.push('eighteen');
                } else if (number[0]==9) {
                    result.push('nineteen');
                }
            } else if (number[2]!=0 && number[1]!=0 && number[0]==0) {
                result.push(hundreeds(number,result,2));
                result.push(decimals(number,result,1));
            } else  if (number[2]!=0 && number[1]==0 && number[0]!=0) {
                result.push(hundreeds(number,result,2));
                result.push(digits(number,result,0));
            } else if (number[2]!=0 && number[1]==0 && number[0]==0) {
                result.push(hundreeds(number,result,2));
            }
        
        }
  return result.join(' ');
}

function hundreeds (number,res,index) {
    switch (number[index]) {
        case '1' :
            return 'one hundred';
        case '2' :
            return 'two hundred';
        case '3' :
            return 'three hundred';
        case '4' :
            return 'four hundred';
        case '5' :
            return 'five hundred';
        case '6' :
            return 'six hundred';
        case '7' :
            return'seven hundred';
        case '8' :
            return'eight hundred';
        case '9' :
            return 'nine hundred';
    }
}

function decimals (number,res,index) {
    switch (number[index]) {
        case '2' :
            return 'twenty';
        case '3' :
            return'thirty';
        case '4' :
            return'forty';
        case '5' :
            return'fifty';
        case '6' :
            return 'sixty';
        case '7' :
            return'seventy';
        case '8' :
            return 'eighty';
        case '9' :
            return 'ninety';
    }
}

function digits (number,res,index) {
    switch (number[index]) {
        case '0' :
            return 'zero';
        case '1' :
            return 'one';
        case '2' :
            return 'two';
        case '3' :
            return 'three';
        case '4' :
            return 'four';
        case '5' :
            return 'five';
        case '6' :
            return 'six';
        case '7' :
            return 'seven';
        case '8' :
            return 'eight';
        case '9' :
            return 'nine';
    }
}