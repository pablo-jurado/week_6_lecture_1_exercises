// 1. In your own words, explain how object literals are used to store related
// information and why that is useful.

// Objects are an unordered list of properties and values.
// This values can be primitives, arrays, functions, and other objects.
// Objects are very handy because they allow us to encapsulate related data and
// they are easy to read because of dot notation, for example is easier to know wha
// we are expecting from this objects: 'myObject.name, myObject.lastName' than
// from this arrays 'myArray[0], myArray[1]'

// 2. Write a short program in which you create two objects whose properties
// describe fictional characters. Output both objects to the console.

var superHeros = [
  {
    name: 'Petter',
    lastName: 'Parker'
  },
  {
    name: 'Bruce',
    lastName: 'Wayne'
  }
]

for (var i = 0; i < superHeros.length; i++) {
  console.log('Hi my name is ' + superHeros[i].name + ' ' + superHeros[i].lastName)
}

// 3. Write a small program that does the following:

// Create an object using object literal syntax with at least five properties.
// For example, your object might represent a person and include properties
// for name, age, number of children, etc.

var person = {
  name: 'Pablo',
  lastName: 'Jurado',
  age: 31,
  gender: 'male',
  childrens: 0
}

// Output the object directly to the console

console.log(person)

// Write a string that describes the object using the properties you created.
// For example, "Dan is a 35 year old father of 2 kids." Be sure to access the
// properties using the dot property accessor.

function logPerson (obj) {
  console.log(obj.name + ' ' + obj.lastName + ' is ' + obj.age +
  ' years old and has ' + obj.childrens + ' childrens.')
}

logPerson(person)

// Change the value of one of the properties using dot notation.

person.childrens = false

// Add a new property to the object using dot notation.

person.nationality = 'Argentina'

// Output the object directly to the console.

console.log(person)

// Write a new string that describes the object using all of the object's
// properties. Be sure to include the property you just created.

console.log(person.name + ' ' + person.lastName + ' is ' + person.age +
' years old and he is from ' + person.nationality + '.')
