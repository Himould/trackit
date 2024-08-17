
var fullname = 'niyi'

// console.log (fullname)


// alert (fullname)

var isAstudent =true

var age = 24

age = 45
console.log(age)
var info = {
fullname: 'niyi',
isAstudent: true,
age: 24,
food : [
    'rice',
    'beans',
    'yam',
    'garri',
    'semo'
]
};

console.log (info);

var food = [
    'rice',
    'beans',
    'yam',
    'garri',
    'semo',
    fullname = 'niyi',
isAstudent = true,
age = 24,
];

console.log (food)

var fight = null

console.log (fight);

const BVN = 2323

console.log (BVN)

let name = 'okem'

name = 'abbey'
console.log(name)

const courses = []
courses.push(1)
courses.push(2)
courses.push(5)
// courses.pop()
// courses.shift()
courses.unshift(7)
console.log (courses.slice(0, 2))

console.log (info.food)

let x = 5
let y = 6
let result = x + y

console.log (result)

console.log (Math.floor(20.3))

if (isAstudent) {
    console.log('joinClass')
} else {
    console.log('getout') 
}

for (let i = 0; i<=10; i++){
    console.log('this is number' + i)
}

// Filter

const numAge = [20, 45, 30,34,23,47,53,28]
const newAge = numAge.filter(function(age) {
    return age > 30;
})

const newAgeFind = numAge.find(function(age) {
    return age === 30;
})


console.log(newAgeFind)

// function
function greet(name){
 return console.log('good morning', name);
console.log('good bye');
}
greet('obinna')


const greetAgain = () => {
    console.log('good morning', name);
console.log('good bye');
}

// async Function

// async function getMeProduct() {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const datas = await res.json();
//     console.log(datas);
// }
// getMeProduct()

// const orElem = document.querySelector('.or')
// console.dir(orElem)

const createElem = document.querySelector('h2')
console.dir(createElem)
