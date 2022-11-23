// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})


Product.belongsToMany(Tag, { through: 'ProductTag', onDelete: 'CASCADE'})

Tag.belongsToMany(Product, { through: 'ProductTag', onDelete: 'CASCADE'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
