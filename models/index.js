// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belong to category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
    onDelete: 'CASCADE'
})

// Products belong to many tags (through ProductTag)
Product.belongsToMany(Tag, { 
    through: ProductTag,
    foreignKey: 'product_id',
})

// Tags belong to many products (through ProductTag)
Tag.belongsToMany(Product, { 
    through: ProductTag,
    foreignKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
