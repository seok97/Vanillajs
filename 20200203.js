// alert('히히 만들어보장 ');
//console.log('이건 콘솔로 출력할꺼야');

/*
const what = "문자열입니다.";
console.log('what = ',what);
*/

// const what = true;

// Float
// const wat = 1.2;

// Array
/*
const one = "mon";
const two = "tue";
const tree = "wed";
const four = "thu";
const five = "fri";

const daysOfWeek = ["mon","tue","wed","thu","fir","sat","sun"];
console.log(daysOfWeek);
*/

// Obeject

const suck = {
    name:"woo",
    age:24,
    gender:"Male",
    isHandsome:true
}

console.log(suck);

// 객체중 하나만 출력

console.log(suck.gender);

// 객체안의 값을 변경

suck.isHandsome = false;
console.log(suck.isHandsome);

// 또한 객체안의 값으로 array를 넣을수있으며 반대로 array안에 객체를 넣을 수 있다. 
const foood = {
    fastfood: [{name:"burger"},{name:"cocakole"}]
}

console.log(foood);
console.log(foood.fastfood);
console.log(foood.fastfood[0].name);


