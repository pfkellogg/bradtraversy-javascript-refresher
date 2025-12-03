const notes = ['Meeting Notes', 'Grocery List']

// mutates array directly
// notes.push('Workout Plan')

// console.log(notes)

// spread operator
// const newNotes = [...notes]
// const newNotes = [...notes, 'Workout Plan']

// change an element when you make a new array
const newNotes = notes.map(note =>
  note == 'Grocery List' ? 'Shopping List' : note
)

// console.log(newNotes)

// Objects
const user = {
  name: 'John Doe',
  age: 30
}

// mutable
// user.age = 31

// spread operator
const newUser = {
  ...user,
  age: 31
}

console.log(user)
console.log(newUser)
