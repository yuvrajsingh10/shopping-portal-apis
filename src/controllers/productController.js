const Product = require('../db/models/productModel')
const slugify = require('slugify')

const newProduct = async (req, res) => {
  try {
    console.log(Product)
    if (req.body.title)
      req.body.slug = slugify(req.body.title)
    console.log(req.body)
    const { title, description, status, slug } = req.body;
    const newProduct = await Product.create({
      title,
      description,
      slug,
      status,
    })
    res.json(newProduct);
  }
  catch (error) {
    res.status(404).json({error: "Something went wrong"});
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(product){
      res.json(product)
      return
    }
    res.status(404).json({ error: "Product Not found" })
  }
  catch (error) {
    res.status(404).json({ error: "Something went wrong!" })
  }
}

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts)
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (req.body?.title)
      req.body.slug = req.body?.title;
    const product = await Product.findByIdAndUpdate(id, {
      title: req.body?.title,
      description: req.body?.description,
      slug: req.body?.slug
    }, { new: true })
    if(product){
      res.json(product)
      return
    }
    res.status(404).json({ error: "Product Not found" })
  } catch (error) {
    res.status(404).json({ error: "Something went wrong" })
  }
}
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id);

    if(deletedProduct){
      res.json(deletedProduct)
      return
    }
    res.status(404).json({ error: "Product Not found" })
  }
  catch (error) {
    res.status(404).json({ error: "Something went wrong" })
  }
}

module.exports = { newProduct, getAllProducts, deleteProduct, getProduct, updateProduct };