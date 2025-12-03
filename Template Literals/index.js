const name = 'John'
const age = 30

// const greeting =
// 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'

const greeting = `Hello, my name is ${name} and I am ${age} years old.`

console.log(greeting)

const formatDate = timestamp => {
  const date = new Date(timestamp)
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
}

const note = {
  title: 'Discuss project',
  timestamp: Date.now()
}

console.log(`Last Edited: ${formatDate(note.timestamp)}`)
