const user = {
  name: 'Brad'
}

// optional chaining
console.log(user.address?.city)

// Nullish Coalescing Operator

let value = null
let result = value ?? 'default value'
console.log(result)

console.log(user.address?.city ?? 'Unknown')
