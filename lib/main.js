'use strict'
function format(str1,str2){
    return str1+'\n'+str2+'\n';
}
function formatLyric(num1,num2,num3,unit1,unit2){
    var str1 = num1 + ' ' + unit1 +' of beer on the wall, '+ num2 + ' ' + unit1 + ' of beer.';
    var str2 = 'Go to the store and buy some more, '+ num3 +' '+ unit2 +' of beer on the wall.';
    var str3 = 'Take one down and pass it around, '+ num3 +' '+ unit2 +' of beer on the wall.';
    if(num1 === 'No more'){
        return format(str1,str2);
    }else{
        return format(str1,str3);
    }
}
function choiceType(n) {
    switch (n){
        case 0: return formatLyric('No more','no more','99','bottles','bottles');
        case 1: return formatLyric(1,1,'no more','bottle','bottles');
        case 2: return formatLyric(2,2,1,'bottles','bottle');
        default: return formatLyric(n,n,n-1,'bottles','bottles');
    }
}
function main(n){
    var resCollection = [],res;

    for(var i = n; i >= 0; i--){
        resCollection.push(choiceType(i));
    }
    res = resCollection.join('');
    return res;
}

module.exports = main;
