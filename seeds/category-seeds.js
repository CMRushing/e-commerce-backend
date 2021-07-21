const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hoodies',
  },
  {
    category_name: 'Joggers',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Kangols',
  },
  {
    category_name: 'Kicks',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
