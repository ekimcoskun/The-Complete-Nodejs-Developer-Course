// Object property shorthand

const name = "Ekim";
const userAge = 24;

const user = {
  name,
  age: userAge,
  location: "Istanbul",
};

console.log(user);

// Object Destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 200,
  salePrice: undefined,
  rating: 4.2,
};

//  const label = product.label
//  const stock = product.stock

//  const {label: productLabel, stock, rating = 5} = product
//  console.log(productLabel)
//  console.log(stock)

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
