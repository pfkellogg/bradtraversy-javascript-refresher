const getRectangleArea = (width, height) => width * height
// const sayHello = () => console.log('Hello')

const numbers = [1, 2, 3, 4, 5]

// const double = numbers.map(function (number) {
//   return number * 2
// })

const double = numbers.map(number => number * 2)

// console.log(double)

// console.log(getRectangleArea(5, 10))
// sayHello()

function regular() {
  // console.log('regular')
}
const arrow = () => console.log('arrow')
// arrow()

// regular()

const person = {
  name: 'Brad',
  sayHelloRegular: function () {
    console.log('Regular: ', this.name)
  },
  // sayHelloArrow: () => console.log('Arrow: ', this.name)
  // this is an empty object in node
  sayHelloArrow: () => console.log(this)
}

person.sayHelloRegular()
person.sayHelloArrow()
