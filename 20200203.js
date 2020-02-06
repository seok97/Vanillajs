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
/*
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
*/

//함수.
/*
const caluc = {
    plus:function(a,b){
        return a + b;
    },
    minus:function(a,b){
        let ans;
        if(a > b){
            ans = a - b;
        }else if(a < b){
            ans = b - a;
        }
        return ans;
    },
    division:function(a,b){
        return a / b;
    },
    multi:function(a,b){
        return a * b;
    },
    sq:function(a,b){
        let ans = a;
        for(let i= 0 ; i < b; i++){
            ans = ans*a;
        };
        return ans;
    }
}

const plus = caluc.plus(5,6);
const min = caluc.minus(5,6);
const divi = caluc.division(5,6);
const multi = caluc.multi(5,6);
const sq = caluc.sq(5,6);

console.log(plus);
console.log(min);
console.log(divi);
console.log(multi);
console.log(sq);

 */

 // 백틱(`)
/*
 function say(name,age){
     return `hello ${name} you are ${age} years old`;
 }

 const greeet = say("suck",24);

 console.log(greeet);
 */

 // document 객체
/*
 console.log(document);

 console.log(document.getElementById("title"));

 const title = document.getElementById("title");

 title.innerHTML = "수정했따 병신아!";

 console.log(title.dir);

 title.style.color = "red";

 document.title = "이것도 바꿧다";

 */

 
 // querySelector

 const title = document.querySelector("#title");
 title.innerHTML = "쿼리셀렉터 이용하기";
 