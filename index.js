const converter = require("number-to-words");
const R = require("ramda");
const h = require("hyperscript");
const buzzwords = require("buzzwords");
const convert = require("color-convert");
const cssColorList = require("css-color-list");

// 1. Use the number to words module and map, to transform this
// array of number to array of words
// const converter = require('number-to-words')
// // converter.toWords(10)  // ten
// const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 99, -2];
const converted = R.map(converter.toWords, numbers);
// console.log(converted);

// 2. Use the map function to add 10 to array of numbers
// const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]

function add10(x) {
  return x + 10;
}
const add10Result = R.map(add10, numbers);
// console.log(add10Result);

// 3. Use the map function and hyperscript to tranform a list of strings to
// an unordered list
// hyperscript docs
// const h = require('hyperscript')
// const buzzwords = require('buzzwords')
// const li = (w) => h('li', w)
// console.log(h('ul', __ ))

function li(w) {
  return h("li", w);
}
console.log(h("ul", R.map(li, buzzwords)).outerHTML);

// 4. Use the map function to convert a list of colors to their rgb code.
// const convert = require('color-convert')
// const cssColorList = require('css-color-list')
// // ex: convert.keyword.rgb('red')
const colorArray = cssColorList();
const con = c => convert.keyword.rgb(c);
// console.log(colorArray.map(con));

// 5. Use the map function transform a list of movies objects from a movie
// db search into a list of movie posters.

// const h = require('hyperscript')
// const request = require('request')
// const search = (query, callback) => {
// request({
// method: 'GET',
// json: true,
// url: 'http://www.omdbapi.com/?r=json&s=' + query
// }, (e,r,b) => callback(e,b))
// }
// const img = (url) => h('img', {src: url})
// search('batman', (e,b) => {
// // map over results and show movie posters
// })

//Filter exercises

// 1. Show only even numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(x) {
  if (x % 2 === 0) return x;
}
// console.log(nums.filter(evenNumbers));

// 2. Show only numbers divisible by 5
const nums2 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

function divBy5(x) {
  if (x % 5 === 0) {
    return x;
  }
}

// console.log(nums2.filter(divBy5));

// 3. Filter all buzzwords that contains cloud, html, and data
// const h = require("hyperscript");
// const buzzwords = require("buzzwords");

function contains(w) {
  if (!w.includes("cloud") || !w.includes("html") || !w.includes("data")) {
    return true;
  }
  return false;
}
const li = w => h("li", w);
// const filtered = buzzwords.filter(contains);

console.log(h("ul", R.map(li, buzzwords.filter(contains))).outerHTML);
