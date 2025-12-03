// function getRectangleArea(width, height) {
//   return width * height
// }

// Implicit return
const getRectangleArea = (width, height) => width * height

// function does not need to return
const sayHello = () => console.log('Hello')

// console.log(getRectangleArea(5, 10))
// sayHello()

const numbers = [1, 2, 3, 4, 5]

// callbacks

// const double = numbers.map(function (number) {
//   return number * 2
// })

// map -> Creates a new array called double
const double = numbers.map(number => number * 2)
// console.log(double)

// arrow functions can't be accessed until initialized
regular()
// arrow()

function regular() {
  console.log('regular')
}

const arrow = () => console.log('arrow')

regular()
arrow()

// The this keyword works differently with arrow functions
const person = {
  name: 'Brad',
  sayHelloRegular: function () {
    console.log('Regular: ', this.name)
    console.log(this)
  },
  sayHelloArrow: () => console.log('Arrow: ', this.name)

  // this is an empty object in node
  // it is the window object in the browser
  // sayHelloArrow: () => console.log(this)
}

person.sayHelloRegular()
person.sayHelloArrow()
