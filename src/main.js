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
