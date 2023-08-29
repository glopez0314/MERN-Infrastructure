require("dotenv").config();
require("./config/database");

const Category = require("./models/Category");
const SubCategory = require("./models/SubCategory");
const Product = require("./models/Product");
(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Dog", emoji: "🐶" },
    { name: "Cat", emoji: "🐱" },
    { name: "Parrot", emoji: "🦜" },
  ]);

  await SubCategory.deleteMany({});
  const subCategories = await SubCategory.create([
    { name: "Toys" },
    { name: "Food" },
    { name: "Bed" },
    { name: "Bird Cage" },
  ]);

  await Product.deleteMany({});
  const product = await Product.create([
    {
      name: "test food 1",
      description: "testinggg",
      brand: "testos",
      dimensions: "40 x 20 x 10 inches",
      weight: "5 lb",
      price: 10.99,
      category: categories[1],
      subCategory: subCategories[1],
    },
    {
      name: "test food 2",
      description: "testing testing",
      brand: "testawon",
      dimensions: "60 x 30 x 12 inches",
      weight: "10 lb",
      price: 18.99,
      category: categories[0],
      subCategory: subCategories[1],
    },
    {
      name: "test food 3",
      description: "testing testing 123",
      brand: "testfly",
      dimensions: "20 x 15 x 5 inches",
      weight: "3 lb",
      price: 8.99,
      category: categories[2],
      subCategory: subCategories[1],
    },
  ]);

  console.log(product);

  process.exit();
});
