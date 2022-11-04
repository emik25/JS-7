// 1 - задание
let arr = [1,2,false,'hello',24,'world',undefined,null,'error',22]

console.log(arr);
arr.filter(num => {
    if(typeof num === 'number'){
        console.log('good');
    }else{
        console.log('bad');
    }
})


// 2 - задание
let arr2 = [[{a: {price:20}}],[{a: {price:35}}],[{a: {price:44}}],]
let total = 0

arr2.filter(num => total = arr2[0][0].a.price + arr2[1][0].a.price + arr2[2][0].a.price)
console.log(total);


// total = (arr2[0][0].a.price + arr2[1][0].a.price + arr2[2][0].a.price)
// console.log(total);