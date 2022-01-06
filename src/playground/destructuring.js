// for object destructuring
// const person = {
//   name: 'Possible',
//   age: 25,
//   location: {
//     city: "Oshodi",
//     temp: 27
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age} years old`)
// const {city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`)
// }
// const book = {
//   title: 'Ego is the Enemny',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher 

// console.log(publisherName)

// for array destructuring

// const address = ['24 $ Alhaji Shokoya Street', 'Oshodi', 'Lagos', '2434']
// const [, city, state = 'Port Harcourt'] = address
// console.log(`You are in ${city} ${state}.`)

// const item = ['Coffee {ice}', '$2.00', '$2.50', '$2.75']
// const [ coffee, , mediumPrice] = item
// console.log(`A medium ${coffee} costs ${mediumPrice}`)