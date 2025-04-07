// Built-in browser feature
// Stores key-value pairs in strings
// Persists even after the browser is closed
// Has a size limit-5mb
// Only works in the same origin
// Task: TODO App

// localStorage.setItem('name', 'Korede')
// const value = localStorage.getItem('key')
// localStorage.removeItem('key')
// localStorage.clear()

// store items

// localStorage.setItem('name', 'Korede')
// const name = localStorage.getItem('name')
// console.log(name);

// storing Objects
// const user = {
//     name: 'Korede',
//     role: 'Tutor'
// }
// localStorage.setItem('user', JSON.stringify(user))
// const storedUser = JSON.parse(localStorage.getItem('user'))
// console.log(storedUser.name);

const newName = "Inala"
localStorage.setItem("myName", newName)

const user = {
    name: "Nathaniel",
    lastName: "Clinton",
    age: 22,
    role: "Student"
}

localStorage.setItem("newUser", JSON.stringify(user))

const getUsers = JSON.parse(localStorage.getItem("newUser"))
console.log(getUsers);
console.log("FullName: ", getUsers.name + " " + getUsers.lastName);


const newNam = localStorage.getItem("myName")
console.log(newNam);

console.log(localStorage.length)
console.log(localStorage.key("myName"))
// localStorage.removeItem("myName")
// localStorage.clear()

