const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Hip-Hop',
  },
  {
    tag_name: 'R&B',
  },
  {
    tag_name: 'Reggae',
  },
  {
    tag_name: 'Soca',
  },
  {
    tag_name: 'Dancehall',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;