const notes = ['Meeting Notes', 'Grocery List']
// spread operator
// const newNotes = [...notes, 'Workout Plan']

const newNotes = notes.map(note =>
  note == 'Grocery List' ? 'Shopping List' : note
)

console.log(newNotes)

// Objects
const user = {
  name: 'John Doe',
  age: 30
}

// mutable
// user.age = 31

const newUser = {
  ...user,
  age: 31
}

console.log(newUser)
console.log(user)
