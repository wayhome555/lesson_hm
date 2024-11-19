// 编写一个函数，[1,2,3,4,5,6,7,8,9,0]
// return "(123) 456-7890" 电话号码
const numbers = [1,2,3,4,5,6,7,8,9,0];
// ``模板字符串
function getPhoneNum(arr){
    //const numberStr = numbers.join('');
    //const formattedNumber = `(${numberStr.substring(0, 3)}) ${numberStr.substring(3, 6)}-${numberStr.substring(6)}`;
    //return formattedNumber;
return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`;
}

console.log(getPhoneNum(numbers));
