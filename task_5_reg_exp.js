// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest


let str_1 = 'ahb acb aeb aeeb adcb axeb';
let str_2 = '2 + 3 223 2223';
let reg_1 =/a.b/g
let reg_2 =/2\s\+\s3/g
console.log(str_1.match(reg_1))
console.log(str_2.match(reg_2))
let now = new Date();
console.log('day: ',now.getDate(),'\nmonth: ',now.getMonth(),'\nyear: ',now.getFullYear())
