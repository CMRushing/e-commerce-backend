const { Product } = require('../models');

const productData = [
  {
    product_name: 'V-necks',
    price: 16.00,
    stock: 20,
    category_id: 7,
  },
  {
    product_name: 'Pennys',
    price: 140.00,
    stock: 30,
    category_id: 4,
  },
  {
    product_name: 'Snap-backs',
    price: 20.00,
    stock: 15,
    category_id: 8,
  },
  {
    product_name: 'LPs',
    price: 10.00,
    stock: 60,
    category_id: 3,
  },
  {
    product_name: 'Jeans',
    price: 34.42,
    stock: 33,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;