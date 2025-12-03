const user = {
  name: 'Brad'
}

// optional chaining: ?
// console.log(user.address?.city)

// Nullish Coalescing Operator ??
let value = null
value = true
value = undefined
value = ''
value = 0

// returns the right hand operator only if the left hand operator is null or undefined
// not just falsey
let result = value ?? 'default value'

// returns the right hand operator only if the left hand operator is falsey
let result2 = value || 'default value'

console.log(result)
console.log(result2)

// undefined ?? 'Unknown'
console.log(user.address?.city ?? 'Unknown')
