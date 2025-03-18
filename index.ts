console.log("gojaru desu")

const message: string = "Hello, TypeScript!"
const number: number = 100
const flag: boolean = true
console.log({message, number, flag})

function add(a: number, b: number): number {
  return a + b
}
console.log(add(1, 2))

function greet(name: string): string {
  return `Hello, ${name}!`
}
console.log(greet("TypeScript"))

let numbers: number[] = [1, 2, 3]
console.log(numbers)
let mixed: (string | number)[] = [1, "2", 3]
console.log(mixed)

interface User {
  name: string
  age: number
  isAdmin: boolean
}
let user: User
user = {
  name: "Alice",
  age: 20,
  isAdmin: false
}
console.log(user)

function getUserName(user: User): string {
  return user.name
}
console.log(getUserName(user))

enum Color {
  Red,Green, Blue
}
console.log(Color.Red)

class Animal {
  constructor(public name: string) {}
  bark(): string {
    return `Wan, ${this.name}`
  }
}
let dog = new Animal("Hachi")
console.log(dog.bark())

function identity<T>(arg: T): T {
  return arg
}
console.log(identity<string>("foo"))
console.log(identity<number>(1))

// function fetchUser(id: number): Promise<User> {
//   return Promise.resolve({
//     name: "Bob",
//     age: 30,
//     isAdmin: true
//   })
// }
// fetchUser(1).then(user => console.log(user))
// async function fetchUserAsync(id: number): Promise<User> {
//   return {
//     name: "Bob",
//     age: 30,
//     isAdmin: true
//   }
// }
// fetchUserAsync(1).then(user => console.log(user))

function printID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
printID(1)