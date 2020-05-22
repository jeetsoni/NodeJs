//object property shorthand
const name = 'Andrew'
const age = 27

const user = {
    name,
    age,
    location: 'Dhandhuka'
}

console.log(user);

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)
