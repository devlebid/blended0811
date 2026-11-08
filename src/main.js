// task 01
function createProduct(name, price, quantity, tagsString) {
  const tags = tagsString.split(',');

  if (!tags.includes('popular')) {
    tags.push('popular');
  }

  return {
    name: name,
    price: price,
    quantity: quantity,
    available: quantity > 0,
    tags: tags,
  };
}

console.log(createProduct('Навушники', 2500, 8, 'audio,wireless'));
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 8,
//   available: true,
//   tags: ['audio', 'wireless', 'popular']
// }
const products = [];

function addProduct(products, name, price, quantity, tagsString) {
  const product = createProduct(name, price, quantity, tagsString);
  products.push(product);

  return product;
}

addProduct(products, 'Ноутбук', 32000, 4, 'tech,work');
addProduct(products, 'Навушники', 2500, 8, 'audio,wireless');
addProduct(products, 'Миша', 1200, 3, 'gaming');

console.log(products);
// [
//   {
//     name: 'Ноутбук',
//     price: 32000,
//     quantity: 4,
//     available: true,
//     tags: ['tech', 'work', 'popular']
//   },
//   {
//     name: 'Навушники',
//     price: 2500,
//     quantity: 8,
//     available: true,
//     tags: ['audio', 'wireless', 'popular']
//   },
//   {
//     name: 'Миша',
//     price: 1200,
//     quantity: 3,
//     available: true,
//     tags: ['gaming', 'popular']
//   }
// ]

function findProduct(products, productName) {
const normalName = productName.toLowerCase(); 
  for( const product of products) {
 if (product.name.toLowerCase() === normalName){
  return product;
 }
  }
  return null;
}

console.log(findProduct(products, 'НАВУШНИКИ'));
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 8,
//   available: true,
//   tags: ['audio', 'wireless', 'popular']
// }

console.log(findProduct(products, 'Клавіатура')); // null

// task 04

function createOrderItem(products, productName, orderedQuantity) {
  const checkedItem = findProduct(products, productName)

  if (checkedItem === null) {
    return null
  }

  if (checkedItem.quantity < orderedQuantity || orderedQuantity <= 0) {
    return null
  };

  const orderedItem = {
    name: checkedItem.name,
    price: checkedItem.price,
    quantity: orderedQuantity,
    total: orderedQuantity * checkedItem.price
  };

  checkedItem.quantity -= orderedQuantity;

  if (checkedItem.quantity <= 0) {
    checkedItem.available = false
  }

  return orderedItem;
}



console.log(createOrderItem(products, 'Навушники', 2));
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 2,
//   total: 5000
// }

console.log(products);
// [
//   ...
//   {
//     name: 'Навушники',
//     price: 2500,
//     quantity: 6,
//     available: true,
//     tags: ['audio', 'wireless', 'popular']
//   },
//   ...
// ]

console.log(createOrderItem(products, 'Миша', 3));
// {
//   name: 'Миша',
//   price: 1200,
//   quantity: 3,
//   total: 3600
// }

console.log(products);
// [
//   ...
//   {
//     name: 'Миша',
//     price: 1200,
//     quantity: 0,
//     available: false,
//     tags: ['gaming', 'popular']
//   }
// ]
