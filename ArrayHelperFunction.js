//for each
let numberarray = [4, 2, 7, 9];

numberarray.forEach(function (num) {
    console.log(num);
});
//reduce
var arr = [1, 2, 4, 6, 8];

var result = arr.reduce((total, element) => total + element, 10);

console.log(result);

//filter
const fruits = [
    { name: "banana", color: "yellow" },
    { name: "watermelon", color: "red" },
    { name: "orange", color: "orange" }
]
const filteredFruits = fruits.filter(fruit => fruit.color === 'yellow');
console.log(filteredFruits)

//map
const objects = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 }
];

let b = objects.map((object) => {
    return object.b;
});
console.log(b);

//unshift
 let namearray = ["Arya","Esha","Bhakti","Sneha"];
 console.log(namearray);
 let remove= namearray.unshift("esha");
 console.log(remove);
 //shift
 let add = namearray.shift("priya");
 console.log(add);
 //splice
 let spliced = namearray.splice(1, 2, "megha","Priya");
 console.log(spliced);
 //slice
 let slicedName = namearray.slice(1,2);
 console.log(slicedName);
 
 //join
 const elements = ['Fire', 'Air', 'Water'];
 console.log(elements.join());
 console.log(elements.join(''));

 //indexof
 let flowers = ['rose', 'lili']
 let index = flowers.indexOf('lili');
 console.log(index);

 //split
let names = 'Bilbo, Gandalf, Nazgul';
let array = names.split(', ');
for (let name of array) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

